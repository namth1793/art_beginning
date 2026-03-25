import { useState } from 'react'

const courses = [
  'Khóa Cơ Bản (3 tháng)',
  'Khóa Nâng Cao (6 tháng)',
  'Lớp 1-1 Cá Nhân',
  'Lớp Thiếu Nhi (6–12 tuổi)',
  'Lớp Thiếu Niên (13–17 tuổi)',
]

export default function RegistrationForm() {
  const [form, setForm] = useState({ name: '', phone: '', course: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
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
        body: JSON.stringify(form)
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
    <section id="register" className="py-24 bg-cream">
      <div className="max-w-xl mx-auto px-6">
        <div className="text-center mb-12 fade-in">
          <p className="section-subtitle">Bắt đầu ngay hôm nay</p>
          <h2 className="section-title">Đăng ký học thử miễn phí</h2>
          <p className="text-gray-500 mt-4 text-sm">Điền thông tin và chúng tôi sẽ liên hệ bạn trong vòng 24 giờ.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 fade-in" style={{ transitionDelay: '0.2s' }}>
          {status === 'success' ? (
            <div className="text-center py-8">
              {/* CSS success mark — no icon */}
              <div className="w-16 h-16 rounded-full border-2 border-gold bg-gold/10 flex items-center justify-center mx-auto mb-5">
                <span className="text-gold text-2xl font-light" aria-hidden="true">✓</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">Đăng ký thành công!</h3>
              <p className="text-gray-500 text-sm">{msg}</p>
              <button onClick={() => setStatus('idle')} className="btn-outline mt-6 inline-block">
                Đăng ký thêm
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Họ và tên *</label>
                <input
                  type="text" name="name" value={form.name} onChange={handleChange}
                  placeholder="Nguyễn Văn An"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition bg-cream"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Số điện thoại *</label>
                <input
                  type="tel" name="phone" value={form.phone} onChange={handleChange}
                  placeholder="0901 234 567"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition bg-cream"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Khóa học quan tâm *</label>
                <select
                  name="course" value={form.course} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition bg-cream text-gray-600 appearance-none"
                >
                  <option value="">-- Chọn khóa học --</option>
                  {courses.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm bg-red-50 rounded-lg px-4 py-3">{msg}</p>
              )}

              <button type="submit" disabled={status === 'loading'}
                className="btn-gold w-full flex items-center justify-center gap-2.5 py-4 text-base">
                {status === 'loading' ? (
                  <><span className="spinner" aria-hidden="true" /> Đang gửi...</>
                ) : 'Đăng ký học thử miễn phí'}
              </button>
              <p className="text-xs text-gray-400 text-center">Chúng tôi cam kết bảo mật thông tin của bạn.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
