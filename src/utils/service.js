// src/utils/service.js
export const sendMessageToGPT = async (message) => {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`, // Must be set in .env
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: message }],
        }),
      });
  
      const data = await response.json();
      
      if (data?.choices?.[0]?.message?.content) {
        return data.choices[0].message.content.trim();
      } else {
        return "⚠️ Sorry, I didn't understand that.";
      }
    } catch (error) {
      console.error("GPT API error:", error);
      return "⚠️ Failed to fetch response from AI.";
    }
  };
  