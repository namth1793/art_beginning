import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// Auto-import toàn bộ ảnh trong folder
const imageModules = import.meta.glob('../assets/thu_vien_anh/*.jpg', { eager: true })
const images = Object.values(imageModules).map(m => m.default)

export default function StudentAchievements() {
  const [lightbox, setLightbox] = useState(null) // index | null

  const prev = () => setLightbox(i => (i - 1 + images.length) % images.length)
  const next = () => setLightbox(i => (i + 1) % images.length)

  return (
    <section id="achievements" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <p className="section-subtitle">Học viên của chúng tôi</p>
          <h2 className="section-title">Thành quả học viên</h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-4">
            Mỗi khoảnh khắc là một cột mốc trên hành trình âm nhạc của học viên.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {images.map((src, i) => (
            <div
              key={i}
              className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer fade-in"
              style={{ transitionDelay: `${i * 0.04}s` }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={src}
                alt={`Thành quả học viên ${i + 1}`}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={e => { e.stopPropagation(); prev() }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <img
            src={images[lightbox]}
            alt={`Ảnh ${lightbox + 1}`}
            className="max-h-[85vh] max-w-full rounded-xl shadow-2xl object-contain"
            onClick={e => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={e => { e.stopPropagation(); next() }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Counter */}
          <p className="absolute bottom-5 text-white/50 text-sm tabular-nums">
            {lightbox + 1} / {images.length}
          </p>
        </div>
      )}
    </section>
  )
}
