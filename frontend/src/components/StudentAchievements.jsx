import { Play } from 'lucide-react'

const videos = [
  { id: 1, title: 'Màn trình diễn cuối khóa – Em Linh', thumb: 'https://images.unsplash.com/photo-1598387180429-c3b35c3d0e1e?w=600&auto=format&fit=crop&q=80', duration: '3:42' },
  { id: 2, title: 'Recital tháng 3 – Anh Minh', thumb: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&auto=format&fit=crop&q=80', duration: '4:15' },
  { id: 3, title: 'Mini concert – Em Thảo', thumb: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80', duration: '5:08' },
  { id: 4, title: 'Biểu diễn cuối kỳ – Chị Hoa', thumb: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&auto=format&fit=crop&q=80', duration: '3:55' },
  { id: 5, title: 'Showcase mùa hè 2024', thumb: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80', duration: '6:20' },
  { id: 6, title: 'Gala âm nhạc – Nhóm Advanced', thumb: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=600&auto=format&fit=crop&q=80', duration: '8:00' },
]

export default function StudentAchievements() {
  return (
    <section id="achievements" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <p className="section-subtitle">Học viên của chúng tôi</p>
          <h2 className="section-title">Thành quả học viên</h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-4">Mỗi buổi biểu diễn là một cột mốc trên hành trình âm nhạc của học viên.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <div key={v.id} className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 cursor-pointer fade-in`}
              style={{ transitionDelay: `${i * 0.1}s` }}>
              <img src={v.thumb} alt={v.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-gold/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80">
                <p className="text-white font-medium text-sm">{v.title}</p>
                <p className="text-gold text-xs mt-1">{v.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
