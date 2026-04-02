import React, { useState } from 'react';

const MaskedWord = ({ word }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <span
      className="cloze-text px-2 py-0.5 bg-surface-container-highest rounded-md text-on-surface-variant font-bold text-sm border border-outline-variant/20 hover:bg-primary-fixed hover:text-primary cursor-pointer transition-all duration-200"
      onClick={() => setIsRevealed(prev => !prev)}
    >
      {isRevealed ? word : '*'.repeat(word.length)}
    </span>
  );
};

export default MaskedWord;
