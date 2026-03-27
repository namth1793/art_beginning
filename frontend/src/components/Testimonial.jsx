import thuHaImg from '../assets/giao_vien/thu_ha.jpg'
import tanNhanImg from '../assets/giao_vien/tan_nhan.jpg'

const otherModules = import.meta.glob('../assets/giao_vien/z*.jpg', { eager: true })
const otherImages = Object.values(otherModules).map(m => m.default)

const teachers = [
  {
    img: thuHaImg,
    name: 'TS. Trần Thị Thu Hà',
    title: 'Tiến sĩ Thanh nhạc',
    desc: 'Giảng viên thanh nhạc với hơn 15 năm kinh nghiệm đào tạo và biểu diễn chuyên nghiệp.',
  },
  {
    img: tanNhanImg,
    name: 'PGS.TS. NSUT Nguyễn Thị Tân Nhàn',
    title: 'Phó Giáo sư · Tiến sĩ · Nghệ sĩ Ưu tú',
    desc: 'Phó Giáo sư hàng đầu trong lĩnh vực thanh nhạc Việt Nam, nguyên giảng viên Học viện Âm nhạc Quốc gia.',
  },
]

export default function Testimonial() {
  return (
    <section className="py-28 bg-cream relative overflow-hidden">

      {/* Nền trang trí */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* ── Tiêu đề ── */}
        <div className="text-center mb-20 fade-in">
          <p className="section-subtitle">Đội ngũ chuyên môn</p>
          <h2 className="section-title">Giảng Viên</h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-4 text-sm leading-relaxed">
            Art Beginning tự hào được đồng hành cùng các giảng viên hàng đầu trong lĩnh vực thanh nhạc Việt Nam.
          </p>
        </div>

        {/* ── 2 giáo viên chính ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {teachers.map((t, i) => (
            <div
              key={i}
              className="fade-in group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Ảnh */}
              <div className="relative overflow-hidden h-[420px]">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Tên nổi trên ảnh (desktop) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 hidden md:block">
                  <h3 className="text-white text-xl font-serif font-semibold leading-snug drop-shadow">
                    {t.name}
                  </h3>
                  <p className="text-gold-light text-xs mt-1 font-medium tracking-wide drop-shadow" style={{ color: '#e8c97e' }}>
                    {t.title}
                  </p>
                </div>
              </div>

              {/* Thông tin bên dưới ảnh (mobile + mô tả) */}
              <div className="p-6">
                {/* Tên (chỉ hiện trên mobile) */}
                <div className="md:hidden mb-3">
                  <h3 className="text-charcoal text-lg font-serif font-semibold">{t.name}</h3>
                  <p className="text-gold text-xs mt-0.5 font-medium">{t.title}</p>
                </div>
                {/* Divider */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px flex-1 bg-gold/30" />
                  <span className="text-gold text-lg">♩</span>
                  <span className="h-px flex-1 bg-gold/30" />
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Ảnh hoạt động ── */}
        {otherImages.length > 0 && (
          <div className="fade-in" style={{ transitionDelay: '0.3s' }}>
            <div className="text-center mb-8">
              <p className="text-gold text-sm font-medium tracking-widest uppercase">Hoạt động</p>
              <h3 className="text-2xl font-serif font-semibold text-charcoal mt-1">Khoảnh Khắc Giảng Dạy</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {otherImages.map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl shadow-sm group cursor-pointer"
                >
                  <img
                    src={src}
                    alt={`Hoạt động giảng dạy ${i + 1}`}
                    className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
