// Auto-import toàn bộ ảnh trong folder — thêm file mới tự động hiển thị
const teacherModules = import.meta.glob('../assets/giao_vien/*.jpg', { eager: true })
const teacherImages = Object.values(teacherModules).map(m => m.default)

// Ảnh đầu tiên làm avatar người sáng lập, phần còn lại vào grid
const founderAvatar = teacherImages[0]
const gridImages = teacherImages.slice(1)

export default function Testimonial() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <p className="section-subtitle">Từ người sáng lập</p>
          <h2 className="section-title">Thư ngỏ</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div className="fade-in">
            {/* CSS big quote — no icon */}
            <div className="big-quote" aria-hidden="true" />
            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-light italic">
              "Âm nhạc không chỉ là kỹ năng – đó là ngôn ngữ của tâm hồn. Khi một học viên lần đầu tiên cất lên giọng hát và nghe thấy chính mình trong giai điệu, tôi biết rằng hành trình của họ đã thực sự bắt đầu."
            </p>
            <p className="text-gray-500 leading-relaxed mb-6 text-sm">
              Tại Art Beginning, chúng tôi tin rằng mọi giọng hát đều có giá trị riêng. Sứ mệnh của chúng tôi là giúp bạn tìm thấy và nuôi dưỡng giọng hát đó – không phân biệt độ tuổi, kinh nghiệm hay xuất phát điểm.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10 text-sm">
              Với hơn 10 năm kinh nghiệm đào tạo thanh nhạc và hơn 500 học viên đã tốt nghiệp, chúng tôi tự hào là địa chỉ tin cậy cho những ai muốn bước vào thế giới âm nhạc một cách bài bản và đam mê.
            </p>
            <div className="flex items-center gap-4">
              <img
                src={founderAvatar}
                alt="Nguyễn Phương Linh — Giám đốc Art Beginning"
                className="w-14 h-14 rounded-full object-cover border-2 border-gold"
              />
              <div>
                <p className="font-semibold text-charcoal">Nguyễn Phương Linh</p>
                <p className="text-gold text-sm">Giám đốc &amp; Giảng viên trưởng</p>
              </div>
            </div>
          </div>

          {/* Teacher image grid — tự động hiển thị tất cả ảnh trong folder */}
          <div className="fade-in" style={{ transitionDelay: '0.2s' }}>
            {gridImages.length > 0 && (
              <div className="grid grid-cols-2 gap-3">
                {/* Ảnh đầu tiên chiếm full width */}
                <div className="col-span-2">
                  <img
                    src={gridImages[0]}
                    alt="Giảng viên Art Beginning Vocal Academy"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                {/* Các ảnh còn lại xếp 2 cột */}
                {gridImages.slice(1).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Giảng viên Art Beginning ${i + 2}`}
                    className="w-full h-40 object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
