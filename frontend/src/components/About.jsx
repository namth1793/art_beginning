import aboutImg from '../assets/about.jpg'

const values = [
  { num: '01', text: 'Phương pháp giảng dạy cá nhân hóa theo từng học viên' },
  { num: '02', text: 'Giảng viên với hơn 15 năm kinh nghiệm biểu diễn và đào tạo' },
  { num: '03', text: 'Môi trường học tập thân thiện, sáng tạo và chuyên nghiệp' },
  { num: '04', text: 'Lộ trình học bài bản từ cơ bản đến nâng cao' },
  { num: '05', text: 'Cơ hội biểu diễn thực tế' },
]

export default function About() {
  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">

      {/* Trang trí góc */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-cream rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative">

        {/* Image side */}
        <div className="relative slide-left">
          {/* Outer decorative frame */}
          <div className="absolute -top-4 -left-4 w-full h-full border border-gold/25 rounded-3xl" />
          <img
            src={aboutImg}
            alt="Không gian học tập tại Art Beginning Vocal Academy"
            className="relative rounded-3xl shadow-2xl w-full h-[520px] object-cover"
          />
          {/* Experience badge */}
          <div className="absolute -bottom-6 -right-6 bg-charcoal rounded-2xl p-6 shadow-2xl hidden md:block">
            <p className="font-serif text-4xl font-bold text-gold">10<span className="text-2xl">+</span></p>
            <p className="text-white/70 text-sm mt-1">Năm kinh nghiệm</p>
          </div>
          {/* Gold dot accent */}
          <div className="absolute top-6 -left-3 w-6 h-6 rounded-full bg-gold shadow-[0_0_16px_rgba(201,169,110,0.6)]" />
        </div>

        {/* Text side */}
        <div className="slide-right" style={{ transitionDelay: '0.15s' }}>
          <p className="section-subtitle">Câu chuyện của chúng tôi</p>
          <h2 className="section-title mb-6">Về Art Beginning</h2>

          <p className="text-gray-500 leading-relaxed mb-4 text-sm">
            Art Beginning được thành lập năm 2015 với niềm tin rằng âm nhạc là quyền của mọi người.
            Chúng tôi đã đồng hành cùng hàng trăm học viên từ những bước đầu chập chững đến sân khấu chuyên nghiệp.
          </p>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
            <span className="text-gold text-lg select-none">♩</span>
          </div>

          {/* Values */}
          <ul className="space-y-4 mb-10">
            {values.map((v) => (
              <li key={v.num} className="flex items-start gap-4 group">
                <span className="font-serif text-xs font-bold text-gold/60 mt-0.5 w-6 flex-shrink-0 group-hover:text-gold transition-colors duration-200">
                  {v.num}
                </span>
                <span className="text-gray-600 text-sm leading-relaxed">{v.text}</span>
              </li>
            ))}
          </ul>

          <a href="#register" className="btn-gold inline-block">Bắt đầu hành trình của bạn</a>
        </div>
      </div>
    </section>
  )
}
