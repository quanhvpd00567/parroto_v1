import React from 'react';

const ProfileActions = ({ onSave, onCancel, isSaving }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-end gap-4 pt-8">
      <button
        className="w-full md:w-auto px-8 py-4 text-on-surface-variant font-bold hover:bg-surface-container-high rounded-xl transition-colors active:scale-95"
        type="button"
        onClick={onCancel}
      >
        Cancel
      </button>
      <button
        className="w-full md:w-auto px-12 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-lg rounded-xl shadow-[0_8px_24px_rgba(0,40,142,0.2)] hover:brightness-110 active:scale-95 transition-all disabled:opacity-50"
        type="button"
        onClick={onSave}
        disabled={isSaving}
      >
        {isSaving ? 'Saving...' : 'Save Changes'}
      </button>
    </div>
  );
};

export default ProfileActions;
