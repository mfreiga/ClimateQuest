import { useState } from "react";
import { Button } from "./button";
import { Card } from "./card";
import { Input } from "./input";
import { Bot, X } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    [
      {
        text: "Hi! How can I help you with your climate goals today?",
        isUser: false,
      },
    ],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessages([...messages, { text: message, isUser: true }]);
    setMessage("");

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message! I'm here to help you achieve your sustainability goals.",
          isUser: false,
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <Card className="w-[350px] h-[500px] flex flex-col relative">
          <div className="p-4 border-b flex justify-between items-center bg-green-600 text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <h3 className="font-semibold">Climate Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-green-700 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.isUser
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit">Send</Button>
            </div>
          </form>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg"
        >
          <Bot className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatWidget;
