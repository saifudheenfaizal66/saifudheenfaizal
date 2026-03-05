import { motion, useInView } from 'framer-motion'
import { useRef, useState, FormEvent } from 'react'
import { Mail, Phone, Instagram, Linkedin, Send, MessageCircle } from 'lucide-react'

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'saifudheenfaisal54@gmail.com',
        href: 'mailto:saifudheenfaisal54@gmail.com',
    },
    {
        icon: Phone,
        label: 'Phone / WhatsApp',
        value: '+91 9562896069',
        href: 'https://wa.me/919562896069',
    },
    {
        icon: Instagram,
        label: 'Instagram',
        value: '@_sai_fu_',
        href: 'https://instagram.com/_sai_fu_',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'Saifudheen Faizal',
        href: 'https://linkedin.com',
    },
]

export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setSending(true)
        setTimeout(() => {
            setSending(false)
            setSent(true)
        }, 1500)
    }

    return (
        <section id="contact" className="relative py-24 lg:py-32" ref={ref}>
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(to right, transparent, rgba(255,95,31,0.3), transparent)' }}
            />

            {/* Bottom orange glow */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at bottom, rgba(255,95,31,0.12) 0%, transparent 70%)',
                }}
            />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="mono text-accent text-xs tracking-widest uppercase mb-3">// connect.sh</p>
                    <h2 className="section-title text-3xl sm:text-4xl text-white">
                        LET'S <span className="gradient-text">CONNECT</span>
                    </h2>
                    <p className="text-white/40 mt-4 max-w-lg mx-auto text-sm">
                        Have a project in mind? I'd love to hear about it. Send me a message and let's build something great together.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-4"
                    >
                        {contactInfo.map((info, i) => (
                            <motion.a
                                key={info.label}
                                href={info.href}
                                target={info.href.startsWith('http') ? '_blank' : undefined}
                                rel="noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                                className="flex items-center gap-4 glass rounded-2xl p-5 border border-white/5 hover:border-accent/30 hover:shadow-orange-sm transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl glass neon-border flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                                    <info.icon size={20} className="text-accent" />
                                </div>
                                <div>
                                    <p className="mono text-white/40 text-xs mb-0.5">{info.label}</p>
                                    <p className="text-white font-medium text-sm">{info.value}</p>
                                </div>
                                <div className="ml-auto text-white/20 group-hover:text-accent transition-colors">
                                    →
                                </div>
                            </motion.a>
                        ))}

                        {/* WhatsApp CTA */}
                        <motion.a
                            href="https://wa.me/919562896069"
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex items-center justify-center gap-3 btn-primary w-full py-4 rounded-2xl text-sm font-semibold mt-4"
                        >
                            <MessageCircle size={18} />
                            Chat on WhatsApp
                        </motion.a>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass rounded-2xl p-8 border border-white/5"
                    >
                        {sent ? (
                            <div className="text-center py-12">
                                <div className="text-5xl mb-4">✅</div>
                                <h3 className="text-white font-semibold text-lg mb-2">Message Sent!</h3>
                                <p className="text-white/40 text-sm">
                                    Thanks for reaching out. I'll get back to you shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="mono text-xs text-white/40 tracking-widest uppercase block mb-2">
                                            Name
                                        </label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            required
                                            placeholder="Your name"
                                            className="form-input w-full px-4 py-3 rounded-xl text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="mono text-xs text-white/40 tracking-widest uppercase block mb-2">
                                            Email
                                        </label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            required
                                            placeholder="your@email.com"
                                            className="form-input w-full px-4 py-3 rounded-xl text-sm"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="mono text-xs text-white/40 tracking-widest uppercase block mb-2">
                                        Subject
                                    </label>
                                    <input
                                        id="contact-subject"
                                        type="text"
                                        required
                                        placeholder="Project inquiry..."
                                        className="form-input w-full px-4 py-3 rounded-xl text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="mono text-xs text-white/40 tracking-widest uppercase block mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        required
                                        rows={5}
                                        placeholder="Tell me about your project..."
                                        className="form-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    id="contact-submit"
                                    disabled={sending}
                                    className="btn-primary w-full py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
                                >
                                    {sending ? (
                                        <>
                                            <span className="animate-spin inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="mono text-white/20 text-xs">
                        © 2025 Saifudheen Faizal. Built with React & Three.js
                    </p>
                    <p className="mono text-white/20 text-xs">
                        saifudheenfaisal54@gmail.com · +91 9562896069
                    </p>
                </div>
            </div>
        </section>
    )
}
