import { useEffect, useState } from 'react'

const slides = [
  { src: '/hinh_1.jpg', alt: 'Art Beginning Vocal Academy' },
  { src: '/hinh_2.jpg', alt: 'Art Beginning - học viên luyện tập' },
  { src: '/hinh_3.jpg', alt: 'Art Beginning - sân khấu chuyên nghiệp' },
]

const floatingStats = [
  { value: 'Trên 1.000+', label: 'Học viên theo học' },
  { value: '15 năm', label: 'Đào tạo âm nhạc' },
  { value: '100%', label: 'Học viên hài lòng' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">

      {/* Carousel background */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-[2000ms] ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Carousel dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-gold w-6' : 'bg-white/40 w-2 hover:bg-white/60'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative text-center text-white px-6 max-w-4xl mx-auto">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-10 fade-in visible">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs">Học Viện Thanh Nhạc</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 fade-in visible" style={{ transitionDelay: '0.1s' }}>
          Art Beginning –<br />
          <em className="not-italic text-gold-gradient">Khởi đầu hành trình<br className="hidden md:block" /> âm nhạc của bạn</em>
        </h1>

        <p className="text-lg md:text-xl text-white/70 mb-12 font-light leading-relaxed max-w-xl mx-auto fade-in visible" style={{ transitionDelay: '0.25s' }}>
          Học theo lộ trình riêng • Giảng viên chuyên nghiệp • Trải nghiệm sân khấu thật
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in visible" style={{ transitionDelay: '0.4s' }}>
          <a href="#register" className="btn-gold text-base px-9 py-4 shadow-[0_8px_30px_rgba(201,169,110,0.5)]">
            Đăng ký học thử miễn phí
          </a>
          <a href="#tuition"
            className="border border-white/40 text-white backdrop-blur-sm px-9 py-4 rounded-full text-base font-medium
                       hover:border-gold hover:text-gold transition-all duration-300">
            Khám phá lộ trình học
          </a>
        </div>

        {/* Floating stats bar */}
        <div className="mt-12 fade-in visible" style={{ transitionDelay: '0.55s' }}>
          <div className="inline-flex flex-wrap justify-center bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl overflow-hidden">
            {floatingStats.map((s, i) => (
              <div key={i} className="px-5 sm:px-7 py-3 sm:py-4 text-center border-r last:border-r-0 border-white/15">
                <p className="font-serif text-base sm:text-xl font-bold text-gold">{s.value}</p>
                <p className="text-white/60 text-[10px] sm:text-xs mt-0.5 whitespace-nowrap">{s.label}</p>
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
