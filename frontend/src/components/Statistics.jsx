import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 100, suffix: '%', label: 'Học viên hài lòng',       sub: 'Satisfaction Rate' },
  { value: 90,  suffix: '%', label: 'Cải thiện giọng hát',     sub: 'Voice Improvement' },
  { value: 78,  suffix: '%', label: 'Tự tin hơn khi biểu diễn', sub: 'Confidence Boost'  },
  { value: 500, suffix: '+', label: 'Học viên đã tốt nghiệp',  sub: 'Graduates'          },
]

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1800
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [active, target])

  return <>{count}{suffix}</>
}

export default function Statistics() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501612780327-45045538702b?w=1600&auto=format&fit=crop&q=80"
          alt="Concert"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/75 to-charcoal/90" />
      </div>

      {/* Header */}
      <div className="relative text-center mb-16 fade-in">
        <p className="section-subtitle">Kết quả</p>
        <h2 className="section-title title-underline text-white">Con Số Biết Nói</h2>
      </div>

      {/* Stats grid */}
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i}
              className="fade-in text-center px-6 py-8 relative"
              style={{ transitionDelay: `${i * 0.12}s` }}>

              {/* Vertical separator */}
              {i > 0 && (
                <span className="hidden md:block absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
              )}

              <p className="font-serif text-5xl md:text-6xl font-bold text-gold stat-number mb-3">
                <CountUp target={s.value} suffix={s.suffix} active={active} />
              </p>
              <p className="text-white font-medium mb-1 text-sm md:text-base">{s.label}</p>
              <p className="text-white/40 text-xs tracking-widest uppercase">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Bottom gold line */}
        <div className="mt-6 flex justify-center">
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
