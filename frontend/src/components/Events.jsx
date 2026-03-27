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
    featured: true,
  },
  {
    id: 1,
    date: '15 Tháng 4, 2025',
    title: 'Mini Concert Mùa Xuân 2025',
    desc: 'Đêm nhạc kết thúc khóa học kỳ 1/2025 với sự tham gia của hơn 30 học viên.',
    img: 'https://images.unsplash.com/photo-1501386761578-eaa54b4cd539?w=500&auto=format&fit=crop&q=80',
    tag: 'Biểu diễn',
    href: '#register',
  },
  {
    id: 2,
    date: '28 Tháng 4, 2025',
    title: 'Workshop: Kỹ Thuật Hơi Thở Cho Giọng Ca',
    desc: 'Buổi workshop chuyên sâu về kỹ thuật kiểm soát hơi thở, phát âm chuẩn và xây dựng nội lực giọng hát.',
    img: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=500&auto=format&fit=crop&q=80',
    tag: 'Workshop',
    href: '#register',
  },
  {
    id: 3,
    date: '10 Tháng 5, 2025',
    title: 'Gala Âm Nhạc Kỷ Niệm 5 Năm',
    desc: 'Lễ kỷ niệm 5 năm thành lập Art Beginning với chương trình biểu diễn đặc biệt và trao giải học viên xuất sắc.',
    img: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=500&auto=format&fit=crop&q=80',
    tag: 'Sự kiện đặc biệt',
    href: '#register',
  },
]

const tagStyle = {
  'Tin tức':           'bg-gold text-white',
  'Biểu diễn':        'bg-charcoal text-white',
  'Workshop':         'bg-charcoal text-white',
  'Sự kiện đặc biệt': 'bg-charcoal text-white',
}

export default function Events() {
  const featured = events.find(e => e.featured)
  const rest = events.filter(e => !e.featured)

  return (
    <section id="events" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16 fade-in">
          <p className="section-subtitle">Hoạt động</p>
          <h2 className="section-title title-underline">Tin tức &amp; Sự kiện</h2>
        </div>

        {/* Featured card */}
        {featured && (
          <a
            href={featured.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-cream rounded-3xl overflow-hidden shadow-md hover:shadow-2xl
                       transition-all duration-500 mb-8 fade-in card-hover"
          >
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative overflow-hidden h-72 md:h-auto">
                <img src={featured.img} alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full ${tagStyle[featured.tag]}`}>
                  {featured.tag}
                </span>
              </div>
              {/* Content */}
              <div className="flex flex-col justify-center p-10 md:p-12">
                <p className="text-gold text-xs font-medium tracking-widest uppercase mb-3">
                  {featured.date}
                  {featured.source && <span className="ml-2 text-gray-400 normal-case tracking-normal">— {featured.source}</span>}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-4 group-hover:text-gold transition-colors duration-200 leading-snug">
                  {featured.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-6">{featured.desc}</p>
                <span className="inline-flex items-center gap-2 text-gold text-sm font-medium">
                  Đọc bài báo
                  <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">→</span>
                </span>
              </div>
            </div>
          </a>
        )}


      </div>
    </section>
  )
}
