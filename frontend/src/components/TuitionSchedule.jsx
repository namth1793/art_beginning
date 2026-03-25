import { Clock, Users } from 'lucide-react'

// ─── DATA ─────────────────────────────────────────────────────────────────────

const pricingData = [
  {
    category: 'Lớp nhóm',
    duration: '90 phút / buổi',
    note: 'Giá tính theo từng học viên',
    rows: [
      { label: '5 học viên / lớp', session: '400.000đ', course: '4.000.000đ' },
      { label: '3 học viên / lớp', session: '500.000đ', course: '5.000.000đ' },
      { label: '2 học viên / lớp', session: '600.000đ', course: '6.000.000đ' },
    ],
    courseNote: 'Khóa 10 buổi / học viên',
  },
  {
    category: 'Lớp 1:1',
    duration: '45 phút / buổi',
    note: null,
    rows: [
      { label: 'Cơ bản', session: '800.000đ', course: '8.000.000đ' },
      { label: 'Luyện thi chuyên nghiệp', session: '1.000.000đ', course: '10.000.000đ' },
      { label: 'Luyện biểu diễn', session: '1.000.000đ', course: '10.000.000đ' },
    ],
    courseNote: 'Khóa 10 buổi',
  },
  {
    category: 'Giảng viên đặc biệt',
    duration: '45 phút / buổi',
    note: null,
    rows: [
      { label: 'Nguyễn Thị Tân Nhàn', session: '3.000.000đ', course: '18.000.000đ' },
      { label: 'Trần Thị Thu Hà', session: '2.000.000đ', course: '12.000.000đ' },
    ],
    courseNote: 'Khóa 6 buổi',
  },
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

const subjects = [
  { name: 'Thanh nhạc', icon: '🎤' },
  { name: 'Piano', icon: '🎹' },
  { name: 'Organ', icon: '🎹' },
  { name: 'Guitar', icon: '🎸' },
  { name: 'Đàn tranh', icon: '🪕' },
  { name: 'Đàn bầu', icon: '🎵' },
  { name: 'Sáo', icon: '🎶' },
  { name: 'Nhị', icon: '🎻' },
  { name: 'Múa biểu diễn', icon: '💃' },
  { name: 'Nhảy hiện đại', icon: '🕺' },
]

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function TuitionSchedule() {
  return (
    <section id="tuition" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 fade-in">
          <p className="section-subtitle">Học phí & Lịch học</p>
          <h2 className="section-title">Bảng giá</h2>
        </div>

        {/* ── PRICING TABLE ── */}
        <div className="fade-in rounded-2xl border border-gray-200 overflow-hidden shadow-sm" style={{ transitionDelay: '0.1s' }}>

          {/* Column headers */}
          <div className="grid grid-cols-3 bg-charcoal text-white text-sm font-semibold">
            <div className="px-6 py-4">Hình thức</div>
            <div className="px-6 py-4 text-center border-l border-white/10">Giá / buổi</div>
            <div className="px-6 py-4 text-center border-l border-white/10">Giá khóa học</div>
          </div>

          {pricingData.map((block, bi) => (
            <div key={bi}>
              {/* Block header */}
              <div className="grid grid-cols-3 bg-cream border-t border-gray-200">
                <div className="px-6 py-3 col-span-3 flex flex-wrap items-center gap-3">
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
                  className="grid grid-cols-3 border-t border-gray-100 hover:bg-gray-50 transition-colors duration-150"
                >
                  <div className="px-6 py-4 text-sm text-gray-700">{row.label}</div>
                  <div className="px-6 py-4 text-center border-l border-gray-100">
                    <span className="font-semibold text-charcoal text-sm">{row.session}</span>
                  </div>
                  <div className="px-6 py-4 text-center border-l border-gray-100">
                    <span className="font-bold text-gold text-sm">{row.course}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Footer note */}
          <div className="bg-cream border-t border-gray-200 px-6 py-3 flex items-center justify-between flex-wrap gap-2">
            <p className="text-xs text-gray-400">
              * Học phí có thể thay đổi. Liên hệ để nhận tư vấn và ưu đãi mới nhất.
            </p>
            <a
              href="#register"
              className="btn-gold text-xs py-2 px-5"
            >
              Đăng ký học thử miễn phí
            </a>
          </div>
        </div>

        {/* ── SCHEDULE ── */}
        <div className="mt-16 fade-in" style={{ transitionDelay: '0.2s' }}>
          <div className="text-center mb-10">
            <p className="section-subtitle">Thời khóa biểu</p>
            <h2 className="section-title">Lịch học</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Group */}
            <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="flex items-center gap-3 px-6 py-4 bg-cream border-b border-gray-200">
                <div className="w-8 h-8 rounded-full bg-charcoal flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">Lớp nhóm</p>
                  <p className="text-xs text-gray-400">2 – 5 học viên · 90 phút</p>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {scheduleGroup.map((slot, i) => (
                  <div key={i} className="flex items-center gap-3 px-6 py-3 hover:bg-gray-50 transition-colors">
                    <Clock className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700 tabular-nums">{slot}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 1:1 */}
            <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="flex items-center gap-3 px-6 py-4 bg-cream border-b border-gray-200">
                <div className="w-8 h-8 rounded-full bg-charcoal flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">Lớp 1:1</p>
                  <p className="text-xs text-gray-400">Cá nhân · 45 phút</p>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {schedule1v1.map((slot, i) => (
                  <div key={i} className="flex items-center gap-3 px-6 py-3 hover:bg-gray-50 transition-colors">
                    <Clock className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700 tabular-nums">{slot}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── SUBJECTS ── */}
        <div className="mt-16 fade-in" style={{ transitionDelay: '0.3s' }}>
          <div className="text-center mb-10">
            <p className="section-subtitle">Chương trình</p>
            <h2 className="section-title">Môn học</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {subjects.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 bg-cream border border-gray-200 rounded-xl px-4 py-5 hover:border-gold hover:shadow-sm transition-all duration-200 cursor-default"
              >
                <span className="text-2xl">{s.icon}</span>
                <span className="text-sm font-medium text-charcoal text-center leading-tight">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
