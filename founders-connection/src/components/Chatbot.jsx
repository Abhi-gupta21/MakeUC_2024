import React, { useState } from "react";
import dotenv from 'dotenv';



const Chatbot = () => {
  
    const apiKey = import.meta.env.VITE_APP_OPENAI_API;
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);
    console.log(apiKey);

    async function askGPT(query) {
        if (apiKey === undefined || apiKey === null) {
            throw new Error("OpenAI API key is not set");
        }

        setLoading(true);
        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "gpt-4o",
                    messages: [
                        { role: "system", content: "You are a startup advisor for University students on F1 visa. They tell you their dreams and you craft a reply to help them" },
                        { role: "user", content: query }
                    ]
                })
            });

            if (!response.ok) {
                throw new Error("Failed to fetch response from OpenAI");
            }

            const data = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
            console.error("Error fetching OpenAI response:", error);
            return "Sorry, I couldn't process your request. Please try again later.";
        } finally {
            setLoading(false);
        }
    }

    const handleSend = async () => {
        if (userInput.trim()) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { role: "user", content: userInput }
            ]);

            const botResponse = await askGPT(userInput);

            setMessages((prevMessages) => [
                ...prevMessages,
                { role: "bot", content: botResponse }
            ]);

            setUserInput("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-green-100 p-20">
            <div className="bg-white w-96 min-h-[400px] rounded-lg shadow-lg flex flex-col overflow-hidden">
                <div className="bg-green-500 text-white text-center p-3 font-bold">Chatbot</div>
                <div className="flex-grow p-4 overflow-y-auto space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                            <div className={`max-w-xs p-3 rounded-lg ${msg.role === "user" ? "bg-green-100" : "bg-gray-200"}`}>
                                <p>{msg.content}</p>
                            </div>
                        </div>
                    ))}
                    {loading && <div className="text-center">Loading...</div>}
                </div>
                <div className="flex p-4 bg-gray-50">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-grow p-3 rounded-lg border border-gray-300 mr-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                        onClick={handleSend}
                        className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 focus:outline-none"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
