import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Mic, Bot, User } from "lucide-react";

const ChatScreen = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hello! I'm your AI therapy companion. How are you feeling today? Remember, I'm here to listen and support you.",
      timestamp: new Date(Date.now() - 300000) // 5 minutes ago
    },
    {
      id: 2,
      sender: "user",
      text: "Hi, I've been feeling a bit overwhelmed with work lately.",
      timestamp: new Date(Date.now() - 240000) // 4 minutes ago
    },
    {
      id: 3,
      sender: "ai", 
      text: "I understand that work stress can feel overwhelming. It's completely normal to feel this way. Can you tell me more about what specifically is making you feel overwhelmed?",
      timestamp: new Date(Date.now() - 180000) // 3 minutes ago
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: "user" as const,
      text: message,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setMessage("");

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        sender: "ai" as const,
        text: "Thank you for sharing that with me. It takes courage to open up about these feelings. Let's explore some coping strategies that might help you manage this overwhelming feeling.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Header */}
      <div className="bg-card/90 backdrop-blur-sm border-b border-border/50 p-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon" className="rounded-xl">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <h1 className="font-semibold text-lg">AI Therapist</h1>
              <p className="text-sm text-foreground-muted">Always here to listen</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="max-w-4xl mx-auto p-4 pb-24">
        <div className="space-y-6">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.sender === 'user' 
                  ? 'bg-mint-light' 
                  : 'bg-primary-light'
              }`}>
                {msg.sender === 'user' ? (
                  <User className="w-5 h-5 text-foreground" />
                ) : (
                  <Bot className="w-5 h-5 text-foreground" />
                )}
              </div>
              
              <div className={`max-w-md ${msg.sender === 'user' ? 'ml-auto' : 'mr-auto'}`}>
                <div className={`p-4 rounded-2xl ${
                  msg.sender === 'user'
                    ? 'bg-mint text-foreground rounded-br-md'
                    : 'bg-card text-card-foreground rounded-bl-md shadow-[var(--shadow-soft)]'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
                <p className={`text-xs text-foreground-muted mt-1 ${
                  msg.sender === 'user' ? 'text-right' : 'text-left'
                }`}>
                  {formatTime(msg.timestamp)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border/50 p-4">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSendMessage} className="flex gap-3">
            <div className="flex-1 relative">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="pr-12 py-3 rounded-2xl border-border/50 bg-background"
              />
              <Button 
                type="button"
                variant="ghost" 
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg"
              >
                <Mic className="w-4 h-4" />
              </Button>
            </div>
            <Button 
              type="submit" 
              disabled={!message.trim()}
              className="btn-therapy px-4 py-3 rounded-2xl"
            >
              <Send className="w-5 h-5" />
            </Button>
          </form>
          
          <p className="text-xs text-foreground-muted text-center mt-2">
            Remember: This is an AI assistant. For crisis support, contact emergency services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;