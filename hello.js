export default function handler(req, res) {
  res.status(200).json({
    message: 'สวัสดีจาก Server ของ Vercel 👋',
    time: new Date().toISOString()
  });
}