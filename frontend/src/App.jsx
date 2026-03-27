import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StudentAchievements from './components/StudentAchievements'
import Testimonial from './components/Testimonial'
import Statistics from './components/Statistics'
import About from './components/About'
import Events from './components/Events'
import TuitionSchedule from './components/TuitionSchedule'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'
import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.fade-in, .slide-left, .slide-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StudentAchievements />
      <Testimonial />
      <Statistics />
      <About />
      <Events />
      <TuitionSchedule />
      <RegistrationForm />
      <Footer />
    </div>
  )
}
