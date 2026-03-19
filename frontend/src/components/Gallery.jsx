const images = [
  { src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500&auto=format&fit=crop&q=80', alt: 'Performance 1' },
  { src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=80', alt: 'Practice session' },
  { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=80', alt: 'Concert' },
  { src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=500&auto=format&fit=crop&q=80', alt: 'Stage' },
  { src: 'https://images.unsplash.com/photo-1501386761578-eaa54b4cd539?w=500&auto=format&fit=crop&q=80', alt: 'Event' },
  { src: 'https://images.unsplash.com/photo-1598387180429-c3b35c3d0e1e?w=500&auto=format&fit=crop&q=80', alt: 'Recording' },
  { src: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=500&auto=format&fit=crop&q=80', alt: 'Duet' },
  { src: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=500&auto=format&fit=crop&q=80', alt: 'Class' },
]

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <p className="section-subtitle">Khoảnh khắc đáng nhớ</p>
          <h2 className="section-title">Thư viện ảnh</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i}
              className={`group relative overflow-hidden rounded-xl aspect-square cursor-pointer fade-in`}
              style={{ transitionDelay: `${i * 0.08}s` }}>
              <img src={img.src} alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/30 transition-colors duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/90 transition-all duration-300 flex items-center justify-center scale-0 group-hover:scale-100">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
