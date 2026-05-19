require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 5010;

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const db = new Database(path.join(dataDir, 'art_beginning.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS registrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    course TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedOrigins = process.env.FRONTEND_URL
  ? [process.env.FRONTEND_URL]
  : ['http://localhost:5173'];

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.some(o => origin.startsWith(o))) return cb(null, true);
    cb(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));
app.use(express.json());

// POST register trial class
app.post('/api/register', async (req, res) => {
  const { name, phone, course } = req.body;
  if (!name || !phone || !course) return res.status(400).json({ error: 'Thiếu thông tin bắt buộc' });

  const stmt = db.prepare('INSERT INTO registrations (name, phone, course) VALUES (?, ?, ?)');
  const result = stmt.run(name, phone, course);

  // Gửi email thông báo (không chặn response nếu lỗi)
  if (process.env.RESEND_API_KEY && process.env.NOTIFY_EMAIL) {
    resend.emails.send({
      from: 'Art Beginning <onboarding@resend.dev>',
      to: process.env.NOTIFY_EMAIL,
      subject: `[Art Beginning] Đăng ký học thử mới – ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
          <div style="background:#1A1A1A;padding:24px 32px;">
            <h2 style="color:#C9A96E;margin:0;font-size:20px;">Art Beginning Vocal Academy</h2>
            <p style="color:#ffffff99;margin:4px 0 0;font-size:13px;">Thông báo đăng ký học thử mới</p>
          </div>
          <div style="padding:28px 32px;background:#fff;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr>
                <td style="padding:8px 0;color:#6b7280;width:120px;">Họ và tên</td>
                <td style="padding:8px 0;color:#111827;font-weight:600;">${name}</td>
              </tr>
              <tr style="border-top:1px solid #f3f4f6;">
                <td style="padding:8px 0;color:#6b7280;">Điện thoại</td>
                <td style="padding:8px 0;color:#111827;font-weight:600;">${phone}</td>
              </tr>
              <tr style="border-top:1px solid #f3f4f6;">
                <td style="padding:8px 0;color:#6b7280;">Khóa học</td>
                <td style="padding:8px 0;color:#111827;font-weight:600;">${course}</td>
              </tr>
            </table>
            <div style="margin-top:20px;padding:14px 18px;background:#F5F0E8;border-radius:8px;font-size:13px;color:#6b7280;">
              Vui lòng liên hệ lại trong vòng 24 giờ.
            </div>
          </div>
          <div style="padding:14px 32px;background:#f9fafb;border-top:1px solid #f3f4f6;font-size:12px;color:#9ca3af;">
            Art Beginning • Nhà số một ngách 19 ngõ 137, phường Việt Hưng, Hà Nội
          </div>
        </div>
      `,
    }).catch(err => console.error('[Resend]', err.message));
  }

  res.json({ success: true, id: result.lastInsertRowid, message: 'Đăng ký thành công! Chúng tôi sẽ liên hệ bạn sớm.' });
});

// GET all registrations (admin)
app.get('/api/registrations', (req, res) => {
  const rows = db.prepare('SELECT * FROM registrations ORDER BY created_at DESC').all();
  res.json(rows);
});

app.listen(PORT, () => console.log(`Art Beginning backend running on http://localhost:${PORT}`));
