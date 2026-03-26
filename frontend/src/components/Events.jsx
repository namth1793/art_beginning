const events = [
  {
    id: 4,
    date: '24 Tháng 3, 2026',
    title: 'Tân Nhàn tự hào khi học trò đạt giải Nhất cuộc thi âm nhạc quốc tế',
    desc: 'Học trò Dương Ngọc Ánh của NSND Tân Nhàn — giảng viên đặc biệt tại Art Beginning — đã xuất sắc đoạt giải Nhất (Grand Prize) hạng mục thanh nhạc tại Cuộc thi Âm nhạc Kyushu lần thứ 28 tổ chức tại Kumamoto, Nhật Bản.',
    img: 'https://cdn.kienthuc.net.vn/images/43b54213f417a734df7abfbb0783ad3ad63b50f1f0075dc4dc018b9abb83956e8133dedd39dc7267cdcacd41bd64b8c232b19835bcbd114a7d584682aeba17f5/tan-nhan-4.jpg.webp',
    tag: 'Tin tức',
    source: 'kienthuc.net.vn',
    href: 'https://kienthuc.net.vn/tan-nhan-tu-hao-khi-hoc-tro-dat-giai-nhat-cuoc-thi-am-nhac-quoc-te-post1610433.html',
  },
  {
    id: 1,
    date: '15 Tháng 4, 2025',
    title: 'Mini Concert Mùa Xuân 2025',
    desc: 'Đêm nhạc kết thúc khóa học kỳ 1/2025 với sự tham gia của hơn 30 học viên từ các lớp Cơ bản đến Nâng cao.',
    img: 'https://images.unsplash.com/photo-1501386761578-eaa54b4cd539?w=500&auto=format&fit=crop&q=80',
    tag: 'Biểu diễn',
    source: null,
    href: '#register',
  },
  {
    id: 2,
    date: '28 Tháng 4, 2025',
    title: 'Workshop: Kỹ Thuật Hơi Thở Cho Giọng Ca',
    desc: 'Buổi workshop chuyên sâu về kỹ thuật kiểm soát hơi thở, phát âm chuẩn và xây dựng nội lực giọng hát.',
    img: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=500&auto=format&fit=crop&q=80',
    tag: 'Workshop',
    source: null,
    href: '#register',
  },
  {
    id: 3,
    date: '10 Tháng 5, 2025',
    title: 'Gala Âm Nhạc Kỷ Niệm 5 Năm',
    desc: 'Lễ kỷ niệm 5 năm thành lập Art Beginning với chương trình biểu diễn đặc biệt và trao giải học viên xuất sắc.',
    img: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=500&auto=format&fit=crop&q=80',
    tag: 'Sự kiện đặc biệt',
    source: null,
    href: '#register',
  },
]

const tagColors = {
  'Tin tức':         'bg-gold/90 text-white',
  'Biểu diễn':       'bg-charcoal/80 text-white',
  'Workshop':        'bg-charcoal/80 text-white',
  'Sự kiện đặc biệt': 'bg-charcoal/80 text-white',
}

export default function Events() {
  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <p className="section-subtitle">Hoạt động</p>
          <h2 className="section-title">Tin tức &amp; Sự kiện</h2>
        </div>

        <div className="flex flex-col gap-6">
          {events.map((ev, i) => (
            <a
              key={ev.id}
              href={ev.href}
              target={ev.source ? '_blank' : '_self'}
              rel={ev.source ? 'noopener noreferrer' : undefined}
              className="flex flex-col md:flex-row gap-0 bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group fade-in"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="md:w-64 h-52 md:h-auto relative flex-shrink-0 overflow-hidden">
                <img
                  src={ev.img}
                  alt={ev.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${tagColors[ev.tag] ?? 'bg-charcoal/80 text-white'}`}>
                  {ev.tag}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-6 md:p-8 flex-1">
                <p className="text-gold text-xs font-medium tracking-widest uppercase mb-3">
                  {ev.date}
                  {ev.source && (
                    <span className="ml-3 text-gray-400 normal-case tracking-normal">— {ev.source}</span>
                  )}
                </p>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3 group-hover:text-gold transition-colors duration-200 leading-snug">
                  {ev.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-5">{ev.desc}</p>
                <span className="inline-flex items-center gap-2 text-gold text-sm font-medium">
                  {ev.source ? 'Đọc bài báo' : 'Xem thêm'}
                  <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}