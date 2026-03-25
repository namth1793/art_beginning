// Auto-import toàn bộ ảnh trong folder — thêm file mới tự động hiển thị
const imageModules = import.meta.glob('../assets/thu_vien_anh/*.jpg', { eager: true })
const images = Object.values(imageModules).map(m => m.default)

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <p className="section-subtitle">Khoảnh khắc đáng nhớ</p>
          <h2 className="section-title">Thư viện ảnh</h2>
          <p className="text-gray-500 mt-3 text-sm">{images.length} khoảnh khắc</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div key={i}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer fade-in"
              style={{ transitionDelay: `${i * 0.04}s` }}>
              <img src={src} alt={`Thư viện ảnh ${i + 1}`}
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
