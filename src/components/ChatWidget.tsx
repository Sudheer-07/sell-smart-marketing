
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Send, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import ChatMessage from './ChatMessage';
import { getAIResponse, getSuggestedQuestions } from '@/services/mockAI';

type Message = {
  content: string;
  isUser: boolean;
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      content: "👋 Hi there! I'm SoftBot, your virtual assistant. How can I help you with software license reselling today?", 
      isUser: false 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestedQuestions = getSuggestedQuestions();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { content: userMessage, isUser: true }]);
    setIsLoading(true);
    
    try {
      const aiResponse = await getAIResponse(userMessage);
      setMessages(prev => [...prev, { content: aiResponse, isUser: false }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        content: "Sorry, I'm having trouble connecting. Please try again later.", 
        isUser: false 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
    setMessages(prev => [...prev, { content: question, isUser: true }]);
    
    // Get AI response for the suggested question
    setIsLoading(true);
    getAIResponse(question)
      .then(response => {
        setMessages(prev => [...prev, { content: response, isUser: false }]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className={cn(
          "fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-full shadow-lg transition-all duration-300",
          isOpen 
            ? "bg-red-500 hover:bg-red-600 h-12 w-12" 
            : "bg-gradient-to-r from-softsell-blue to-softsell-purple text-white h-14 w-14 hover:scale-105"
        )}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </button>

      {/* Chat window */}
      <div
        className={cn(
          "fixed bottom-24 right-5 z-50 bg-white rounded-lg shadow-xl w-80 sm:w-96 transition-all duration-300 flex flex-col",
          isOpen ? "opacity-100 scale-100 h-[500px]" : "opacity-0 scale-95 h-0 pointer-events-none"
        )}
      >
        {/* Chat header */}
        <div className="bg-gradient-to-r from-softsell-blue to-softsell-purple p-4 rounded-t-lg">
          <h3 className="text-white font-semibold flex items-center">
            <MessageCircle size={18} className="mr-2" />
            SoftBot Assistant
          </h3>
        </div>

        {/* Messages container */}
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <ChatMessage 
              key={index} 
              message={message.content} 
              isUser={message.isUser} 
            />
          ))}
          
          {isLoading && (
            <div className="flex space-x-2 p-3 bg-gray-100 rounded-lg max-w-[80%] mr-auto">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested questions */}
        {messages.length < 3 && (
          <div className="px-4 py-2 border-t border-gray-100">
            <p className="text-xs text-gray-500 mb-2">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.slice(0, 3).map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-gray-700 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input area */}
        <div className="p-3 border-t border-gray-200 flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-softsell-blue text-sm"
            disabled={isLoading}
          />
          <Button 
            size="icon"
            className="ml-2 bg-softsell-blue hover:bg-softsell-blue/90 text-white rounded-full"
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
          >
            <Send size={18} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
