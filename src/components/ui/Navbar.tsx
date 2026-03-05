import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('Home')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNav = (label: string, href: string) => {
        setActive(label)
        setMenuOpen(false)
        const el = document.querySelector(href)
        el?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={() => handleNav('Home', '#home')}
                        className="font-display text-lg font-bold tracking-widest text-white"
                        style={{ letterSpacing: '0.15em' }}
                    >
                        <span className="gradient-text">SF</span>
                        <span className="text-white/60 text-xs font-mono ml-2">// dev</span>
                    </a>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <button
                                    onClick={() => handleNav(link.label, link.href)}
                                    className={`nav-link text-sm font-medium tracking-wide ${active === link.label ? 'text-accent active' : 'text-white/60 hover:text-white'
                                        }`}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <a
                        href="#contact"
                        onClick={() => handleNav('Contact', '#contact')}
                        className="hidden md:block btn-primary px-5 py-2 rounded-lg text-sm"
                    >
                        Hire Me
                    </a>

                    {/* Mobile menu toggle */}
                    <button
                        className="md:hidden text-white/80 hover:text-accent transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile Dropdown */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="md:hidden overflow-hidden glass-dark border-t border-white/5"
                        >
                            <ul className="px-6 py-4 flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <li key={link.label}>
                                        <button
                                            onClick={() => handleNav(link.label, link.href)}
                                            className={`text-sm font-medium tracking-wide w-full text-left py-2 ${active === link.label ? 'text-accent' : 'text-white/70'
                                                }`}
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    )
}
