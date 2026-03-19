const stats = [
  { value: '100%', label: 'Học viên hài lòng', sub: 'Satisfaction Rate' },
  { value: '90%', label: 'Cải thiện giọng hát', sub: 'Voice Improvement' },
  { value: '78%', label: 'Tự tin hơn khi biểu diễn', sub: 'Confidence Boost' },
  { value: '500+', label: 'Học viên đã tốt nghiệp', sub: 'Graduates' },
]

export default function Statistics() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501612780327-45045538702b?w=1600&auto=format&fit=crop&q=80"
          alt="Concert"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((s, i) => (
          <div key={i} className="fade-in" style={{ transitionDelay: `${i * 0.15}s` }}>
            <p className="font-serif text-5xl md:text-6xl font-bold text-gold mb-2">{s.value}</p>
            <p className="text-white font-medium mb-1">{s.label}</p>
            <p className="text-white/50 text-xs tracking-widest uppercase">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
