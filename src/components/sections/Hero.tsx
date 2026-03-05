import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react'

// Direct Google Drive image URL (works when file is shared publicly)
const PROFILE_PHOTO = 'https://lh3.googleusercontent.com/d/1Pn5dx4dISnQ6bn2tQ7J4aVEbBHOZJcak'

export default function Hero() {
    const scrollToProjects = () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
    }
    const scrollToAbout = () => {
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center code-overlay"
        >
            {/* Subtle radial gradient center glow */}
            <div className="absolute inset-0 bg-orange-glow opacity-60 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

                    {/* ── LEFT: Text Content ── */}
                    <div className="flex-1 text-center lg:text-left">
                        {/* Greeting Tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 mono text-xs text-accent mb-6 px-3 py-1.5 rounded-full border border-accent/30 glass"
                        >
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            Available for new opportunities
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="section-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 leading-tight"
                        >
                            SAIFUDHEEN
                            <br />
                            <span className="gradient-text glow-orange-text">FAIZAL</span>
                        </motion.h1>

                        {/* Role */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mono text-sm text-accent/80 mb-4 tracking-widest uppercase"
                        >
                            Full Stack Developer · Flutter &amp; UI/UX Expert
                        </motion.p>

                        {/* Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 mb-5 leading-snug"
                            style={{ fontFamily: 'Lexend, sans-serif' }}
                        >
                            Architecting{' '}
                            <span className="font-semibold text-white">Seamless</span>
                            <br />
                            Digital Experiences.
                        </motion.h2>

                        {/* Sub-headline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="text-white/50 text-base lg:text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            1.5+ years of specialized expertise in{' '}
                            <span className="text-white/80">Flutter, React, and Firebase</span>,
                            blending{' '}
                            <span className="text-accent">Agentic Coding</span> with
                            Clean Architecture to deliver pixel-perfect products.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
                        >
                            <button
                                onClick={scrollToProjects}
                                id="cta-view-projects"
                                className="btn-primary px-8 py-4 rounded-xl text-sm font-semibold tracking-wide"
                            >
                                View Projects ⚡
                            </button>
                            <a
                                href="mailto:saifudheenfaisal54@gmail.com"
                                className="btn-outline px-8 py-4 rounded-xl text-sm font-semibold tracking-wide"
                            >
                                Get In Touch
                            </a>
                        </motion.div>

                        {/* Socials */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="flex items-center gap-5 justify-center lg:justify-start"
                        >
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white/40 hover:text-accent transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://instagram.com/_sai_fu_"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white/40 hover:text-accent transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white/40 hover:text-accent transition-colors duration-300"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <div className="h-px w-12 bg-white/10" />
                            <span className="mono text-xs text-white/30">saifudheenfaisal54@gmail.com</span>
                        </motion.div>
                    </div>

                    {/* ── RIGHT: Portrait with Glassmorphism ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 40 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
                        className="flex-shrink-0 relative"
                    >
                        {/* Portrait card */}
                        <div
                            className="portrait-container relative w-72 h-80 sm:w-80 sm:h-96 lg:w-[340px] lg:h-[420px] rounded-2xl overflow-hidden"
                            style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #0F0F0F 100%)' }}
                        >
                            {/* ── Profile Photo ── */}
                            <img
                                src={PROFILE_PHOTO}
                                alt="Saifudheen Faizal — Full Stack Developer"
                                className="absolute inset-0 w-full h-full object-cover object-top"
                                crossOrigin="anonymous"
                                onError={(e) => {
                                    const img = e.currentTarget as HTMLImageElement
                                    img.style.display = 'none'
                                    const fallback = document.getElementById('portrait-fallback')
                                    if (fallback) fallback.style.display = 'flex'
                                }}
                            />

                            {/* Fallback gradient orb shown only if photo fails to load */}
                            <div
                                id="portrait-fallback"
                                className="absolute inset-0 items-center justify-center"
                                style={{ display: 'none' }}
                            >
                                <div
                                    className="w-40 h-40 rounded-full"
                                    style={{
                                        background: 'radial-gradient(circle, #FF5F1F 0%, #2a1a0a 70%)',
                                        boxShadow: '0 0 60px rgba(255,95,31,0.4)',
                                    }}
                                />
                            </div>

                            {/* Bottom vignette so glass label is readable over any photo */}
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
                                style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 100%)' }}
                            />

                            {/* Glassmorphism label at bottom */}
                            <div
                                className="absolute bottom-0 left-0 right-0 p-5 glass-dark"
                                style={{ borderTop: '1px solid rgba(255,95,31,0.2)' }}
                            >
                                <p
                                    className="section-title text-white leading-tight mb-1"
                                    style={{ fontSize: '10px', letterSpacing: '0.12em' }}
                                >
                                    FULL STACK DEVELOPER
                                </p>
                                <p className="mono text-accent text-xs">Flutter &amp; UI/UX Expert</p>
                            </div>
                        </div>

                        {/* Floating badge: Experience */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -bottom-5 -left-10 glass neon-border rounded-xl px-4 py-3 text-center hidden sm:block"
                        >
                            <p className="text-accent section-title text-xl">1.5+</p>
                            <p className="mono text-white/50 text-xs">YRS EXP</p>
                        </motion.div>

                        {/* Floating badge: Stack */}
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                            className="absolute -top-5 -right-8 glass neon-border rounded-xl px-4 py-3 text-center hidden sm:block"
                        >
                            <p className="mono text-accent text-xs font-semibold">Flutter</p>
                            <p className="mono text-white/30 text-xs">React · Firebase</p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll hint */}
                <motion.button
                    onClick={scrollToAbout}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-accent transition-colors duration-300 flex flex-col items-center gap-1"
                    aria-label="Scroll down"
                >
                    <span className="mono text-xs tracking-widest">SCROLL</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ArrowDown size={18} />
                    </motion.div>
                </motion.button>
            </div>
        </section>
    )
}
