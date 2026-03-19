import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <img src={logo} alt="Art Beginning" className="h-20 w-auto object-contain" />
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Học viện Thanh Nhạc Art Beginning – Nơi âm nhạc bắt đầu từ trái tim. Đào tạo thanh nhạc bài bản, chuyên nghiệp cho mọi lứa tuổi.
          </p>
          <div className="flex gap-3">
            {[Facebook, Youtube, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="font-semibold text-white mb-5 tracking-wide">Liên kết nhanh</p>
          <ul className="space-y-3">
            {[
              ['Trang chủ', '#hero'],
              ['Giới thiệu', '#about'],
              ['Khóa học', '#courses'],
              ['Thành quả học viên', '#achievements'],
              ['Sự kiện', '#events'],
              ['Đăng ký học thử', '#register'],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-white/60 hover:text-gold text-sm transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-semibold text-white mb-5 tracking-wide">Liên hệ</p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-white/60 text-sm">
              <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <span>123 Đường Âm Nhạc, Quận Hải Châu, Đà Nẵng</span>
            </li>
            <li className="flex items-center gap-3 text-white/60 text-sm">
              <Phone className="w-4 h-4 text-gold flex-shrink-0" />
              <a href="tel:+84901234567" className="hover:text-gold transition-colors">0901 234 567</a>
            </li>
            <li className="flex items-center gap-3 text-white/60 text-sm">
              <Mail className="w-4 h-4 text-gold flex-shrink-0" />
              <a href="mailto:info@artbeginning.vn" className="hover:text-gold transition-colors">info@artbeginning.vn</a>
            </li>
          </ul>

          <div className="mt-8 bg-white/5 rounded-xl p-4 text-sm text-white/50">
            <p className="font-medium text-white/70 mb-1">Giờ làm việc</p>
            <p>Thứ 2 – Thứ 6: 8:00 – 20:00</p>
            <p>Thứ 7 – CN: 8:00 – 18:00</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-white/30 text-xs">
        © 2025 Art Beginning Vocal Academy. All rights reserved.
      </div>
    </footer>
  )
}
