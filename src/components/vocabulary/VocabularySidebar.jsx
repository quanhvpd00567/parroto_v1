import React from 'react';

const VocabularySidebar = ({ activeMode, onSelectMode, courseName = 'English Advanced' }) => {
  const modes = [
    { id: 'list', label: 'List', icon: 'format_list_bulleted' },
    { id: 'flashcard', label: 'Flashcard', icon: 'style' },
    { id: 'write', label: 'Write', icon: 'edit_note' },
  ];

  return (
    <aside className="h-[calc(100vh-4rem)] w-64 sticky top-16 bg-slate-50 flex flex-col gap-2 py-6 border-r border-outline-variant/10">
      <div className="px-8 py-4 mb-4">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbkV8p_J1FjpZyCdtfofFXSKy_qWuKi6aaEiLHmn5AajqAyWGRQwG5DZowDDcQ4qj9gf-XuMxxvVngJyem15DpTlhXDxYUfuqA62EgClSt_58rV0km2p9OUM-VWhHKpdiNA3nWDs3OVdrpew4oTOr0zT3zcbbg0R_iOC0crWz35Vp5SjkRIZEauV5oouUXyN20j4N6wD8QxXFrVP4ApHpMYovpN_A9E_0wZaezNX5GHsKeQAI6u-M5o32TmA05svOkuD-Jn8GiIcB5"
            />
          </div>
          <div>
            <h3 className="font-headline font-bold text-sm text-on-surface">Study Modes</h3>
            <p className="text-[10px] text-on-surface-variant font-medium uppercase tracking-widest">{courseName}</p>
          </div>
        </div>
      </div>

      <nav className="flex flex-col gap-1">
        {modes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => onSelectMode(mode.id)}
            className={`mx-4 my-1 px-4 py-3 flex items-center gap-3 rounded-full transition-all text-sm font-medium ${
              activeMode === mode.id
                ? 'bg-white text-primary shadow-sm scale-[0.98]'
                : 'text-slate-600 hover:bg-blue-50/50'
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: `'FILL' ${activeMode === mode.id ? 1 : 0}` }}
            >
              {mode.icon}
            </span>
            <span>{mode.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto px-6 pb-8">
        <button className="w-full py-4 px-6 bg-gradient-to-br from-primary to-primary-container text-white rounded-xl font-headline font-bold text-sm shadow-lg hover:shadow-xl transition-all active:scale-95">
          Start Daily Goal
        </button>
      </div>
    </aside>
  );
};

export default VocabularySidebar;
