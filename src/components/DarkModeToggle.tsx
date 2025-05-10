
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { Toggle } from '@/components/ui/toggle';

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="fixed right-4 bottom-24 z-40 md:right-6">
      <Toggle 
        pressed={theme === 'dark'}
        onPressedChange={toggleTheme}
        aria-label="Toggle dark mode"
        className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
      >
        {theme === 'dark' ? (
          <Sun className="h-5 w-5 text-yellow-400" />
        ) : (
          <Moon className="h-5 w-5 text-gray-700" />
        )}
      </Toggle>
    </div>
  );
};

export default DarkModeToggle;
