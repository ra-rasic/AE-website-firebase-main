"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { getFaqAnswer } from "@/lib/actions";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Bot, User } from "lucide-react";

interface Message {
  role: "user" | "bot";
  content: string;
}

export function FaqChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hello! I'm the AEGIS AI assistant. How can I help you with your Florida insurance questions today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div');
        if (viewport) {
          viewport.scrollTo({ top: viewport.scrollHeight, behavior: 'smooth' });
        }
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const result = await getFaqAnswer(input);
    
    let botMessage: Message;
    if (result.error) {
      botMessage = { role: "bot", content: result.error };
    } else {
      botMessage = { role: "bot", content: result.data.answer };
    }
    
    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  return (
    <Card className="h-[60vh] flex flex-col shadow-lg">
      <CardHeader>
        <CardTitle>Insurance FAQ Chatbot</CardTitle>
        <CardDescription>Ask our AI assistant any question about Florida insurance.</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden p-0">
        <ScrollArea className="h-full" ref={scrollAreaRef}>
          <div className="space-y-4 p-6">
            {messages.map((message, index) => (
              <div key={index} className={`flex items-start gap-3 ${message.role === "user" ? "justify-end" : ""}`}>
                {message.role === "bot" && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground"><Bot size={20} /></AvatarFallback>
                  </Avatar>
                )}
                <div className={`rounded-lg px-4 py-2 max-w-[80%] shadow-sm ${
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}>
                  <p className="text-sm">{message.content}</p>
                </div>
                {message.role === "user" && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback><User size={20} /></AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                 <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground"><Bot size={20} /></AvatarFallback>
                  </Avatar>
                <div className="rounded-lg px-4 py-2 bg-muted shadow-sm">
                    <div className="flex items-center space-x-2">
                        <span className="h-2 w-2 bg-foreground rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                        <span className="h-2 w-2 bg-foreground rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                        <span className="h-2 w-2 bg-foreground rounded-full animate-pulse"></span>
                    </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="pt-6">
        <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            disabled={isLoading}
            aria-label="Chat input"
          />
          <Button type="submit" size="icon" disabled={isLoading} aria-label="Send message">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
