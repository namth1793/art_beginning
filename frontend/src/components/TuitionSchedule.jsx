import { Users, Clock, Music2, ChevronRight } from 'lucide-react'

// ─── DATA ────────────────────────────────────────────────────────────────────

const sessionGroup = [
  { students: 5, perStudent: '400.000đ', perClass: '2.000.000đ' },
  { students: 3, perStudent: '500.000đ', perClass: '1.500.000đ' },
  { students: 2, perStudent: '600.000đ', perClass: '1.200.000đ' },
]
const session1v1 = [
  { type: 'Cơ bản', price: '800.000đ' },
  { type: 'Luyện thi chuyên nghiệp', price: '1.000.000đ' },
  { type: 'Luyện biểu diễn', price: '1.000.000đ' },
]
const sessionSpecial = [
  { instructor: 'Nguyễn Thị Tân Nhàn', price: '3.000.000đ' },
  { instructor: 'Trần Thị Thu Hà', price: '2.000.000đ' },
]

const courseGroup = [
  { students: 5, price: '4.000.000đ' },
  { students: 3, price: '5.000.000đ' },
  { students: 2, price: '6.000.000đ' },
]
const course1v1 = [
  { type: 'Cơ bản', price: '8.000.000đ' },
  { type: 'Chuyên nghiệp', price: '10.000.000đ' },
  { type: 'Biểu diễn', price: '10.000.000đ' },
]
const courseSpecial = [
  { instructor: 'Nguyễn Thị Tân Nhàn', price: '18.000.000đ', sessions: 6 },
  { instructor: 'Trần Thị Thu Hà', price: '12.000.000đ', sessions: 6 },
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
  { name: 'Đàn tranh', icon: '🎵' },
  { name: 'Đàn bầu', icon: '🎵' },
  { name: 'Sáo', icon: '🎶' },
  { name: 'Nhị', icon: '🎻' },
  { name: 'Múa biểu diễn', icon: '💃' },
  { name: 'Nhảy hiện đại', icon: '🕺' },
]

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function SectionBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full border border-red-100">
      {children}
    </span>
  )
}

function CardHeading({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-red-500" />
      </div>
      <h4 className="font-semibold text-gray-800 text-base">{children}</h4>
    </div>
  )
}

function PriceTag({ value, sub }) {
  return (
    <div className="text-right">
      <span className="font-bold text-gray-900 text-sm">{value}</span>
      {sub && <span className="block text-xs text-gray-400 mt-0.5">{sub}</span>}
    </div>
  )
}

function Divider() {
  return <hr className="border-gray-100 my-3" />
}

// ─── PRICING COLUMN LEFT ─────────────────────────────────────────────────────

function SessionPricingCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-gray-50">
        <p className="text-xs font-semibold tracking-widest uppercase text-red-500 mb-1">Chi tiết theo buổi học</p>
        <h3 className="font-serif text-xl font-bold text-gray-900">Học phí / buổi</h3>
      </div>

      <div className="px-6 py-5 space-y-6">
        {/* Group classes */}
        <div>
          <CardHeading icon={Users}>Lớp nhóm</CardHeading>
          <p className="text-xs text-gray-400 mb-3 -mt-3 ml-10.5">90 phút / buổi</p>
          <div className="space-y-0">
            {sessionGroup.map((row, i) => (
              <div key={i}>
                <div className="flex items-center justify-between py-2.5 group">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {Array.from({ length: row.students }).map((_, j) => (
                        <div key={j} className="w-2 h-2 rounded-full bg-red-200 group-hover:bg-red-400 transition-colors" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{row.students} học viên</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-gray-900 text-sm">{row.perStudent}</span>
                    <span className="text-gray-400 text-xs"> / học viên</span>
                    <p className="text-xs text-gray-400">= {row.perClass} / lớp</p>
                  </div>
                </div>
                {i < sessionGroup.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-dashed border-gray-100 pt-5">
          <CardHeading icon={Clock}>Lớp 1:1</CardHeading>
          <p className="text-xs text-gray-400 mb-3 -mt-3 ml-10.5">45 phút / buổi</p>
          <div className="space-y-0">
            {session1v1.map((row, i) => (
              <div key={i}>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-sm text-gray-600">{row.type}</span>
                  <PriceTag value={row.price} sub="/ buổi" />
                </div>
                {i < session1v1.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-dashed border-gray-100 pt-5">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
              <span className="text-base">⭐</span>
            </div>
            <h4 className="font-semibold text-gray-800 text-base">Giảng viên đặc biệt</h4>
          </div>
          <div className="space-y-0">
            {sessionSpecial.map((row, i) => (
              <div key={i}>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-sm text-gray-600">{row.instructor}</span>
                  <PriceTag value={row.price} sub="/ buổi" />
                </div>
                {i < sessionSpecial.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── PRICING COLUMN RIGHT ────────────────────────────────────────────────────

function CoursePricingCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-gray-50 bg-gradient-to-r from-red-50/60 to-white">
        <p className="text-xs font-semibold tracking-widest uppercase text-red-500 mb-1">Theo khóa học</p>
        <h3 className="font-serif text-xl font-bold text-gray-900">Chi phí khóa học</h3>
        <p className="text-xs text-gray-400 mt-1">Mặc định 10 buổi / khóa (trừ giảng viên đặc biệt)</p>
      </div>

      <div className="px-6 py-5 space-y-6">
        {/* Group */}
        <div>
          <CardHeading icon={Users}>Lớp nhóm</CardHeading>
          <div className="space-y-0">
            {courseGroup.map((row, i) => (
              <div key={i}>
                <div className="flex items-center justify-between py-2.5 group">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {Array.from({ length: row.students }).map((_, j) => (
                        <div key={j} className="w-2 h-2 rounded-full bg-red-200 group-hover:bg-red-400 transition-colors" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{row.students} học viên</span>
                  </div>
                  <PriceTag value={row.price} sub="/ học viên / khóa" />
                </div>
                {i < courseGroup.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-dashed border-gray-100 pt-5">
          <CardHeading icon={Clock}>Lớp 1:1</CardHeading>
          <div className="space-y-0">
            {course1v1.map((row, i) => (
              <div key={i}>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-sm text-gray-600">{row.type}</span>
                  <PriceTag value={row.price} sub="/ khóa 10 buổi" />
                </div>
                {i < course1v1.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-dashed border-gray-100 pt-5">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
              <span className="text-base">⭐</span>
            </div>
            <h4 className="font-semibold text-gray-800 text-base">Giảng viên đặc biệt</h4>
          </div>
          <div className="space-y-0">
            {courseSpecial.map((row, i) => (
              <div key={i}>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-sm text-gray-600">{row.instructor}</span>
                  <PriceTag value={row.price} sub={`/ khóa ${row.sessions} buổi`} />
                </div>
                {i < courseSpecial.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-2">
          <a
            href="#register"
            className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-200"
          >
            Đăng ký học thử miễn phí
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

// ─── SCHEDULE SECTION ────────────────────────────────────────────────────────

function ScheduleSection() {
  return (
    <div className="mt-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-7 bg-red-500 rounded-full" />
        <h3 className="font-serif text-2xl font-bold text-gray-900">Lịch học</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Group schedule */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50 bg-red-50/40">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-red-100 flex items-center justify-center">
                <Users className="w-3.5 h-3.5 text-red-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Lớp nhóm</p>
                <p className="text-xs text-gray-400">2 – 5 học viên · 90 phút</p>
              </div>
            </div>
          </div>
          <div className="p-4 grid grid-cols-2 gap-2">
            {scheduleGroup.map((slot, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-gray-50 hover:bg-red-50 border border-gray-100 hover:border-red-100 rounded-xl px-3.5 py-2.5 transition-all duration-200 cursor-default"
              >
                <Clock className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700 tabular-nums">{slot}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 1:1 schedule */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50 bg-red-50/40">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-red-100 flex items-center justify-center">
                <Clock className="w-3.5 h-3.5 text-red-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Lớp 1:1</p>
                <p className="text-xs text-gray-400">Cá nhân · 45 phút</p>
              </div>
            </div>
          </div>
          <div className="p-4 grid grid-cols-2 gap-2">
            {schedule1v1.map((slot, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-gray-50 hover:bg-red-50 border border-gray-100 hover:border-red-100 rounded-xl px-3.5 py-2.5 transition-all duration-200 cursor-default"
              >
                <Clock className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700 tabular-nums">{slot}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── SUBJECTS SECTION ────────────────────────────────────────────────────────

function SubjectsSection() {
  return (
    <div className="mt-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-7 bg-red-500 rounded-full" />
        <h3 className="font-serif text-2xl font-bold text-gray-900">Môn học</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {subjects.map((s, i) => (
          <div
            key={i}
            className="group flex flex-col items-center gap-2.5 bg-white border border-gray-100 rounded-2xl p-4 hover:border-red-200 hover:bg-red-50/40 hover:shadow-sm transition-all duration-200 cursor-default"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform duration-200">{s.icon}</span>
            <span className="text-sm font-medium text-gray-700 text-center leading-tight">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────

export default function TuitionSchedule() {
  return (
    <section id="tuition" className="py-24 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-14 fade-in">
          <SectionBadge>Học phí & Lịch học</SectionBadge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mt-5 mb-4">
            Bảng giá & Thời khóa biểu
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Học phí linh hoạt theo nhóm và cá nhân. Mỗi buổi học được thiết kế tối ưu
            để phát triển kỹ năng nhanh nhất.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid lg:grid-cols-2 gap-6 fade-in" style={{ transitionDelay: '0.1s' }}>
          <SessionPricingCard />
          <CoursePricingCard />
        </div>

        {/* Schedule */}
        <div className="fade-in" style={{ transitionDelay: '0.2s' }}>
          <ScheduleSection />
        </div>

        {/* Subjects */}
        <div className="fade-in" style={{ transitionDelay: '0.3s' }}>
          <SubjectsSection />
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-gray-400 mt-10 fade-in" style={{ transitionDelay: '0.4s' }}>
          * Học phí có thể thay đổi. Liên hệ trực tiếp để nhận tư vấn và ưu đãi mới nhất.
        </p>
      </div>
    </section>
  )
}
