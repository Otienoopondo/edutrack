"use client"; // Ensure the component is client-side
import { useState } from "react";
import Navbar from "../parent/components/Navbar"; // Adjust based on your folder structure

export default function ParentChat() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  // Handle sending message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
    setChatHistory([...chatHistory, { sender: "Parent", message }]);
    setMessage("");
  };

  return (
    <div className="bg-lightGray min-h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-extrabold text-primary text-center mb-12">Chat with Teacher</h1>

        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          <div className="h-96 overflow-auto p-4 mb-6 bg-gray-50 rounded-lg shadow-inner">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`mb-4 ${chat.sender === "Parent" ? "text-right" : "text-left"}`}
              >
                <p className="font-semibold">{chat.sender}</p>
                <p>{chat.message}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="flex items-center space-x-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-2 w-full border rounded-lg"
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className="bg-primary text-white p-2 px-6 rounded-lg"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
