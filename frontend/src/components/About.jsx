import { CheckCircle } from 'lucide-react'

const values = [
  'Phương pháp giảng dạy cá nhân hóa theo từng học viên',
  'Giảng viên với hơn 10 năm kinh nghiệm biểu diễn và đào tạo',
  'Môi trường học tập thân thiện, sáng tạo và chuyên nghiệp',
  'Lộ trình học bài bản từ cơ bản đến nâng cao',
  'Cơ hội biểu diễn thực tế qua các sự kiện định kỳ',
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <div className="relative fade-in">
          <img
            src="https://images.unsplash.com/photo-1585974738771-84483dd9f89f?w=700&auto=format&fit=crop&q=80"
            alt="About Art Beginning"
            className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-gold rounded-2xl p-6 shadow-xl hidden md:block">
            <p className="font-serif text-3xl font-bold text-white">10+</p>
            <p className="text-white/80 text-sm">Năm kinh nghiệm</p>
          </div>
        </div>

        {/* Text side */}
        <div className="fade-in" style={{ transitionDelay: '0.2s' }}>
          <p className="section-subtitle">Câu chuyện của chúng tôi</p>
          <h2 className="section-title mb-4">Về Voice Academy</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Art Beginning được thành lập năm 2015 với niềm tin rằng âm nhạc là quyền của mọi người.
            Chúng tôi đã đồng hành cùng hàng trăm học viên từ những bước đầu chập chững đến sân khấu chuyên nghiệp.
          </p>

          <div className="bg-cream rounded-2xl p-6 mb-8">
            <p className="font-serif text-lg font-semibold text-charcoal mb-4">Giá trị cốt lõi</p>
            <ul className="space-y-3">
              {values.map((v, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <a href="#register" className="btn-gold inline-block">Bắt đầu hành trình của bạn</a>
        </div>
      </div>
    </section>
  )
}
