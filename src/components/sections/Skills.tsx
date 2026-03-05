import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Skill {
    name: string
    level: number
    badge?: string
}

interface SkillCategory {
    category: string
    color: string
    skills: Skill[]
}

const skillData: SkillCategory[] = [
    {
        category: 'Core Stack',
        color: '#FF5F1F',
        skills: [
            { name: 'Flutter', level: 90 },
            { name: 'Dart', level: 88 },
            { name: 'React', level: 80 },
            { name: 'TypeScript', level: 75 },
        ],
    },
    {
        category: 'State Management',
        color: '#FF7A40',
        skills: [
            { name: 'BLoC Pattern', level: 85 },
            { name: 'Provider', level: 80 },
            { name: 'Riverpod', level: 70 },
        ],
    },
    {
        category: 'Backend & Cloud',
        color: '#FF9A5C',
        skills: [
            { name: 'Firebase Firestore', level: 85 },
            { name: 'Cloud Functions', level: 75 },
            { name: 'Firebase Auth', level: 88 },
            { name: 'REST APIs', level: 78 },
        ],
    },
    {
        category: 'AI Workflow & Tools',
        color: '#FF5F1F',
        skills: [
            { name: 'Cursor AI', level: 88, badge: 'Modern Workflow' },
            { name: 'Anti-Gravity AI', level: 85, badge: 'Modern Workflow' },
            { name: 'Git & GitHub', level: 80 },
            { name: 'Figma / UI/UX', level: 78 },
        ],
    },
]

function SkillBar({ skill, animate }: { skill: Skill; animate: boolean }) {
    return (
        <div className="mb-5">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                    <span className="text-white/80 text-sm font-medium" style={{ fontFamily: 'Lexend, sans-serif' }}>
                        {skill.name}
                    </span>
                    {skill.badge && (
                        <span className="mono text-xs px-2 py-0.5 rounded-full neon-border text-accent">
                            {skill.badge}
                        </span>
                    )}
                </div>
                <span className="mono text-accent text-xs">{skill.level}%</span>
            </div>
            {/* Shimmer progress track */}
            <div className="skill-bar">
                <motion.div
                    className="skill-bar-fill relative overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: animate ? `${skill.level}%` : 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                >
                    {/* Shimmer overlay on the fill */}
                    <div
                        className="absolute inset-0 shimmer"
                        style={{ opacity: 0.5 }}
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default function Skills() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="skills" className="relative py-24 lg:py-32" ref={ref}>
            {/* Section divider glow */}
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
                    <p className="mono text-accent text-xs tracking-widest uppercase mb-3">// tech_stack.json</p>
                    <h2 className="section-title text-3xl sm:text-4xl text-white">
                        THE <span className="gradient-text">STACK</span>
                    </h2>
                    <p className="text-white/40 mt-4 max-w-lg mx-auto text-sm">
                        A curated toolkit for building production-grade mobile and web applications.
                    </p>
                </motion.div>

                {/* Skill categories grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {skillData.map((cat, ci) => (
                        <motion.div
                            key={cat.category}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: ci * 0.1 }}
                            className="glass rounded-2xl p-6 border border-white/5 hover:border-accent/20 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Category corner accent */}
                            <div
                                className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10"
                                style={{ background: `radial-gradient(circle at top right, ${cat.color}, transparent)` }}
                            />
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className="w-1 h-6 rounded-full"
                                    style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}60` }}
                                />
                                <h3
                                    className="section-title text-xs text-white tracking-widest"
                                    style={{ letterSpacing: '0.12em' }}
                                >
                                    {cat.category.toUpperCase()}
                                </h3>
                            </div>
                            {cat.skills.map((s) => (
                                <SkillBar key={s.name} skill={s} animate={isInView} />
                            ))}
                        </motion.div>
                    ))}
                </div>

                {/* Additional tag cloud */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-10 flex flex-wrap justify-center gap-3"
                >
                    {[
                        'Geofencing', 'Lottie Animations', 'REST APIs', 'Google Maps SDK',
                        'Clean Architecture', 'Agile / Scrum', 'UI/UX Design', 'SQLite',
                        'Postman', 'VS Code', 'Android Studio',
                    ].map((tag) => (
                        <span
                            key={tag}
                            className="mono text-xs text-white/40 px-3 py-1.5 rounded-full glass border border-white/5 hover:border-accent/30 hover:text-accent transition-all duration-300 cursor-default"
                        >
                            {tag}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
