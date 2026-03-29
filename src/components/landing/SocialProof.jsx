import React from 'react';

const SocialProof = () => {
  const testimonials = [
    {
      name: 'Minh Anh',
      role: 'Marketing Manager',
      text: '"Vocera thay đổi hoàn toàn cách tôi học tiếng Anh. Shadowing giúp tôi tự tin nói chuyện với đồng nghiệp nước ngoài chỉ sau 3 tháng."',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDao7vyCDYbb5WFEb3jEL1NwKX1mW8QgflAto6Z--NZQteHG_MclFo7TT00GsJdOTlwjJA0m5mY8wKYPq-T1_n-I2yN8iwm37wLwwqKsdbaEvcwvL1OmJKZFFfoZF9w_XLETWZpOHskOQ4b7MEiD90NPUud2X8JhEVaR0-8tfM5MOHPD_tftIh5C9k8bUD0bnTGZy-Vp7GKlFwa_gqV0qi3qP8F1nfdZ3MW7RnPXzUhD6-YOeaGJBx5IGYt4zFZvoSpfGzmLvtk9utg'
    },
    {
      name: 'Hoàng Nam',
      role: 'Software Engineer',
      text: '"Tính năng Dictation cực kỳ gây nghiện. Nó giúp tôi nhận ra những âm cuối (ending sounds) mà trước đây tôi luôn bỏ lỡ."',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtEOJ6b5yyqF4hzvPWdfxbiRtq0P2NNpsxLfSJkbtghpAUv0EdA_Qc08Cm9BkF-r9EvaBtMW1oZjPj6kYEHuMIu_IsMlcbecHxNWPtC-XFg6BTabdm0Kk2oje_V0L-r0Y9oWMv-iSbBvYqvJqdAieipQcUxlLQwq3r_mmUsKmefK_JzmCtKKwOOskE0-VCqbz_mOHEQXjOQYNqfF0PbLb_1wHdC20b8yeeQsSSXw9fgFTqACUPILZ-kfrOtMX_nZQmq1isB8tGCBSF'
    },
    {
      name: 'Thu Thảo',
      role: 'University Student',
      text: '"Giao diện tối giản giúp tôi tập trung tối đa vào việc học. Cảm giác như đang được trải nghiệm một sản phẩm cao cấp mỗi ngày."',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJVNhRbm1-xsu3TjLA6xoFRjNGSvIQDI13MqPeWr4IWiolRfXG2GR22-ydtLsq5AxOud0HHesa4ur03RoCYQaD71-B2JCdaebpuydKJWs6BO6BB-8dk-BTLQe8lx30r8WeJkhPfeXhD9EgNVk2ITD5T0VeSNtKJcLY7V7MKkVYpsVyHHfnk_sMe2kFHUkJpzJlfEPbjfSaDbSmS6Qw7lT17Qdf1ZIEhJicX0goTgzNIKDK3D9-IqECIhO8IvQqOFtTElICSInihchs'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4">Được tin dùng bởi hơn 500,000 học viên</h2>
            <p className="text-on-surface-variant text-lg">Những câu chuyện thành công từ cộng đồng Vocera trên toàn thế giới.</p>
          </div>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-xl bg-surface-container-low border border-transparent hover:border-primary/20 transition-all">
              <div className="flex text-secondary-container mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-on-surface-variant italic mb-8 leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-4">
                <img alt="User avatar" className="w-12 h-12 rounded-full object-cover" src={t.image} />
                <div>
                  <p className="font-bold text-on-surface">{t.name}</p>
                  <p className="text-sm text-on-surface-variant">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
