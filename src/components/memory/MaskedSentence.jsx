import React from 'react';
import MaskedWord from './MaskedWord';

const MaskedSentence = ({ sentence }) => {
  // Split the sentence into words and non-words (punctuation/spaces)
  // \b doesn't work well for French with apostrophes, so we can use a regex to match word characters including accented ones and apostrophes.
  // Actually, a simpler approach is matching word characters + apostrophes, or simply everything that isn't a space/punctuation.
  const regex = /([\p{L}\p{M}'-]+)|([^\p{L}\p{M}'-]+)/gu;

  const tokens = [];
  let match;
  while ((match = regex.exec(sentence)) !== null) {
    tokens.push(match[0]);
  }

  return (
    <div className="flex flex-wrap gap-x-2 gap-y-3 items-center">
      {tokens.map((token, index) => {
        // If it's a word (contains letters)
        if (/^[\p{L}\p{M}'-]+$/u.test(token)) {
          return <MaskedWord key={index} word={token} />;
        }
        // If it's just spaces, we can probably skip rendering them as individual elements or render them as normal text
        if (token.trim() === '') {
          return null; // CSS gap handles spacing
        }
        // If it's punctuation
        return (
          <span key={index} className="text-base font-medium">
            {token}
          </span>
        );
      })}
    </div>
  );
};

export default MaskedSentence;
