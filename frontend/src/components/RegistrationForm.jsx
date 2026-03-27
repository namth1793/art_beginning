import { useState } from 'react'

const courses = [
  'Khóa Cơ Bản (3 tháng)',
  'Khóa Nâng Cao (6 tháng)',
  'Lớp 1-1 Cá Nhân',
  'Lớp Thiếu Nhi (6–12 tuổi)',
  'Lớp Thiếu Niên (13–17 tuổi)',
]

const perks = [
  'Buổi học thử hoàn toàn miễn phí',
  'Giảng viên đánh giá giọng hát cá nhân',
  'Tư vấn lộ trình học phù hợp',
  'Không ràng buộc sau buổi thử',
]

export default function RegistrationForm() {
  const [form, setForm] = useState({ name: '', phone: '', course: '' })
  const [status, setStatus] = useState('idle')
  const [msg, setMsg] = useState('')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.course) {
      setStatus('error'); setMsg('Vui lòng điền đầy đủ thông tin.'); return
    }
    setStatus('loading')
    try {
      const API = import.meta.env.VITE_API_URL || ''
      const res = await fetch(`${API}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success'); setMsg(data.message)
        setForm({ name: '', phone: '', course: '' })
      } else {
        setStatus('error'); setMsg(data.error || 'Có lỗi xảy ra.')
      }
    } catch {
      setStatus('error'); setMsg('Không thể kết nối đến máy chủ.')
    }
  }

  return (
    <section id="register" className="py-28 bg-charcoal relative overflow-hidden">

      {/* Trang trí nền */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">

        {/* Left — info panel */}
        <div className="slide-left">
          <p className="section-subtitle">Bắt đầu ngay hôm nay</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Đăng ký học thử<br />
            <span className="text-gold-gradient">miễn phí</span>
          </h2>
          <p className="text-white/55 leading-relaxed mb-10 text-sm">
            Điền thông tin bên cạnh và chúng tôi sẽ liên hệ bạn trong vòng 24 giờ để sắp xếp buổi học thử.
          </p>

          {/* Perks */}
          <ul className="space-y-4">
            {perks.map((p, i) => (
              <li key={i} className="flex items-center gap-3 text-white/75 text-sm">
                <span className="w-5 h-5 rounded-full border border-gold/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-xs">✓</span>
                </span>
                {p}
              </li>
            ))}
          </ul>

          {/* Contact quick-links */}
          <div className="mt-12 flex flex-col gap-3">
            <a href="tel:+84382881172"
              className="inline-flex items-center gap-3 text-white/50 hover:text-gold text-sm transition-colors group">
              <span className="w-9 h-9 rounded-full border border-white/15 group-hover:border-gold flex items-center justify-center transition-colors text-base">
                ☎
              </span>
              0382 881 172
            </a>
            <a href="mailto:artbeginning2026@gmail.com"
              className="inline-flex items-center gap-3 text-white/50 hover:text-gold text-sm transition-colors group">
              <span className="w-9 h-9 rounded-full border border-white/15 group-hover:border-gold flex items-center justify-center transition-colors text-base">
                ✉
              </span>
              artbeginning2026@gmail.com
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div className="slide-right" style={{ transitionDelay: '0.15s' }}>
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 rounded-full border-2 border-gold bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-gold text-3xl" aria-hidden="true">✓</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">Đăng ký thành công!</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{msg}</p>
                <button onClick={() => setStatus('idle')} className="btn-outline mt-8 inline-block">
                  Đăng ký thêm
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <p className="font-serif text-xl font-bold text-charcoal mb-1">Thông tin đăng ký</p>
                  <p className="text-gray-400 text-xs">Chúng tôi cam kết bảo mật thông tin của bạn.</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-2 uppercase tracking-wider">Họ và tên *</label>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="Nguyễn Văn An"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm
                               focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold
                               transition bg-gray-50 placeholder-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-2 uppercase tracking-wider">Số điện thoại *</label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="0901 234 567"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm
                               focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold
                               transition bg-gray-50 placeholder-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-2 uppercase tracking-wider">Khóa học quan tâm *</label>
                  <div className="relative">
                    <select
                      name="course" value={form.course} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm
                                 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold
                                 transition bg-gray-50 text-gray-600 appearance-none cursor-pointer"
                    >
                      <option value="">-- Chọn khóa học --</option>
                      {courses.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▾</span>
                  </div>
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm bg-red-50 rounded-xl px-4 py-3 border border-red-100">{msg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-gold w-full flex items-center justify-center gap-2.5 py-4 text-base mt-2"
                >
                  {status === 'loading'
                    ? <><span className="spinner" aria-hidden="true" /> Đang gửi...</>
                    : 'Đăng ký học thử miễn phí'}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
