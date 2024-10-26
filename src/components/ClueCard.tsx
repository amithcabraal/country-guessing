import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Users, Building2, Container } from 'lucide-react';

interface ClueCardProps {
  type: string;
  content: string | number;
  revealed: boolean;
  points: number;
  onClick: () => void;
}

const ClueCard: React.FC<ClueCardProps> = ({ type, content, revealed, points, onClick }) => {
  const formatContent = (type: string, content: string | number) => {
    if (type === 'population') {
      return `${new Intl.NumberFormat().format(content as number)} people`;
    }
    return content;
  };

  const getIcon = () => {
    switch (type) {
      case 'flag': return <Flag className="w-6 h-6" />;
      case 'population': return <Users className="w-6 h-6" />;
      case 'capital': return <Building2 className="w-6 h-6" />;
      case 'export': return <Container className="w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-full"
    >
      <button
        onClick={onClick}
        className={`w-full p-4 rounded-lg ${
          revealed 
            ? 'bg-blue-600 hover:bg-blue-700' 
            : 'bg-gray-700 hover:bg-gray-600'
        } transition-colors duration-200 flex flex-col items-center justify-center min-h-[160px]`}
      >
        {revealed ? (
          <>
            {type === 'flag' ? (
              <div className="w-full h-32 relative mb-2">
                <img 
                  src={content as string} 
                  alt="Country Flag"
                  className="w-full h-full object-contain rounded-md"
                  loading="lazy"
                />
              </div>
            ) : (
              <>
                {getIcon()}
                <div className="text-lg font-semibold text-center mt-2">
                  {formatContent(type, content)}
                </div>
              </>
            )}
            <div className="mt-2 text-sm text-gray-300 uppercase tracking-wide">
              {type}
            </div>
          </>
        ) : (
          <>
            {getIcon()}
            <div className="text-base font-medium text-gray-300 mt-2">
              Reveal {type}
            </div>
            <div className="mt-2 text-sm text-yellow-400">
              -{points} points
            </div>
          </>
        )}
      </button>
    </motion.div>
  );
};

export default ClueCard;