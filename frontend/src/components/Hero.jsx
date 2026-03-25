export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&auto=format&fit=crop&q=80"
          alt="Biểu diễn thanh nhạc tại Art Beginning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/55 to-charcoal/75" />
      </div>

      {/* Content */}
      <div className="relative text-center text-white px-6 max-w-4xl mx-auto">
        <p className="text-gold font-medium tracking-[0.35em] uppercase text-xs mb-8 fade-in visible">
          Học Viện Thanh Nhạc
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 fade-in visible" style={{ transitionDelay: '0.15s' }}>
          Hát bài hát<br />
          <span className="text-gold italic">bạn yêu thích</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/75 mb-12 font-light tracking-wide fade-in visible" style={{ transitionDelay: '0.3s' }}>
          Lộ trình riêng cho từng độ tuổi
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in visible" style={{ transitionDelay: '0.45s' }}>
          <a href="#register" className="btn-gold text-base px-8 py-4">Đăng ký học thử miễn phí</a>
          <a href="#courses" className="btn-outline text-base px-8 py-4 border-white text-white hover:bg-white hover:text-charcoal">Xem khóa học</a>
        </div>
      </div>

      {/* Scroll cue — CSS only, no icon */}
      <a href="#achievements" aria-label="Cuộn xuống" className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-cue opacity-70 hover:opacity-100 transition-opacity">
        <span className="scroll-cue-line" />
        <span className="scroll-cue-dot" />
      </a>
    </section>
  )
}
