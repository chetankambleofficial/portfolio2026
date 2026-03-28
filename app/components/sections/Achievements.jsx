'use client'
import { GraduationCap, Trophy, Award, Zap } from 'lucide-react'
import { ZoomSection, ZoomIn, SlideLeft } from '../animations'
import SectionHeading from '../SectionHeading'

const achievements = [
  { title: 'Career Essentials in Generative AI', org: 'Microsoft', year: '2025', icon: Zap },
  { title: 'SQL Advanced Certification', org: 'HackerRank', year: '2024', icon: Award },
  { title: 'Hackathon — SKV College', org: 'National Level', year: '2024', icon: Trophy },
  { title: 'Hackathon — Sristi', org: 'National Level', year: '2024', icon: Trophy },
  { title: 'Hackathon — Shridevi', org: 'National Level', year: '2024', icon: Trophy },
  { title: 'Hackathon — KLE IT', org: 'National Level', year: '2024', icon: Trophy },
]

const education = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science',
    institute: 'AGMR College Of Engineering & Technology, Varur',
    period: '2022 – 2025',
    score: 'CGPA: 8.4',
  },
  {
    degree: 'Diploma',
    field: 'Computer Science',
    institute: 'K.L.E Smt. C.I.M Polytechnic, Hubballi',
    period: '2019 – 2022',
    score: '76.6%',
  },
]

export default function Achievements() {
  return (
    <ZoomSection id="achievements" className="bg-black text-white px-6 md:px-12 lg:px-16 py-24 border-t border-gray-900">

      {/* Education */}
      <SectionHeading label="Education" title="Academic Background" />

      <div className="flex flex-col mb-24">
        {education.map((edu, i) => (
          <SlideLeft key={i} delay={i * 0.1}>
            <div className="border-t border-gray-900 py-8 grid grid-cols-1 md:grid-cols-3 gap-4 hover:border-gray-700 transition-colors duration-300 group">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap size={14} className="transition-colors duration-300" style={{ color: 'var(--accent)', opacity: 0.6 }} />
                  <p className="text-[10px] tracking-[0.4em] uppercase" style={{ color: 'var(--accent)', opacity: 0.6 }}>{edu.period}</p>
                </div>
                <h3 className="text-xl font-black uppercase text-white">{edu.degree}</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest">{edu.field}</p>
              </div>
              <p className="text-sm text-gray-400 md:col-span-1 self-center">{edu.institute}</p>
              <p className="text-2xl font-black self-center md:text-right transition-colors duration-300 group-hover:opacity-100" style={{ color: 'var(--accent)', opacity: 0.4 }}>{edu.score}</p>
            </div>
          </SlideLeft>
        ))}
        <div className="border-t border-gray-900" />
      </div>

      {/* Achievements */}
      <SectionHeading label="Achievements" title="Recognition" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {achievements.map((a, i) => (
          <ZoomIn key={i} delay={i * 0.07}>
            <div className="border border-gray-900 p-8 hover:border-gray-600 transition-all duration-300 group h-full">
              <div className="flex items-center gap-2 mb-4">
                <a.icon size={14} className="transition-colors duration-300" style={{ color: 'var(--accent)', opacity: 0.6 }} />
                <p className="text-[10px] tracking-[0.4em] uppercase" style={{ color: 'var(--accent)', opacity: 0.5 }}>{a.year} · {a.org}</p>
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors duration-300">{a.title}</p>
            </div>
          </ZoomIn>
        ))}
      </div>
    </ZoomSection>
  )
}
