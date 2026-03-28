import React from 'react';

const NoteCard = ({ note, onDelete, loading }) => {
  const { category, date, title, content } = note;

  const categoryStyles = {
    'BUSINESS ENGLISH': 'bg-primary-fixed text-primary',
    'GRAMMAR': 'bg-tertiary-fixed text-tertiary',
    'DAILY CONVERSATION': 'bg-secondary-fixed text-secondary',
  };

  const currentCategoryStyle = categoryStyles[category?.toUpperCase()] || 'bg-surface-container-high text-on-surface-variant';

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-sm border border-outline-variant/15 hover:shadow-md transition-shadow group relative">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${currentCategoryStyle}`}>
              {category}
            </span>
            <span className="text-xs text-on-surface-variant/60 font-medium">
              {date}
            </span>
          </div>
          <button
            onClick={() => onDelete(note.id)}
            disabled={loading}
            className="p-2 rounded-full hover:bg-error-container hover:text-error text-on-surface-variant/40 transition-all focus:outline-none focus:ring-2 focus:ring-error/20 disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-xl">delete</span>
          </button>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-bold font-headline text-on-surface group-hover:text-primary transition-colors leading-tight">
            {title}
          </h3>
          <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
