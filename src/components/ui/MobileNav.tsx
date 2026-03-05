import { Home, User, Code2, Briefcase, Mail } from 'lucide-react'

const navItems = [
    { label: 'Home', icon: Home, href: '#home' },
    { label: 'About', icon: User, href: '#about' },
    { label: 'Skills', icon: Code2, href: '#skills' },
    { label: 'Projects', icon: Briefcase, href: '#projects' },
    { label: 'Contact', icon: Mail, href: '#contact' },
]

export default function MobileNav({ active }: { active: string }) {
    const handleNav = (href: string) => {
        const el = document.querySelector(href)
        el?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className="mobile-nav md:hidden">
            <div className="flex justify-around items-center px-2">
                {navItems.map((item) => {
                    const isActive = active === item.label
                    return (
                        <button
                            key={item.label}
                            onClick={() => handleNav(item.href)}
                            className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all duration-300 ${isActive ? 'text-accent' : 'text-white/40'
                                }`}
                            aria-label={item.label}
                        >
                            <item.icon
                                size={20}
                                strokeWidth={isActive ? 2.5 : 1.5}
                                style={isActive ? { filter: 'drop-shadow(0 0 6px rgba(255,95,31,0.6))' } : undefined}
                            />
                            <span
                                className="mono text-xs"
                                style={{ fontSize: '9px', letterSpacing: '0.08em' }}
                            >
                                {item.label.toUpperCase()}
                            </span>
                            {isActive && (
                                <span
                                    className="absolute -bottom-0 w-1 h-1 rounded-full bg-accent"
                                    style={{ boxShadow: '0 0 6px rgba(255,95,31,0.8)' }}
                                />
                            )}
                        </button>
                    )
                })}
            </div>
        </nav>
    )
}
