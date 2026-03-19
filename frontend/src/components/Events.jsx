import { Calendar, ArrowRight } from 'lucide-react'

const events = [
  {
    id: 1,
    date: '15 Tháng 4, 2025',
    title: 'Mini Concert Mùa Xuân 2025',
    desc: 'Đêm nhạc kết thúc khóa học kỳ 1/2025 với sự tham gia của hơn 30 học viên từ các lớp Cơ bản đến Nâng cao.',
    img: 'https://images.unsplash.com/photo-1501386761578-eaa54b4cd539?w=500&auto=format&fit=crop&q=80',
    tag: 'Biểu diễn',
  },
  {
    id: 2,
    date: '28 Tháng 4, 2025',
    title: 'Workshop: Kỹ Thuật Hơi Thở Cho Giọng Ca',
    desc: 'Buổi workshop chuyên sâu về kỹ thuật kiểm soát hơi thở, phát âm chuẩn và xây dựng nội lực giọng hát.',
    img: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=500&auto=format&fit=crop&q=80',
    tag: 'Workshop',
  },
  {
    id: 3,
    date: '10 Tháng 5, 2025',
    title: 'Gala Âm Nhạc Kỷ Niệm 5 Năm',
    desc: 'Lễ kỷ niệm 5 năm thành lập Art Beginning với chương trình biểu diễn đặc biệt và trao giải học viên xuất sắc.',
    img: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=500&auto=format&fit=crop&q=80',
    tag: 'Sự kiện đặc biệt',
  },
]

export default function Events() {
  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <p className="section-subtitle">Lịch trình</p>
          <h2 className="section-title">Sự kiện</h2>
        </div>

        <div className="flex flex-col gap-8">
          {events.map((ev, i) => (
            <div key={ev.id}
              className={`flex flex-col md:flex-row gap-6 bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 group fade-in`}
              style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="md:w-64 h-52 md:h-auto relative flex-shrink-0 overflow-hidden">
                <img src={ev.img} alt={ev.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-gold text-white text-xs font-medium px-3 py-1 rounded-full">
                  {ev.tag}
                </span>
              </div>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <div className="flex items-center gap-2 text-gold text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{ev.date}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">{ev.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-5">{ev.desc}</p>
                <a href="#register" className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all group/link">
                  Xem thêm <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
