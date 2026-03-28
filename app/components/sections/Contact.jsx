'use client'
import { Mail, Phone, Link, GitBranch, MapPin } from 'lucide-react'
import { ZoomSection, ZoomIn, FadeUp } from '../animations'
import SectionHeading from '../SectionHeading'

const contacts = [
  { label: 'Email', value: 'cpk9844@gmail.com', href: 'mailto:cpk9844@gmail.com', icon: Mail },
  { label: 'Phone', value: '+91 9844538521', href: 'tel:+919844538521', icon: Phone },
  { label: 'LinkedIn', value: 'linkedin.com/in/cpk', href: '#', icon: Link },
  { label: 'GitHub', value: 'github.com/cpk', href: '#', icon: GitBranch },
]

export default function Contact() {
  return (
    <ZoomSection id="contact" className="bg-black text-white px-6 md:px-12 lg:px-16 py-24 border-t border-gray-900">
      <SectionHeading label="Contact" title="Let's Work Together" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mb-16">
        {contacts.map((item, i) => (
          <ZoomIn key={i} delay={i * 0.08}>
            <a
              href={item.href}
              className="border border-gray-900 p-8 hover:border-gray-600 group transition-all duration-300 flex flex-col gap-4 h-full"
            >
              <item.icon size={18} className="transition-colors duration-300" style={{ color: 'var(--accent)', opacity: 0.6 }} />
              <div>
                <p className="text-[10px] tracking-[0.5em] uppercase mb-2" style={{ color: 'var(--accent)', opacity: 0.6 }}>{item.label}</p>
                <p className="text-sm text-gray-400 uppercase tracking-wider group-hover:text-white transition-colors duration-300 break-all">{item.value}</p>
              </div>
            </a>
          </ZoomIn>
        ))}
      </div>

      <FadeUp delay={0.2}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-t border-gray-900 pt-8 gap-4">
          <div className="flex items-center gap-2">
            <MapPin size={11} className="text-gray-700" />
            <p className="text-[10px] tracking-[0.4em] text-gray-700 uppercase">Hubballi, Karnataka · Available for Freelance</p>
          </div>
          <p className="text-[10px] tracking-[0.4em] text-gray-700 uppercase">© 2025 Chetan Prakash Kamble</p>
        </div>
      </FadeUp>
    </ZoomSection>
  )
}
