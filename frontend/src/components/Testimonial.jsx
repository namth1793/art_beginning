const allTeachers = import.meta.glob('../assets/giao_vien/*.jpg', { eager: true })
const teacherImages = Object.values(allTeachers).map(m => m.default)

export default function Testimonial() {
  return (
    <section className="py-28 bg-cream relative overflow-hidden">

      {/* Nền trang trí */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Tiêu đề */}
        <div className="text-center mb-16 fade-in">
          <p className="section-subtitle">Đội ngũ</p>
          <h2 className="section-title">Giảng Viên</h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-4 text-sm leading-relaxed">
            Đội ngũ giảng viên giàu kinh nghiệm, được đào tạo bài bản tại các học viện âm nhạc hàng đầu Việt Nam.
          </p>
        </div>

        {/* Lưới ảnh toàn bộ giảng viên */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {teacherImages.map((src, i) => (
            <div
              key={i}
              className="fade-in aspect-[3/4] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
              style={{ transitionDelay: `${(i % 8) * 0.07}s` }}
            >
              <img
                src={src}
                alt={`Giảng viên Art Beginning ${i + 1}`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
