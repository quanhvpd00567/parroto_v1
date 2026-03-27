import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

let toastId = 0;

const ICONS = {
  success: 'check_circle',
  danger: 'error',
  info: 'info',
  warning: 'warning',
};

const STYLES = {
  success: 'bg-green-600',
  danger: 'bg-red-600',
  info: 'bg-blue-600',
  warning: 'bg-amber-500',
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 4000) => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message, type }]);
    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {/* Toast container */}
      <div className="fixed top-20 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`${STYLES[toast.type]} text-white px-5 py-3 shadow-lg flex items-center gap-3 min-w-[300px] max-w-[420px] pointer-events-auto animate-slide-in`}
            role="alert"
          >
            <span className="material-symbols-outlined text-xl shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
              {ICONS[toast.type]}
            </span>
            <span className="text-sm font-medium flex-1">{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="shrink-0 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
