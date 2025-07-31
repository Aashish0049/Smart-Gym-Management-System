import React, { useState } from "react";
import { X } from "lucide-react";
import { sendMessageToGPT } from "../utils/service"; // ✅ Correct import

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const botReplyText = await sendMessageToGPT(input);

    const botReply = { from: "bot", text: botReplyText };
    setMessages((prev) => [...prev, botReply]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 w-80 z-50 shadow-2xl rounded-xl 
    border bg-white">
      <div className="flex items-center justify-between bg-gray-900
       text-white px-4 py-2 rounded-t-xl">
        <span className="font-semibold">AI Assistant</span>
        <button onClick={onClose}><X size={18} /></button>
      </div>

      <div className="p-3 h-64 overflow-y-auto space-y-2 text-sm">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg max-w-xs ${
              msg.from === "user" ? "bg-blue-100 ml-auto text-right" : "bg-gray-100"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className="text-gray-400 text-xs">Bot is typing...</div>}
      </div>

      <div className="flex border-t p-2 gap-2">
        <input
          type="text"
          className="flex-1 px-2 py-1 border rounded"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
