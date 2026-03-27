import React from 'react';

const MethodologyBento = () => {
  return (
    <section className="bg-surface-container-low py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-6">Lộ trình 4 bước tinh gọn</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">Chúng tôi không dạy ngữ pháp khô khan. Chúng tôi dạy bạn cách phản xạ tự nhiên như người bản xứ.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
          {/* Step 1 */}
          <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between ambient-shadow border border-outline-variant/10">
            <div className="flex justify-between items-start">
              <div className="max-w-md">
                <span className="text-primary font-bold text-lg mb-2 block">01</span>
                <h3 className="font-headline text-3xl font-bold mb-4">Choose Lessons</h3>
                <p className="text-on-surface-variant">Thư viện hàng ngàn video từ TedTalk, Movie Trailer và Podcast được phân loại theo trình độ của riêng bạn.</p>
              </div>
              <div className="w-20 h-20 bg-primary-fixed rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-4xl">video_library</span>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <span className="px-4 py-2 bg-surface-container-high rounded-full text-sm font-medium">Begginer</span>
              <span className="px-4 py-2 bg-surface-container-high rounded-full text-sm font-medium">Business</span>
              <span className="px-4 py-2 bg-surface-container-high rounded-full text-sm font-medium">IELTS 7.0+</span>
            </div>
          </div>
          {/* Step 2 */}
          <div className="md:col-span-4 bg-primary-container p-10 rounded-xl text-white flex flex-col justify-between ambient-shadow">
            <div>
              <span className="text-primary-fixed font-bold text-lg mb-2 block">02</span>
              <h3 className="font-headline text-3xl font-bold mb-4">Dictation</h3>
              <p className="text-primary-fixed/80">Luyện nghe sâu bằng cách điền từ còn thiếu. Ép bộ não phải nhận diện từng âm tiết nhỏ nhất.</p>
            </div>
            <div className="mt-8">
              <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-tertiary-fixed-dim w-2/3 shadow-[0_0_8px_rgba(78,222,163,0.5)]"></div>
              </div>
              <p className="text-xs mt-3 text-primary-fixed/60">Độ chính xác: 88%</p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="md:col-span-4 bg-secondary p-10 rounded-xl text-white flex flex-col justify-between ambient-shadow">
            <div>
              <span className="text-secondary-fixed font-bold text-lg mb-2 block">03</span>
              <h3 className="font-headline text-3xl font-bold mb-4">Shadowing</h3>
              <p className="text-secondary-fixed/80">Ghi âm và so sánh giọng đọc với AI. Chỉnh sửa phát âm, trọng âm và ngữ điệu chuẩn xác.</p>
            </div>
            <div className="flex justify-center mt-6">
              <span className="material-symbols-outlined text-6xl animate-pulse">mic</span>
            </div>
          </div>
          {/* Step 4 */}
          <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between ambient-shadow border border-outline-variant/10 overflow-hidden relative">
            <div className="relative z-10">
              <span className="text-primary font-bold text-lg mb-2 block">04</span>
              <h3 className="font-headline text-3xl font-bold mb-4">Progress Tracking</h3>
              <p className="text-on-surface-variant max-w-sm">Biểu đồ trực quan hóa sự tiến bộ của bạn qua từng ngày. Đừng bao giờ bỏ lỡ lộ trình học tập.</p>
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 h-full hidden md:block">
              <img
                alt="Analytics Dashboard"
                className="w-full h-full object-cover object-left opacity-20"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj-QGUUT6dg0J6RoEbYTGyWILjiQ-8G4ip6jpafn7SE5lIrKCzfDjyo52nhe27Ylam7tXB1CiVLKpLJIDxg0MagY8HPUu-jDSFs5p3d9aVVfrgtAQV7bWzaGAwx8QidibW3r6L2OhDEzRPN_e1fA9TN3fHZdrCjBiuIfqjWwCZ-eGvaXKPdL2y8lruwR8WXJ5VSopH12m3Zo_EhNsEBjDaRaDDaF8rKPqWG8WMhNysCJO4gOKhsfzGoROi8EPmWEaG9OoVnvmRv3jY"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologyBento;
