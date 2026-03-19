const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

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
app.post('/api/register', (req, res) => {
  const { name, phone, course } = req.body;
  if (!name || !phone || !course) return res.status(400).json({ error: 'Thiếu thông tin bắt buộc' });
  const stmt = db.prepare('INSERT INTO registrations (name, phone, course) VALUES (?, ?, ?)');
  const result = stmt.run(name, phone, course);
  res.json({ success: true, id: result.lastInsertRowid, message: 'Đăng ký thành công! Chúng tôi sẽ liên hệ bạn sớm.' });
});

// GET all registrations (admin)
app.get('/api/registrations', (req, res) => {
  const rows = db.prepare('SELECT * FROM registrations ORDER BY created_at DESC').all();
  res.json(rows);
});

app.listen(PORT, () => console.log(`Art Beginning backend running on http://localhost:${PORT}`));
