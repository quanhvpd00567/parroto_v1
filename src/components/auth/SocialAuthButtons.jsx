import React from 'react';

const SocialAuthButtons = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all active:scale-95 duration-200 group">
        <img
          alt="Google"
          className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxsdqKG8AqqwM7VoO-ktzgVkDb2HGUfDsOiA2uS7mv8kkIMJGFHvoENIBeVJvxkDikzK8cUW0b4s1Mt-7Jo-Rdffb7847mvSwK2-8nuKVHtBP0dmxYyUE1zxwmOIM-S_8rr9uQQ8MpIM3rO7CnoFNKW4yY7JpP5DkTTWAKwsO459wOSE1553AlKXDP1nOUWJ4cdsNjY2-fCPuJbNqXLsuSXE_XG2hxNJyzuMxPOu9XCJZDHVfI0ugqpOT0ujFop34BxC8ExIkKHP51"
        />
        <span className="text-sm font-semibold text-on-surface-variant">Google</span>
      </button>
      <button className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all active:scale-95 duration-200 group">
        <span className="material-symbols-outlined text-xl text-on-surface-variant group-hover:text-on-surface transition-all">ios</span>
        <span className="text-sm font-semibold text-on-surface-variant">Apple</span>
      </button>
    </div>
  );
};

export default SocialAuthButtons;
