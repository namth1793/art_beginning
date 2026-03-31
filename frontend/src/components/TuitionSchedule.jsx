import imgTanNhan from '../assets/giao_vien/tan_nhan.jpg'
import imgThuHa from '../assets/giao_vien/thu_ha.jpg'

// ─── Tính giá combo ────────────────────────────────────────────────────────────
function fmt(n) {
  return n.toLocaleString('vi-VN') + 'đ'
}
function combo(coursePrice, qty, pct) {
  return fmt(Math.round(coursePrice * qty * (1 - pct / 100) / 1000) * 1000)
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const pricingData = [
  {
    category: 'Lớp nhóm',
    duration: '90 phút / buổi',
    note: 'Giá tính theo từng học viên',
    courseNote: 'Khóa 10 buổi / học viên',
    rows: [
      { label: '5 học viên / lớp', session: '400.000đ', course: 4000000 },
      { label: '3 học viên / lớp', session: '500.000đ', course: 5000000 },
      { label: '2 học viên / lớp', session: '600.000đ', course: 6000000 },
    ],
  },
  {
    category: 'Lớp 1:1',
    duration: '45 phút / buổi',
    note: null,
    courseNote: 'Khóa 10 buổi',
    rows: [
      { label: 'Cơ bản', session: '600.000đ', course: 6000000 },
      { label: 'Luyện thi chuyên nghiệp', session: '800.000đ', course: 8000000 },
      { label: 'Luyện biểu diễn', session: '800.000đ', course: 8000000 },
    ],
  },
  {
    category: 'Giảng viên đặc biệt',
    duration: '45 phút / buổi',
    note: null,
    courseNote: 'Khóa 6 buổi',
    noCombo: true,
    rows: [
      {
        label: 'PGS. TS Nguyễn Thị Tân Nhàn',
        sub: 'Trưởng khoa Thanh nhạc – Học viện Âm nhạc Quốc gia Việt Nam',
        session: '5.000.000đ',
        course: 30000000,
        img: imgTanNhan,
      },
      {
        label: 'TS. Trần Thị Thu Hà',
        sub: 'Trưởng khoa Nghệ thuật – Trường Đại học Sư phạm Hà Nội',
        session: '2.000.000đ',
        course: 12000000,
        img: imgThuHa,
      },
    ],
  },
]

// ─── Lịch học ──────────────────────────────────────────────────────────────────
const weekOptions = [
  { days: 'Thứ 2 · Thứ 6 · Chủ nhật', code: 'T2 – T6 – CN' },
  { days: 'Thứ 3 · Thứ 5 · Chủ nhật', code: 'T3 – T5 – CN' },
  { days: 'Thứ 4 · Thứ 7 · Chủ nhật', code: 'T4 – T7 – CN' },
]

const scheduleGroup = [
  '08:15 – 09:45',
  '10:00 – 11:30',
  '13:30 – 15:00',
  '15:30 – 17:00',
  '17:30 – 19:00',
  '19:30 – 21:00',
]

const schedule1v1 = [
  '08:30 – 09:15',
  '09:30 – 10:15',
  '10:30 – 11:15',
  '13:30 – 14:15',
  '14:30 – 15:15',
  '15:30 – 16:15',
  '16:30 – 17:15',
  '17:30 – 18:15',
  '18:30 – 19:15',
  '19:30 – 20:15',
]

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function TuitionSchedule() {
  return (
    <section id="tuition" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 fade-in">
          <p className="section-subtitle">Học phí &amp; Lịch học</p>
          <h2 className="section-title">Bảng giá</h2>
        </div>

        {/* ── PRICING TABLE ── */}
        <div className="fade-in rounded-2xl border border-gray-200 shadow-sm overflow-x-auto" style={{ transitionDelay: '0.1s' }}>
        <div className="min-w-[600px]">

          {/* Column headers */}
          <div className="grid grid-cols-5 bg-charcoal text-white text-xs font-semibold">
            <div className="col-span-2 px-5 py-4">Hình thức</div>
            <div className="px-3 py-4 text-center border-l border-white/10">Giá / buổi</div>
            <div className="px-3 py-4 text-center border-l border-white/10">
              <span className="block">1 khóa</span>
              <span className="text-white/50 font-normal">(10 buổi)</span>
            </div>
            <div className="px-3 py-4 text-center border-l border-white/10">
              <span className="block text-gold">Combo ưu đãi</span>
              <span className="text-white/50 font-normal">3 hoặc 4 khóa</span>
            </div>
          </div>

          {pricingData.map((block, bi) => (
            <div key={bi}>
              {/* Block header */}
              <div className="bg-cream border-t border-gray-200">
                <div className="px-5 py-3 flex flex-wrap items-center gap-3">
                  <span className="font-semibold text-charcoal text-sm">{block.category}</span>
                  <span className="text-xs text-gray-400 bg-white border border-gray-200 px-2.5 py-0.5 rounded-full">
                    {block.duration}
                  </span>
                  {block.note && (
                    <span className="text-xs text-gray-400">{block.note}</span>
                  )}
                  <span className="ml-auto text-xs text-gray-400 italic">{block.courseNote}</span>
                </div>
              </div>

              {/* Rows */}
              {block.rows.map((row, ri) => (
                <div
                  key={ri}
                  className="grid grid-cols-5 border-t border-gray-100 hover:bg-gray-50 transition-colors duration-150"
                >
                  {/* Tên */}
                  <div className="col-span-2 px-5 py-4 text-sm text-gray-600 flex items-start gap-3">
                    {row.img && (
                      <img
                        src={row.img}
                        alt={row.label}
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0 border border-gray-200 mt-0.5"
                      />
                    )}
                    <div>
                      <span className="font-medium text-charcoal">{row.label}</span>
                      {row.sub && (
                        <p className="text-xs text-gray-400 mt-0.5 leading-snug">{row.sub}</p>
                      )}
                    </div>
                  </div>

                  {/* Giá / buổi */}
                  <div className="px-3 py-4 text-center border-l border-gray-100 flex items-center justify-center">
                    <span className="font-semibold text-charcoal text-sm">{row.session}</span>
                  </div>

                  {/* 1 khóa */}
                  <div className="px-3 py-4 text-center border-l border-gray-100 flex items-center justify-center">
                    <span className="font-bold text-gold text-sm">{fmt(row.course)}</span>
                  </div>

                  {/* Combo */}
                  <div className="px-3 py-4 border-l border-gray-100 flex items-center justify-center">
                    {block.noCombo ? (
                      <span className="text-xs text-gray-400 text-center">—</span>
                    ) : (
                      <div className="space-y-1.5 text-center">
                        <div>
                          <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-0.5">
                            3 khóa −10%
                          </span>
                          <p className="text-sm font-bold text-charcoal">{combo(row.course, 3, 10)}</p>
                        </div>
                        <div>
                          <span className="inline-block bg-gold/10 text-gold text-xs font-semibold px-2 py-0.5 rounded-full mb-0.5">
                            4 khóa −15%
                          </span>
                          <p className="text-sm font-bold text-charcoal">{combo(row.course, 4, 15)}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Footer note */}
          <div className="bg-cream border-t border-gray-200 px-5 py-3 flex items-center justify-between flex-wrap gap-2">
            <p className="text-xs text-gray-400">
              * 3 khóa (30 buổi) giảm 10% · 4 khóa (40 buổi) giảm 15%. Học phí có thể thay đổi, liên hệ để nhận tư vấn.
            </p>
            <a href="#register" className="btn-gold text-xs py-2 px-5">
              Đăng ký học thử miễn phí
            </a>
          </div>
        </div>{/* end min-w */}
        </div>{/* end overflow-x-auto */}

        {/* ── LỊCH HỌC ── */}
        <div className="mt-16 fade-in" style={{ transitionDelay: '0.2s' }}>
          <div className="text-center mb-10">
            <p className="section-subtitle">Thời khóa biểu</p>
            <h2 className="section-title">Lịch học</h2>
          </div>

          {/* Tuần 3 buổi */}
          <div className="mb-10 rounded-2xl border border-gold/30 bg-cream overflow-hidden">
            <div className="px-6 py-4 bg-charcoal flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <p className="font-semibold text-white text-sm">Lịch học 3 buổi / tuần — Tùy chọn theo học viên</p>
            </div>
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gold/20">
              {weekOptions.map((opt, i) => (
                <div key={i} className="px-6 py-5 text-center">
                  <p className="font-serif text-gold text-lg font-bold mb-1">{opt.code}</p>
                  <p className="text-sm text-gray-500">{opt.days}</p>
                </div>
              ))}
            </div>
            <div className="px-6 py-3 border-t border-gold/20 text-center">
              <p className="text-xs text-gray-400">Học viên chọn 1 trong 3 khung lịch trên khi đăng ký</p>
            </div>
          </div>

          {/* Giờ học cụ thể */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Lớp nhóm */}
            <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="px-6 py-4 bg-cream border-b border-gray-200">
                <p className="font-semibold text-charcoal text-sm">Lớp nhóm</p>
                <p className="text-xs text-gray-400 mt-0.5">2 – 5 học viên · 90 phút / buổi</p>
              </div>
              <div className="divide-y divide-gray-100">
                {scheduleGroup.map((slot, i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-medium text-gray-700 tabular-nums">{slot}</span>
                    <span className="text-xs text-gray-400">90 phút</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lớp 1:1 */}
            <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="px-6 py-4 bg-cream border-b border-gray-200">
                <p className="font-semibold text-charcoal text-sm">Lớp 1:1</p>
                <p className="text-xs text-gray-400 mt-0.5">Cá nhân · 45 phút / buổi</p>
              </div>
              <div className="divide-y divide-gray-100">
                {schedule1v1.map((slot, i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-medium text-gray-700 tabular-nums">{slot}</span>
                    <span className="text-xs text-gray-400">45 phút</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
