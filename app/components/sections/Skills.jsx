'use client'
import { Code2, Globe, Database, Wrench, BookOpen, Heart } from 'lucide-react'
import { ZoomSection, ZoomIn } from '../animations'
import SectionHeading from '../SectionHeading'

const skills = [
  { cat: 'Languages', icon: Code2, items: 'Python · JavaScript · C' },
  { cat: 'Frontend', icon: Globe, items: 'React.js · Next.js · HTML · CSS · Tailwind CSS' },
  { cat: 'Backend', icon: Database, items: 'Django · Flask · Node.js · Express.js' },
  { cat: 'Databases', icon: Database, items: 'SQL · MongoDB · SQLite' },
  { cat: 'Tools', icon: Wrench, items: 'Git · GCP · AWS · Postman · VS Code' },
  { cat: 'CS Fundamentals', icon: BookOpen, items: 'OOP · DBMS · DSA · OS · REST API · Cloud' },
  { cat: 'Soft Skills', icon: Heart, items: 'Problem-Solving · Communication · Teamwork · Adaptability' },
]

export default function Skills() {
  return (
    <ZoomSection id="skills" className="bg-black text-white px-6 md:px-12 lg:px-16 py-24 border-t border-gray-900">
      <SectionHeading label="Skills" title="What I Know" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {skills.map(({ cat, icon: Icon, items }, i) => (
          <ZoomIn key={cat} delay={i * 0.07}>
            <div className="border border-gray-900 p-8 hover:border-gray-600 transition-all duration-300 group h-full">
              <div className="flex items-center gap-3 mb-4">
                <Icon size={16} className="transition-colors duration-300" style={{ color: 'var(--accent)', opacity: 0.5 }} />
                <p className="text-[9px] tracking-[0.5em] uppercase transition-colors duration-300" style={{ color: 'var(--accent)', opacity: 0.5 }}>{cat}</p>
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-wider leading-relaxed group-hover:text-white transition-colors duration-300">{items}</p>
            </div>
          </ZoomIn>
        ))}
      </div>
    </ZoomSection>
  )
}
