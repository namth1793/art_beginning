import { useState } from 'react'

// Auto-import toàn bộ ảnh trong folder
const imageModules = import.meta.glob('../assets/thu_vien_anh/*.jpg', { eager: true })
const images = Object.values(imageModules).map(m => m.default)

// Nhân đôi để tạo vòng lặp liền mạch
const doubled = [...images, ...images]

export default function StudentAchievements() {
  const [lightbox, setLightbox] = useState(null) // index | null

  const prev = () => setLightbox(i => (i - 1 + images.length) % images.length)
  const next = () => setLightbox(i => (i + 1) % images.length)

  return (
    <section id="achievements" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <p className="section-subtitle">Học viên của chúng tôi</p>
          <h2 className="section-title">Thành quả học viên</h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-4 text-sm leading-relaxed">
            Mỗi khoảnh khắc là một cột mốc trên hành trình âm nhạc của học viên.
          </p>
        </div>
      </div>

      {/* ── Carousel ── full bleed, hover to pause */}
      <div className="carousel-wrapper w-full">
        <div className="carousel-track gap-3 px-3">
          {doubled.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 relative overflow-hidden rounded-2xl cursor-pointer group"
              style={{ height: '280px', width: 'auto' }}
              onClick={() => setLightbox(i % images.length)}
            >
              <img
                src={src}
                alt={`Thành quả học viên Art Beginning ${(i % images.length) + 1}`}
                className="h-full w-auto object-cover group-hover:scale-105 transition-transform duration-500"
                draggable={false}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-3xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-none">
                  ⊕
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl font-light transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Đóng"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-3xl transition-colors"
            onClick={e => { e.stopPropagation(); prev() }}
            aria-label="Ảnh trước"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={images[lightbox]}
            alt={`Thành quả học viên ${lightbox + 1}`}
            className="max-h-[85vh] max-w-full rounded-xl shadow-2xl object-contain"
            onClick={e => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-3xl transition-colors"
            onClick={e => { e.stopPropagation(); next() }}
            aria-label="Ảnh tiếp theo"
          >
            ›
          </button>

          {/* Counter */}
          <p className="absolute bottom-5 text-white/40 text-sm tabular-nums tracking-widest">
            {lightbox + 1} / {images.length}
          </p>
        </div>
      )}
    </section>
  )
}
