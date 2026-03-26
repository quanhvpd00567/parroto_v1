import './App.css'

function App() {
  return (
    <div className="text-on-surface antialiased font-body bg-surface">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm font-headline">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center h-16 px-6 md:px-12">
          <div className="text-2xl font-bold tracking-tight text-primary">Parroto</div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-primary font-semibold border-b-2 border-primary pb-1" href="#">Lessons</a>
            <a className="text-slate-600 hover:text-primary transition-colors" href="#">Practice</a>
            <a className="text-slate-600 hover:text-primary transition-colors" href="#">Community</a>
            <a className="text-slate-600 hover:text-primary transition-colors" href="#">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-primary font-semibold px-4 py-2 hover:bg-surface-container-low transition-all duration-300 rounded-lg">Log In</button>
            <button className="btn-gradient text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:opacity-90 active:scale-95 transition-all">Sign Up</button>
          </div>
        </div>
        <div className="bg-slate-100/50 h-[1px] w-full absolute bottom-0"></div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10 text-left">
              <span className="inline-block py-1 px-4 rounded-full bg-secondary-fixed text-on-secondary-fixed font-semibold text-sm mb-6 tracking-wide">PHƯƠNG PHÁP ĐỘT PHÁ</span>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-primary-fixed leading-[1.1] mb-8">
                Luyện Nghe Nói Tiếng Anh với <span className="text-secondary">Dictation</span> và <span className="text-primary-container">Shadowing</span>
              </h1>
              <p className="text-on-surface-variant text-xl leading-relaxed mb-10 max-w-xl">
                Nâng tầm khả năng ngoại ngữ của bạn thông qua việc nghe chép chính tả và nhại giọng người bản xứ một cách tự nhiên và khoa học.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-gradient text-white text-lg font-bold px-10 py-5 rounded-xl ambient-shadow hover:scale-105 transition-transform">Bắt đầu học ngay</button>
                <button className="bg-surface-container-high text-on-primary-fixed-variant text-lg font-bold px-10 py-5 rounded-xl flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-colors">
                  <span className="material-symbols-outlined">play_circle</span>
                  Xem demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
              <div className="relative rounded-xl overflow-hidden ambient-shadow border border-outline-variant/15">
                <img
                  alt="Student learning language"
                  className="w-full h-auto object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIj7DLK4-xEv5EycHzGvfrrmNziOsOBkKDv6fL9APWQU4HWwVXnnHV-eWTXu9R9VEcFBAlk4Bzya_c5yUcXuqbKsNWxWktzHVE0cnCmF3foRMDfrQgADEItvHl26w6kYB2HHz6_2VEPmscnzehAC4POJI86pIx6G64lbV9-8ERzV-O8bxz9zb_rLLtV0G81K65Gp2B__wf3tvcb-f2YFM6JECa8ClKnLaRwbEXoP4HnHM_ksfrVuxv55l9Zcv2BZeyxMRjWd3MK3FA"
                />
                <div className="absolute bottom-6 left-6 right-6 p-6 glass-nav bg-white/40 rounded-xl border border-white/20">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-full bg-tertiary-fixed-dim flex items-center justify-center">
                      <span className="material-symbols-outlined text-tertiary">trending_up</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Tiến độ hôm nay</p>
                      <p className="text-xs text-on-surface-variant">Bạn đã hoàn thành 85% mục tiêu nghe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Bento Grid */}
        <section className="bg-surface-container-low py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-6">Lộ trình 4 bước tinh gọn</h2>
              <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">Chúng tôi không dạy ngữ pháp khô khan. Chúng tôi dạy bạn cách phản xạ tự nhiên như người bản xứ.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
              {/* Step 1 */}
              <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between ambient-shadow border border-outline-variant/10 text-left">
                <div className="flex justify-between items-start">
                  <div className="max-w-md">
                    <span className="text-primary font-bold text-lg mb-2 block">01</span>
                    <h3 className="font-headline text-3xl font-bold mb-4 text-on-surface">Choose Lessons</h3>
                    <p className="text-on-surface-variant">Thư viện hàng ngàn video từ TedTalk, Movie Trailer và Podcast được phân loại theo trình độ của riêng bạn.</p>
                  </div>
                  <div className="w-20 h-20 bg-primary-fixed rounded-2xl flex items-center justify-center shrink-0">
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
              <div className="md:col-span-4 bg-primary-container p-10 rounded-xl text-white flex flex-col justify-between ambient-shadow text-left">
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
              <div className="md:col-span-4 bg-secondary p-10 rounded-xl text-white flex flex-col justify-between ambient-shadow text-left">
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
              <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between ambient-shadow border border-outline-variant/10 overflow-hidden relative text-left">
                <div className="relative z-10">
                  <span className="text-primary font-bold text-lg mb-2 block">04</span>
                  <h3 className="font-headline text-3xl font-bold mb-4 text-on-surface">Progress Tracking</h3>
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

        {/* Social Proof */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl text-left">
                <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4">Được tin dùng bởi hơn 500,000 học viên</h2>
                <p className="text-on-surface-variant text-lg">Những câu chuyện thành công từ cộng đồng Parroto trên toàn thế giới.</p>
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
              {/* Testimonial 1 */}
              <div className="p-8 rounded-xl bg-surface-container-low border border-transparent hover:border-primary/20 transition-all text-left">
                <div className="flex text-secondary-container mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-on-surface-variant italic mb-8 leading-relaxed">"Parroto thay đổi hoàn toàn cách tôi học tiếng Anh. Shadowing giúp tôi tự tin nói chuyện với đồng nghiệp nước ngoài chỉ sau 3 tháng."</p>
                <div className="flex items-center gap-4">
                  <img
                    alt="User avatar"
                    className="w-12 h-12 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDao7vyCDYbb5WFEb3jEL1NwKX1mW8QgflAto6Z--NZQteHG_MclFo7TT00GsJdOTlwjJA0m5mY8wKYPq-T1_n-I2yN8iwm37wLwwqKsdbaEvcwvL1OmJKZFFfoZF9w_XLETWZpOHskOQ4b7MEiD90NPUud2X8JhEVaR0-8tfM5MOHPD_tftIh5C9k8bUD0bnTGZy-Vp7GKlFwa_gqV0qi3qP8F1nfdZ3MW7RnPXzUhD6-YOeaGJBx5IGYt4zFZvoSpfGzmLvtk9utg"
                  />
                  <div>
                    <p className="font-bold text-on-surface">Minh Anh</p>
                    <p className="text-sm text-on-surface-variant">Marketing Manager</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="p-8 rounded-xl bg-surface-container-low border border-transparent hover:border-primary/20 transition-all text-left">
                <div className="flex text-secondary-container mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-on-surface-variant italic mb-8 leading-relaxed">"Tính năng Dictation cực kỳ gây nghiện. Nó giúp tôi nhận ra những âm cuối (ending sounds) mà trước đây tôi luôn bỏ lỡ."</p>
                <div className="flex items-center gap-4">
                  <img
                    alt="User avatar"
                    className="w-12 h-12 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtEOJ6b5yyqF4hzvPWdfxbiRtq0P2NNpsxLfSJkbtghpAUv0EdA_Qc08Cm9BkF-r9EvaBtMW1oZjPj6kYEHuMIu_IsMlcbecHxNWPtC-XFg6BTabdm0Kk2oje_V0L-r0Y9oWMv-iSbBvYqvJqdAieipQcUxlLQwq3r_mmUsKmefK_JzmCtKKwOOskE0-VCqbz_mOHEQXjOQYNqfF0PbLb_1wHdC20b8yeeQsSSXw9fgFTqACUPILZ-kfrOtMX_nZQmq1isB8tGCBSF"
                  />
                  <div>
                    <p className="font-bold text-on-surface">Hoàng Nam</p>
                    <p className="text-sm text-on-surface-variant">Software Engineer</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="p-8 rounded-xl bg-surface-container-low border border-transparent hover:border-primary/20 transition-all text-left">
                <div className="flex text-secondary-container mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-on-surface-variant italic mb-8 leading-relaxed">"Giao diện tối giản giúp tôi tập trung tối đa vào việc học. Cảm giác như đang được trải nghiệm một sản phẩm cao cấp mỗi ngày."</p>
                <div className="flex items-center gap-4">
                  <img
                    alt="User avatar"
                    className="w-12 h-12 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJVNhRbm1-xsu3TjLA6xoFRjNGSvIQDI13MqPeWr4IWiolRfXG2GR22-ydtLsq5AxOud0HHesa4ur03RoCYQaD71-B2JCdaebpuydKJWs6BO6BB-8dk-BTLQe8lx30r8WeJkhPfeXhD9EgNVk2ITD5T0VeSNtKJcLY7V7MKkVYpsVyHHfnk_sMe2kFHUkJpzJlfEPbjfSaDbSmS6Qw7lT17Qdf1ZIEhJicX0goTgzNIKDK3D9-IqECIhO8IvQqOFtTElICSInihchs"
                  />
                  <div>
                    <p className="font-bold text-on-surface">Thu Thảo</p>
                    <p className="text-sm text-on-surface-variant">University Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download App Section */}
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
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 w-full py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 text-left">
            <div className="text-lg font-bold text-primary">Parroto</div>
            <p className="text-sm text-slate-500 max-w-xs">© 2024 Parroto. Language Learning Reimagined.</p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined">public</span></a>
              <a className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-left">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-on-surface text-sm">Product</p>
              <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Lessons</a>
              <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Practice</a>
              <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Methodology</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-on-surface text-sm">Legal</p>
              <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Terms of Service</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-on-surface text-sm">Support</p>
              <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Help Center</a>
              <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Language Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
