import tanNhanImg from '../assets/giao_vien/tan_nhan.jpg'
import thuHaImg from '../assets/giao_vien/thu_ha.jpg'

const otherModules = import.meta.glob('../assets/giao_vien/z*.jpg', { eager: true })
const otherImages = Object.values(otherModules).map(m => m.default)

const teachers = [
  {
    img: thuHaImg,
    name: 'TS. Trần Thị Thu Hà',
    title: 'Trưởng khoa Nghệ thuật',
    org: 'Trường Đại học Sư phạm Hà Nội',
    desc: 'Giảng viên thanh nhạc với hơn 15 năm kinh nghiệm đào tạo và biểu diễn chuyên nghiệp.',
  },
  {
    img: tanNhanImg,
    name: 'PGS. TS Nguyễn Thị Tân Nhàn',
    title: 'Trưởng khoa Thanh nhạc',
    org: 'Học viện Âm nhạc Quốc gia Việt Nam',
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

        {/* Tiêu đề */}
        <div className="text-center mb-20 fade-in">
          <p className="section-subtitle">Đội ngũ chuyên môn</p>
          <h2 className="section-title">Giảng Viên</h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-4 text-sm leading-relaxed">
            Art Beginning tự hào được đồng hành cùng các giảng viên hàng đầu trong lĩnh vực thanh nhạc Việt Nam.
          </p>
        </div>

        {/* 2 card giảng viên đặc biệt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 hidden md:block">
                  <h3 className="text-white text-xl font-serif font-semibold leading-snug drop-shadow">{t.name}</h3>
                  <p className="text-xs mt-0.5 font-medium tracking-wide drop-shadow" style={{ color: '#e8c97e' }}>{t.title}</p>
                  <p className="text-white/60 text-xs mt-0.5">{t.org}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="md:hidden mb-3">
                  <h3 className="text-charcoal text-lg font-serif font-semibold">{t.name}</h3>
                  <p className="text-gold text-xs mt-0.5 font-medium">{t.title}</p>
                  <p className="text-gray-400 text-xs">{t.org}</p>
                </div>
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

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12 fade-in">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            Các giảng viên thuộc các trường đào tạo âm nhạc hàng đầu Việt Nam như Học viện Âm nhạc Quốc gia Việt Nam, Trường ĐH Hà Nội.... Chuyên rèn
            luyện kỹ năng trở thành nghệ sĩ chuyên nghiệp, Các lớp ôn thi
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/30 to-transparent" />
        </div>

        {/* Lưới ảnh đội ngũ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {otherImages.map((src, i) => (
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
