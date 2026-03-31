import img3 from '../assets/giao_vien/z7635884412239_95a95dd5a729b6602c0a38c687c46c75.jpg'
import img4 from '../assets/giao_vien/z7635884465172_e077ccd6943aae9e5926fe87b6b6bbb8.jpg'
import img5 from '../assets/giao_vien/z7635884488834_7a58c12aabfeea9cc6c63541f8862356.jpg'
import img6 from '../assets/giao_vien/z7635884506084_e7e2a1cf764fb0595a16192631fb251d.jpg'
import img7 from '../assets/giao_vien/z7635884507862_884726debad2013b00fa907ebd52e51b.jpg'
import img8 from '../assets/giao_vien/z7635884537257_79498746618c0568c5c41a7fb1a43ba9.jpg'
import img9 from '../assets/giao_vien/z7651971622655_6bd26eda69ebe18296312eba34e09cfd.jpg'
import img10 from '../assets/giao_vien/z7673264862343_2fe3f4196343aa0cea3681d6580ed2db.jpg'
import img11 from '../assets/giao_vien/z7673264866394_1f75966be2c594ac5c0a2cb5e2bbe7ef.jpg'
import img12 from '../assets/giao_vien/z7673264869826_2abb8aa6d73b71395fbacba97461fec4.jpg'
import img13 from '../assets/giao_vien/z7673264874596_c903cef1be5cbd5f2e6ed54885379619.jpg'
import img14 from '../assets/giao_vien/z7673264887954_8cf3b04814f703f546eddc54c9dcf8b1.jpg'
import img15 from '../assets/giao_vien/z7673264891066_547875be639c1416f582cb7f356327d1.jpg'
import img16 from '../assets/giao_vien/z7673264898279_9fc6f2affa3ba9e3018670646fc85c8a.jpg'
import img17 from '../assets/giao_vien/z7673264910251_23d00823e4846e795a772a22a735b2ee.jpg'
import img18 from '../assets/giao_vien/z7673264910552_ddcd848f1530dca93acb116e2be99f90.jpg'

const team = [img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18]

export default function Teachers() {
  return (
    <section id="teachers" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <p className="section-subtitle">Đội ngũ</p>
          <h2 className="section-title">Giảng Viên</h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-4 text-sm leading-relaxed">
            Đội ngũ giảng viên giàu kinh nghiệm, được đào tạo bài bản tại các học viện âm nhạc hàng đầu Việt Nam.
          </p>
        </div>

        {/* Lưới ảnh đội ngũ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {team.map((img, i) => (
            <div
              key={i}
              className="fade-in aspect-[3/4] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
              style={{ transitionDelay: `${(i % 8) * 0.07}s` }}
            >
              <img
                src={img}
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
