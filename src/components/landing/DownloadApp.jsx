import React from 'react';

const DownloadApp = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 overflow-hidden relative text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-container/30 skew-x-12 translate-x-20"></div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold mb-8">Học mọi lúc, mọi nơi</h2>
          <p className="text-primary-fixed/80 text-xl max-w-2xl mb-12">Tải ứng dụng Parroto và bắt đầu hành trình chinh phục tiếng Anh ngay hôm nay trên cả iOS và Android.</p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-white text-primary px-8 py-4 rounded-2xl flex items-center gap-4 hover:bg-primary-fixed transition-colors">
              <span className="material-symbols-outlined text-3xl">ios</span>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">Download on the</p>
                <p className="text-xl font-bold">App Store</p>
              </div>
            </button>
            <button className="bg-white text-primary px-8 py-4 rounded-2xl flex items-center gap-4 hover:bg-primary-fixed transition-colors">
              <span className="material-symbols-outlined text-3xl">play_store_installed</span>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">Get it on</p>
                <p className="text-xl font-bold">Google Play</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
