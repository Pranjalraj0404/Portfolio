import { GEMINI_API_KEY, GEMINI_MODELS } from "./config";

export const callGeminiAPI = async (prompt, systemContext = "") => {
  if (!GEMINI_API_KEY) {
    console.error("Gemini API key is missing.");
    return "AI assistant is currently offline.";
  }
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    systemInstruction: { parts: [{ text: systemContext }] },
  };

  const models =
    GEMINI_MODELS?.split(",")
      .map((m) => m.trim())
      .filter(Boolean) || ["gemini-2.5-flash", "gemini-2.5-pro", "gemini-3.0-flash"];
  const maxRetries = 3;

  for (const model of models) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
    let attempt = 0;

    while (attempt < maxRetries) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        return (
          data.candidates?.[0]?.content?.parts?.[0]?.text ||
          "I couldn't generate a response."
        );
      } catch (error) {
        attempt++;
        if (attempt === maxRetries) break;
        await new Promise((resolve) =>
          setTimeout(resolve, 1000 * Math.pow(2, attempt))
        );
      }
    }
  }

  return "Sorry, I'm having trouble connecting to my AI brain right now.";
};
