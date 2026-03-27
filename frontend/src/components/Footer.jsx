import logo from '../assets/logo.png'

const quickLinks = [
  ['Trang chủ',          '#hero'],
  ['Giới thiệu',         '#about'],
  ['Thành quả học viên', '#achievements'],
  ['Bảng giá',           '#tuition'],
  ['Đăng ký học thử',   '#register'],
]

const socialLinks = [
  { label: 'Facebook',  href: '#' },
  { label: 'YouTube',   href: '#' },
  { label: 'Instagram', href: '#' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white relative overflow-hidden">

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #C9A96E 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* CTA Band */}
      <div className="relative border-b border-white/8 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold text-xs font-medium tracking-[0.3em] uppercase mb-4">Sẵn sàng chưa?</p>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Bắt đầu hành trình âm nhạc<br />
            <span className="text-gold-gradient">của bạn ngay hôm nay</span>
          </h3>
          <a href="#register"
            className="btn-gold text-sm px-8 py-3.5 shadow-[0_8px_30px_rgba(201,169,110,0.35)]">
            Đăng ký học thử miễn phí
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <img src={logo} alt="Art Beginning Vocal Academy" className="h-20 w-auto object-contain mb-5" />
          <p className="text-white/40 text-sm leading-relaxed mb-7">
            Học viện Thanh Nhạc Art Beginning – Nơi âm nhạc bắt đầu từ trái tim.
            Đào tạo thanh nhạc bài bản, chuyên nghiệp cho mọi lứa tuổi.
          </p>
          <div className="flex gap-2.5 flex-wrap">
            {socialLinks.map(({ label, href }) => (
              <a key={label} href={href}
                className="text-xs font-medium text-white/40 hover:text-gold border border-white/10
                           hover:border-gold/60 px-3.5 py-1.5 rounded-full transition-all duration-300">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-white/60 font-semibold mb-6 tracking-widest text-xs uppercase">Liên kết nhanh</p>
          <ul className="space-y-3">
            {quickLinks.map(([label, href]) => (
              <li key={href}>
                <a href={href}
                  className="text-white/40 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-4 h-px bg-white/20 group-hover:bg-gold group-hover:w-6 transition-all duration-300" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-white/60 font-semibold mb-6 tracking-widest text-xs uppercase">Liên hệ</p>
          <address className="not-italic space-y-5">
            <div>
              <p className="text-white/25 text-[10px] uppercase tracking-wider mb-1.5">Địa chỉ</p>
              <p className="text-white/50 text-sm leading-relaxed">
                Nhà số một ngách 19 ngõ 137, phường Việt Hưng, thành phố Hà Nội
              </p>
            </div>
            <div>
              <p className="text-white/25 text-[10px] uppercase tracking-wider mb-1.5">Điện thoại</p>
              <a href="tel:+84382881172" className="text-white/50 hover:text-gold transition-colors text-sm">
                0382 881 172
              </a>
            </div>
            <div>
              <p className="text-white/25 text-[10px] uppercase tracking-wider mb-1.5">Email</p>
              <a href="mailto:artbeginning2026@gmail.com"
                className="text-white/50 hover:text-gold transition-colors text-sm break-all">
                artbeginning2026@gmail.com
              </a>
            </div>
          </address>

          <div className="mt-8 border border-white/8 rounded-2xl p-5 text-sm text-white/35">
            <p className="text-white/50 font-medium mb-2 text-xs uppercase tracking-widest">Giờ làm việc</p>
            <p>Thứ 2 – Thứ 6: 8:00 – 20:00</p>
            <p>Thứ 7 – Chủ nhật: 8:00 – 18:00</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative border-t border-white/8 py-6 text-center text-white/20 text-xs">
        © 2025 Art Beginning Vocal Academy. All rights reserved.
      </div>
    </footer>
  )
}
