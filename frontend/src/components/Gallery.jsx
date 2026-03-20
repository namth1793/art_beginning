import img1 from '../assets/thu_vien_anh/z7635884421791_844047f379d385e67e3a16da2f94da41.jpg'
import img2 from '../assets/thu_vien_anh/z7635884432766_0fbbe58051f6662ff6c495d647c10fa1.jpg'
import img3 from '../assets/thu_vien_anh/z7635884436979_6f13709dff8e8c84b49a448611210a67.jpg'
import img4 from '../assets/thu_vien_anh/z7635884440175_79c29a8cace640f516afa19370ede763.jpg'
import img5 from '../assets/thu_vien_anh/z7635884451403_b8fcc722eb7fa9dd936953d5f8441fb3.jpg'
import img6 from '../assets/thu_vien_anh/z7635884455965_9856f1c7ed71e77b4ce7bfe511c03448.jpg'
import img7 from '../assets/thu_vien_anh/z7635884466688_85483e682454d8dec0c57bf4c1f1df1b.jpg'
import img8 from '../assets/thu_vien_anh/z7635884469954_35b2185ae0afaef52f0638c314857b52.jpg'
import img9 from '../assets/thu_vien_anh/z7635884475606_307858b77367cef69c5aee01cc16d7a6.jpg'
import img10 from '../assets/thu_vien_anh/z7635884479363_659ab48913b59b092defb3ac3b150c13.jpg'
import img11 from '../assets/thu_vien_anh/z7635884510398_7fbe3e6853d2aca2db18b29c58af41d3.jpg'
import img12 from '../assets/thu_vien_anh/z7635884518589_d0a779ebb5e89b21ffb2738f4490c71a.jpg'
import img13 from '../assets/thu_vien_anh/z7635884520378_d04dad06a387df1a3e892589830e09fd.jpg'
import img14 from '../assets/thu_vien_anh/z7635884526970_3995a42af7a09c6ed8d54203ed71c60b.jpg'
import img15 from '../assets/thu_vien_anh/z7635884528280_659da830f6cc0bff8a947220f2324678.jpg'
import img16 from '../assets/thu_vien_anh/z7635884545539_06e2c5c74850839e41afb7eb7001fd35.jpg'
import img17 from '../assets/thu_vien_anh/z7635884547996_44c32d9b4791d025bfa27542059698d7.jpg'
import img18 from '../assets/thu_vien_anh/z7635884556854_9fc9c5a7064551a233a54fa9bc3efe8d.jpg'
import img19 from '../assets/thu_vien_anh/z7635884563270_889d249045a5da4ddce7b0587a899bc1.jpg'

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19,
]

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <p className="section-subtitle">Khoảnh khắc đáng nhớ</p>
          <h2 className="section-title">Thư viện ảnh</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div key={i}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer fade-in"
              style={{ transitionDelay: `${i * 0.05}s` }}>
              <img src={src} alt={`Thư viện ảnh ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/30 transition-colors duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/90 transition-all duration-300 flex items-center justify-center scale-0 group-hover:scale-100">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
