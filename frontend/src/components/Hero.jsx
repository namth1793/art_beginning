const floatingStats = [
  { value: '500+', label: 'Học viên' },
  { value: '10+', label: 'Năm kinh nghiệm' },
  { value: '100%', label: 'Hài lòng' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&auto=format&fit=crop&q=80"
          alt="Biểu diễn thanh nhạc tại Art Beginning"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        {/* subtle gold vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative text-center text-white px-6 max-w-4xl mx-auto">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-10 fade-in visible">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs">Học Viện Thanh Nhạc</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 fade-in visible" style={{ transitionDelay: '0.1s' }}>
          Hát bài hát<br />
          <em className="not-italic text-gold-gradient">bạn yêu thích</em>
        </h1>

        <p className="text-lg md:text-xl text-white/70 mb-12 font-light leading-relaxed max-w-xl mx-auto fade-in visible" style={{ transitionDelay: '0.25s' }}>
          Lộ trình cá nhân hóa · Giảng viên hàng đầu · Cơ hội biểu diễn thực tế
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in visible" style={{ transitionDelay: '0.4s' }}>
          <a href="#register" className="btn-gold text-base px-9 py-4 shadow-[0_8px_30px_rgba(201,169,110,0.5)]">
            Đăng ký học thử miễn phí
          </a>
          <a href="#courses"
            className="border border-white/40 text-white backdrop-blur-sm px-9 py-4 rounded-full text-base font-medium
                       hover:border-gold hover:text-gold transition-all duration-300">
            Xem khóa học
          </a>
        </div>

        {/* Floating stats bar */}
        <div className="mt-16 fade-in visible" style={{ transitionDelay: '0.55s' }}>
          <div className="inline-flex bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl divide-x divide-white/15 overflow-hidden">
            {floatingStats.map((s, i) => (
              <div key={i} className="px-8 py-4 text-center">
                <p className="font-serif text-2xl font-bold text-gold">{s.value}</p>
                <p className="text-white/60 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#achievements" aria-label="Cuộn xuống"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-cue opacity-60 hover:opacity-100 transition-opacity">
        <span className="scroll-cue-line" />
        <span className="scroll-cue-dot" />
      </a>
    </section>
  )
}
