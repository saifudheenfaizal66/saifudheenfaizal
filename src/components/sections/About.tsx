import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Briefcase, MapPin } from 'lucide-react'

const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, staggerChildren: 0.15 } },
}
const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const education = [
    {
        icon: GraduationCap,
        degree: 'Bachelor of Computer Application',
        school: 'Kerala University',
        period: '2020 – 2023',
        desc: 'Core foundation in software engineering, algorithms, and data structures.',
    },
    {
        icon: GraduationCap,
        degree: 'Flutter Certification',
        school: 'Unique Occasion Tech, Cochin',
        period: '2023 – 2024',
        desc: 'Specialized training in Flutter/Dart, Firebase, and mobile UI architecture.',
    },
]

const experience = [
    {
        role: 'Software Developer',
        company: 'Espoir Digital Solutions',
        period: '2024 – Present',
        location: 'Kerala, India',
        highlights: [
            'Built Staff Attendance Suite with GPS Geofencing & real-time admin dashboard',
            'Developed field force management system for marketing operations',
            'Shipped Royal Jewels e-commerce app with full BLoC state management',
            'Integrated Lottie animations & OpenWeather API for Weather Forecast App',
        ],
    },
]

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="about" className="relative py-24 lg:py-32" ref={ref}>
            {/* Accent line */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,95,31,0.4))' }}
            />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    variants={sectionVariant}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {/* Section header */}
                    <motion.div variants={itemVariant} className="text-center mb-16">
                        <p className="mono text-accent text-xs tracking-widest uppercase mb-3">
              // about_me.dart
                        </p>
                        <h2 className="section-title text-3xl sm:text-4xl text-white">
                            THE <span className="gradient-text">FOUNDATION</span>
                        </h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Bio */}
                        <motion.div variants={itemVariant}>
                            <p className="text-white/60 text-base leading-relaxed mb-6">
                                A dedicated and versatile Full Stack Developer with a deep passion
                                for crafting beautiful, functional, and scalable digital products.
                                I specialize in Flutter and React ecosystems, bridging the gap
                                between elegant frontend experiences and powerful backend logic.
                            </p>
                            <p className="text-white/60 text-base leading-relaxed mb-8">
                                My objective is to{' '}
                                <span className="text-white font-medium">
                                    architect seamless, efficient, and innovative digital experiences
                                </span>{' '}
                                — leveraging modern AI-driven coding tools to accelerate delivery
                                without sacrificing quality.
                            </p>

                            {/* Quick stats */}
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { num: '1.5+', label: 'Years Exp.' },
                                    { num: '4+', label: 'Projects' },
                                    { num: '100%', label: 'Dedication' },
                                ].map((s) => (
                                    <div key={s.label} className="glass rounded-xl p-4 text-center neon-border">
                                        <p className="section-title text-2xl gradient-text glow-orange-text">{s.num}</p>
                                        <p className="mono text-white/40 text-xs mt-1">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Education Cards */}
                        <motion.div variants={itemVariant} className="space-y-4">
                            <p className="mono text-white/40 text-xs tracking-widest uppercase mb-6">
                                Education
                            </p>
                            {education.map((ed) => (
                                <div
                                    key={ed.degree}
                                    className="glass rounded-2xl p-5 border border-white/5 hover:border-accent/30 transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl glass neon-border flex items-center justify-center flex-shrink-0 group-hover:shadow-orange-sm transition-all">
                                            <ed.icon size={18} className="text-accent" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium text-sm mb-0.5">{ed.degree}</p>
                                            <p className="mono text-accent text-xs mb-2">{ed.school}</p>
                                            <p className="mono text-white/30 text-xs mb-2">{ed.period}</p>
                                            <p className="text-white/40 text-xs leading-relaxed">{ed.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Work Timeline */}
                    <motion.div variants={itemVariant} className="mt-20">
                        <p className="mono text-white/40 text-xs tracking-widest uppercase mb-10 text-center">
                            Work Experience
                        </p>
                        <div className="relative max-w-3xl mx-auto">
                            {/* Vertical glowing line */}
                            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px timeline-line" />

                            {experience.map((exp, i) => (
                                <div key={i} className="relative pl-16 sm:pl-20 pb-8">
                                    {/* Dot */}
                                    <div
                                        className="absolute left-4 sm:left-6 top-1.5 w-5 h-5 rounded-full neon-border flex items-center justify-center"
                                        style={{ background: '#0A0A0A', boxShadow: '0 0 12px rgba(255,95,31,0.5)' }}
                                    >
                                        <div className="w-2 h-2 rounded-full bg-accent" />
                                    </div>

                                    <div className="glass rounded-2xl p-6 border border-white/5 hover:border-accent/20 transition-all duration-300">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                            <div>
                                                <h3 className="text-white font-semibold text-base">{exp.role}</h3>
                                                <p className="text-accent font-medium text-sm mono">{exp.company}</p>
                                            </div>
                                            <div className="flex flex-col items-start sm:items-end gap-1">
                                                <span className="mono text-white/40 text-xs">{exp.period}</span>
                                                <span className="flex items-center gap-1 mono text-white/30 text-xs">
                                                    <MapPin size={10} />
                                                    {exp.location}
                                                </span>
                                            </div>
                                        </div>
                                        <ul className="space-y-2">
                                            {exp.highlights.map((h, j) => (
                                                <li key={j} className="flex items-start gap-2 text-white/50 text-sm">
                                                    <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
