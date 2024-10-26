import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface GuessInputProps {
  onGuess: (guess: string) => void;
  disabled: boolean;
}

const GuessInput: React.FC<GuessInputProps> = ({ onGuess, disabled }) => {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guess.trim()) {
      onGuess(guess.trim());
      setGuess('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-6">
      <div className="relative">
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          disabled={disabled}
          placeholder={disabled ? "Game Over" : "Guess the country..."}
          className="w-full px-4 py-3 bg-gray-700 rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={disabled || !guess.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-300 hover:text-white disabled:opacity-50"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default GuessInput;