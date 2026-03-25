import logo from '../assets/logo.png'

const quickLinks = [
  ['Trang chủ', '#hero'],
  ['Giới thiệu', '#about'],
  ['Thành quả học viên', '#achievements'],
  ['Bảng giá', '#tuition'],
  ['Đăng ký học thử', '#register'],
]

const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'Instagram', href: '#' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <div className="mb-5">
            <img src={logo} alt="Art Beginning Vocal Academy" className="h-20 w-auto object-contain" />
          </div>
          <p className="text-white/55 text-sm leading-relaxed mb-7">
            Học viện Thanh Nhạc Art Beginning – Nơi âm nhạc bắt đầu từ trái tim.
            Đào tạo thanh nhạc bài bản, chuyên nghiệp cho mọi lứa tuổi.
          </p>
          {/* Social — text links, no icons */}
          <div className="flex gap-3 flex-wrap">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-xs font-medium text-white/50 hover:text-gold border border-white/15 hover:border-gold px-3 py-1.5 rounded-full transition-all duration-200"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="font-semibold text-white mb-6 tracking-widest text-xs uppercase">Liên kết nhanh</p>
          <ul className="space-y-3">
            {quickLinks.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-white/55 hover:text-gold text-sm transition-colors flex items-center gap-2">
                  <span className="text-gold/40 select-none">—</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-semibold text-white mb-6 tracking-widest text-xs uppercase">Liên hệ</p>
          <address className="not-italic space-y-4">
            <div className="text-white/55 text-sm leading-relaxed">
              <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Địa chỉ</p>
              Nhà số một ngách 19 ngõ 137, phường Việt Hưng, thành phố Hà Nội
            </div>
            <div className="text-sm">
              <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Điện thoại</p>
              <a href="tel:+84382881172" className="text-white/55 hover:text-gold transition-colors">
                0382 881 172
              </a>
            </div>
            <div className="text-sm">
              <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Email</p>
              <a href="mailto:artbeginning2026@gmail.com" className="text-white/55 hover:text-gold transition-colors break-all">
                artbeginning2026@gmail.com
              </a>
            </div>
          </address>

          <div className="mt-8 bg-white/5 rounded-xl p-4 text-sm text-white/45">
            <p className="font-medium text-white/65 mb-2 text-xs uppercase tracking-widest">Giờ làm việc</p>
            <p>Thứ 2 – Thứ 6: 8:00 – 20:00</p>
            <p>Thứ 7 – Chủ nhật: 8:00 – 18:00</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-white/25 text-xs">
        © 2025 Art Beginning Vocal Academy. All rights reserved.
      </div>
    </footer>
  )
}
