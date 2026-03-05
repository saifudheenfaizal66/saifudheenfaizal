import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react'

interface Project {
    id: string
    title: string
    tag: string
    stack: string[]
    description: string
    highlights: string[]
    type: 'mobile' | 'web'
    gradient: string
    icon: string
}

const projects: Project[] = [
    {
        id: 'attendance',
        title: 'Staff Attendance Suite',
        tag: 'Enterprise Mobile App',
        stack: ['Flutter', 'Firebase', 'BLoC', 'Geofencing', 'Google Maps'],
        description:
            'A full-featured enterprise attendance system with real-time GPS Geofencing, punch-in/out tracking, and a live admin dashboard.',
        highlights: [
            'GPS Geofencing with configurable radii',
            'Real-time Firestore attendance sync',
            'Admin dashboard with exportable reports',
            'Role-based access control',
        ],
        type: 'mobile',
        gradient: 'from-orange-900/30 to-red-900/20',
        icon: '📍',
    },
    {
        id: 'marketing',
        title: 'Marketing App',
        tag: 'Field Force Management',
        stack: ['Flutter', 'Provider', 'Firebase Auth', 'REST API'],
        description:
            'A field force management application enabling real-time tracking of marketing representatives, task assignment, and performance analytics.',
        highlights: [
            'Live field rep location tracking',
            'Task assignment & completion flow',
            'Sales performance analytics',
            'Push notification pipeline',
        ],
        type: 'mobile',
        gradient: 'from-purple-900/30 to-indigo-900/20',
        icon: '📊',
    },
    {
        id: 'jewels',
        title: 'Royal Jewels',
        tag: 'E-Commerce App',
        stack: ['Flutter', 'BLoC', 'Firebase', 'Razorpay', 'Custom UI'],
        description:
            'A premium e-commerce application for a jewellery brand, featuring a rich product catalogue, custom animations, and smooth checkout experience.',
        highlights: [
            'Premium UI with custom jewellery animations',
            'BLoC architecture for scalable state',
            'Razorpay payment gateway integration',
            'Wishlist, cart, and order tracking',
        ],
        type: 'mobile',
        gradient: 'from-yellow-900/30 to-amber-900/20',
        icon: '💎',
    },
    {
        id: 'weather',
        title: 'Weather Forecast App',
        tag: 'Consumer App',
        stack: ['Flutter', 'Lottie', 'OpenWeather API', 'BLoC'],
        description:
            'A visually stunning weather application with dynamic Lottie animations that change based on current weather conditions and a 7-day forecast.',
        highlights: [
            'Dynamic Lottie weather animations',
            'OpenWeather API integration',
            '7-day hourly forecast',
            'Location-aware auto-detection',
        ],
        type: 'mobile',
        gradient: 'from-blue-900/30 to-cyan-900/20',
        icon: '🌤️',
    },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const [hovered, setHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`project-card glass rounded-2xl border border-white/5 overflow-hidden group cursor-pointer hover:border-accent/30 transition-all duration-400`}
        >
            {/* Header strip */}
            <div className={`relative h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <span className="text-5xl">{project.icon}</span>
                {/* Shimmer on hover */}
                {hovered && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '200%' }}
                        transition={{ duration: 0.7 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
                    />
                )}
                {/* Tag */}
                <span className="absolute top-4 right-4 mono text-xs text-accent/80 bg-black/40 px-2 py-1 rounded-md">
                    {project.tag}
                </span>
                {/* Platform icon */}
                <span className="absolute top-4 left-4 text-white/40">
                    {project.type === 'mobile' ? <Smartphone size={14} /> : <Globe size={14} />}
                </span>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-2" style={{ fontFamily: 'Lexend, sans-serif' }}>
                    {project.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-1 mb-5">
                    {project.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-white/40 text-xs">
                            <span className="text-accent">▸</span>
                            {h}
                        </li>
                    ))}
                </ul>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.map((s) => (
                        <span
                            key={s}
                            className="mono text-xs text-white/40 px-2 py-0.5 rounded-md glass border border-white/5"
                        >
                            {s}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button className="btn-primary px-4 py-2 rounded-lg text-xs flex items-center gap-1.5">
                        <ExternalLink size={12} />
                        Case Study
                    </button>
                    <button className="btn-outline px-4 py-2 rounded-lg text-xs flex items-center gap-1.5">
                        <Github size={12} />
                        Code
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default function Portfolio() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <section id="projects" className="relative py-24 lg:py-32" ref={ref}>
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(to right, transparent, rgba(255,95,31,0.3), transparent)' }}
            />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="mono text-accent text-xs tracking-widest uppercase mb-3">// portfolio.tsx</p>
                    <h2 className="section-title text-3xl sm:text-4xl text-white">
                        NOTABLE <span className="gradient-text">PROJECTS</span>
                    </h2>
                    <p className="text-white/40 mt-4 max-w-lg mx-auto text-sm">
                        Real-world applications delivered with clean architecture and pixel-perfect UI.
                    </p>
                </motion.div>

                {/* 2x2 Grid */}
                {isInView && (
                    <div className="grid sm:grid-cols-2 gap-6">
                        {projects.map((p, i) => (
                            <ProjectCard key={p.id} project={p} index={i} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
