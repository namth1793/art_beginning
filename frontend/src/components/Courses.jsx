import { ArrowRight, Clock, Users, Star } from 'lucide-react'

const courses = [
  {
    name: 'Khóa Cơ Bản',
    subtitle: 'Dành cho người mới bắt đầu',
    desc: 'Học các kỹ thuật nền tảng: hơi thở, phát âm, cao độ và nhịp điệu. Phù hợp với mọi độ tuổi từ 6 tuổi trở lên.',
    img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&auto=format&fit=crop&q=80',
    duration: '3 tháng',
    size: '5–8 học viên/lớp',
    rating: 4.9,
    price: '1.500.000đ/tháng',
  },
  {
    name: 'Khóa Nâng Cao',
    subtitle: 'Cho học viên có nền tảng',
    desc: 'Phát triển phong cách cá nhân, kỹ thuật biểu diễn sân khấu, xử lý cảm xúc trong âm nhạc và kỹ thuật thu âm.',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&auto=format&fit=crop&q=80',
    duration: '6 tháng',
    size: '3–5 học viên/lớp',
    rating: 5.0,
    price: '2.500.000đ/tháng',
  },
]

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <p className="section-subtitle">Chương trình đào tạo</p>
          <h2 className="section-title">Các khóa học</h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-4">Mỗi khóa học được thiết kế riêng để phù hợp với trình độ và mục tiêu của từng học viên.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((c, i) => (
            <div key={i}
              className={`bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 group fade-in`}
              style={{ transitionDelay: `${i * 0.2}s` }}>
              <div className="relative h-56 overflow-hidden">
                <img src={c.img} alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gold text-white text-xs font-medium px-3 py-1.5 rounded-full">{c.subtitle}</span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">{c.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">{c.desc}</p>

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-gold" />{c.duration}</span>
                  <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-gold" />{c.size}</span>
                  <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-gold" fill="#C9A96E" />{c.rating}/5.0</span>
                </div>

                <div className="flex items-center justify-between">
                  <p className="font-semibold text-charcoal">{c.price}</p>
                  <a href="#register"
                    className="flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all text-sm">
                    Đăng ký ngay <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
