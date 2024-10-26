import React from 'react';
import { Share2 } from 'lucide-react';
import type { GameStats } from '../types/country';

interface ShareButtonProps {
  stats: GameStats;
  countryName: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ stats, countryName }) => {
  const generateShareText = () => {
    const emoji = stats.won ? '🎉' : '😔';
    return `${emoji} Globetrotter ${new Date().toISOString().split('T')[0]}\n
Country: ${countryName}
Score: ${stats.score} points
Clues used: ${stats.cluesRevealed}/4
Attempts: ${stats.attempts}

Play at: ${window.location.origin}`;
  };

  const handleShare = async () => {
    const text = generateShareText();
    
    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          fallbackShare(text);
        }
      }
    } else {
      fallbackShare(text);
    }
  };

  const fallbackShare = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Results copied to clipboard!');
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg w-full justify-center mt-4"
    >
      <Share2 className="w-5 h-5" />
      Share Results
    </button>
  );
};

export default ShareButton;