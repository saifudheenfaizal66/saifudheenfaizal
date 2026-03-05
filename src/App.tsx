import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import Navbar from './components/ui/Navbar'
import MobileNav from './components/ui/MobileNav'
import BackgroundScene from './components/canvas/BackgroundScene'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Portfolio from './components/sections/Portfolio'
import Contact from './components/sections/Contact'

function App() {
    const mouse = useRef({ x: 0, y: 0 })
    const [activeSection, setActiveSection] = useState('Home')

    // Lenis smooth scrolling
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        })

        const raf = (time: number) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        return () => lenis.destroy()
    }, [])

    // Mouse tracking for 3D camera rig
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            }
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    // Section observer for active nav state
    useEffect(() => {
        const sectionMap: Record<string, string> = {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
        }
        const observers: IntersectionObserver[] = []

        Object.keys(sectionMap).forEach((id) => {
            const el = document.getElementById(id)
            if (!el) return
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(sectionMap[id])
                },
                { threshold: 0.4 }
            )
            obs.observe(el)
            observers.push(obs)
        })

        return () => observers.forEach((o) => o.disconnect())
    }, [])

    return (
        <div className="relative min-h-screen bg-base overflow-x-hidden pb-16 md:pb-0">
            {/* 3D background */}
            <BackgroundScene mouse={mouse as React.RefObject<{ x: number; y: number }>} />

            {/* Desktop Navbar */}
            <Navbar />

            {/* Sections */}
            <main>
                <Hero />
                <About />
                <Skills />
                <Portfolio />
                <Contact />
            </main>

            {/* Mobile bottom nav */}
            <MobileNav active={activeSection} />
        </div>
    )
}

export default App
