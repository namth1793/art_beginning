import { Quote } from 'lucide-react'
import gv1 from '../assets/giao_vien/z7635884412239_95a95dd5a729b6602c0a38c687c46c75.jpg'
import gv2 from '../assets/giao_vien/z7635884465172_e077ccd6943aae9e5926fe87b6b6bbb8.jpg'
import gv3 from '../assets/giao_vien/z7635884488834_7a58c12aabfeea9cc6c63541f8862356.jpg'
import gv4 from '../assets/giao_vien/z7635884506084_e7e2a1cf764fb0595a16192631fb251d.jpg'
import gv5 from '../assets/giao_vien/z7635884507862_884726debad2013b00fa907ebd52e51b.jpg'
import gv6 from '../assets/giao_vien/z7635884537257_79498746618c0568c5c41a7fb1a43ba9.jpg'

export default function Testimonial() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <p className="section-subtitle">Từ người sáng lập</p>
          <h2 className="section-title">Thư ngỏ</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="fade-in">
            <Quote className="w-10 h-10 text-gold mb-6 opacity-60" />
            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-light italic">
              "Âm nhạc không chỉ là kỹ năng – đó là ngôn ngữ của tâm hồn. Khi một học viên lần đầu tiên cất lên giọng hát và nghe thấy chính mình trong giai điệu, tôi biết rằng hành trình của họ đã thực sự bắt đầu."
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Tại Art Beginning, chúng tôi tin rằng mọi giọng hát đều có giá trị riêng. Sứ mệnh của chúng tôi là giúp bạn tìm thấy và nuôi dưỡng giọng hát đó – không phân biệt độ tuổi, kinh nghiệm hay xuất phát điểm.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Với hơn 10 năm kinh nghiệm đào tạo thanh nhạc và hơn 500 học viên đã tốt nghiệp, chúng tôi tự hào là địa chỉ tin cậy cho những ai muốn bước vào thế giới âm nhạc một cách bài bản và đam mê.
            </p>
            <div className="flex items-center gap-4">
              <img
                src={gv1}
                alt="Founder"
                className="w-14 h-14 rounded-full object-cover border-2 border-gold"
              />
              <div>
                <p className="font-semibold text-charcoal">Nguyễn Phương Linh</p>
                <p className="text-gold text-sm">Giám đốc & Giảng viên trưởng</p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4 fade-in" style={{ transitionDelay: '0.2s' }}>
            <div className="col-span-2">
              <img
                src={gv2}
                alt="Giảng viên"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <img
              src={gv3}
              alt="Giảng viên"
              className="h-44 w-full object-cover rounded-xl shadow-md"
            />
            <img
              src={gv4}
              alt="Giảng viên"
              className="h-44 w-full object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
