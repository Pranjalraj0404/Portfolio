import React, { useState, useEffect } from "react";
import { X, Send, Loader2, CheckCircle2 } from "lucide-react";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_YOUR_TEMPLATE_ID,
  EMAILJS_AUTOREPLY_TEMPLATE_ID,
} from "../../utils/config";
import { PERSONAL_INFO } from "../../data/portfolioData";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (window.emailjs && EMAILJS_PUBLIC_KEY) {
      window.emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email,
      to_email: PERSONAL_INFO.email,
      user_name: PERSONAL_INFO.name,
    };

    if (!window.emailjs) {
      console.error("EmailJS object not found.");
      setStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_YOUR_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTOREPLY_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setTimeout(() => {
        setStatus(null);
        setFormData({ name: "", email: "", message: "" });
        onClose();
      }, 2000);
    } catch (error) {
      console.error("EmailJS Send Failed:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative bg-[#0a0a16] border border-white/10 w-full max-w-lg rounded-2xl shadow-2xl animate-fade-in-up p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
        <p className="text-gray-400 mb-6 text-sm">
          I usually respond within 24 hours.
        </p>

        {status === "error" && (
          <div className="p-3 mb-4 text-sm text-red-300 bg-red-900/30 rounded-lg border border-red-500/50">
            Failed to send message. Please check your browser console for API
            errors.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wide">
              Your Name
            </label>
            <input
              type="text"
              required
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-[#1a1a2e] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wide">
              Email Address
            </label>
            <input
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-[#1a1a2e] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wide">
              Message
            </label>
            <textarea
              required
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-[#1a1a2e] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || status === "success"}
            className={`w-full py-4 rounded-lg font-bold text-white transition-all shadow-lg flex justify-center items-center gap-2 ${
              status === "success"
                ? "bg-green-600 shadow-green-500/20"
                : "bg-purple-600 hover:bg-purple-700 shadow-purple-500/20 hover:-translate-y-1"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 size={18} className="animate-spin" /> Sending...
              </span>
            ) : status === "success" ? (
              <span className="flex items-center gap-2">
                <CheckCircle2 size={18} /> Success! Sent Auto-Reply.
              </span>
            ) : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
