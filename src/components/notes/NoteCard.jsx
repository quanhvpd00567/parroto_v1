import React from 'react';
import { useNavigate } from 'react-router-dom';

const categoryStyles = {
  'BUSINESS ENGLISH': 'bg-blue-100 text-blue-700',
  'GRAMMAR': 'bg-green-100 text-green-700',
  'DAILY CONVERSATION': 'bg-purple-100 text-purple-700',
  'VOCABULARY': 'bg-amber-100 text-amber-700',
};

const NoteCard = ({ note, onDelete, loading }) => {
  const navigate = useNavigate();
  const title = note.lesson_title || note.title;
  const catStyle = categoryStyles[note.category?.toUpperCase()] || 'bg-gray-100 text-gray-600';

  const handleTitleClick = () => {
    if (note.lesson_id) {
      navigate(`/lessons/${note.lesson_id}`);
    } else {
      navigate('/lessons');
    }
  };

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-5 md:p-6 shadow-sm border border-outline-variant/15 hover:shadow-md transition-shadow group relative">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-4">
          {/* Category + Date */}
          <div className="flex items-center gap-3">
            {note.category && (
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${catStyle}`}>
                {note.category}
              </span>
            )}
            <span className="text-xs text-on-surface-variant/60 font-medium">{note.date}</span>
          </div>

          {/* Title (lesson name) — clickable */}
          <h3
            onClick={handleTitleClick}
            className="text-xl font-bold font-headline text-on-surface hover:text-primary transition-colors leading-tight cursor-pointer"
          >
            {title}
          </h3>

          {/* Content */}
          <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
            {note.content}
          </p>
        </div>

        {/* Delete button */}
        <button
          onClick={() => onDelete(note.id)}
          disabled={loading}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-outline-variant/20 bg-white shadow-sm text-on-surface-variant/50 hover:bg-red-50 hover:border-red-200 hover:text-error transition-all shrink-0 disabled:opacity-50"
        >
          <span className="material-symbols-outlined text-lg">delete</span>
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
