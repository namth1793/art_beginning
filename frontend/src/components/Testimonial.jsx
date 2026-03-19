import { Quote } from 'lucide-react'

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
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format&fit=crop&q=80"
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
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=700&auto=format&fit=crop&q=80"
                alt="Teaching moment"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <img
              src="https://images.unsplash.com/photo-1460881680858-30d872d5b530?w=400&auto=format&fit=crop&q=80"
              alt="Student practice"
              className="h-44 w-full object-cover rounded-xl shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=400&auto=format&fit=crop&q=80"
              alt="Music class"
              className="h-44 w-full object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
