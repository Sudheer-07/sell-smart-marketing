
import React from 'react';
import { cn } from '@/lib/utils';

type ChatMessageProps = {
  message: string;
  isUser: boolean;
};

const ChatMessage = ({ message, isUser }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "my-2 p-3 rounded-lg max-w-[80%]",
        isUser 
          ? "bg-softsell-blue text-white ml-auto rounded-tr-none" 
          : "bg-gray-100 text-gray-800 mr-auto rounded-tl-none"
      )}
    >
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default ChatMessage;
