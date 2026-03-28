'use client'
import { Briefcase, Calendar, ArrowRight } from 'lucide-react'
import { ZoomSection, SlideLeft, SlideRight } from '../animations'
import SectionHeading from '../SectionHeading'

const experience = [
  {
    role: 'Frontend Developer Intern',
    company: 'BSOL Systems',
    period: 'Sep 2025 – Present',
    stack: 'React.js · JavaScript · Tailwind CSS · REST APIs · Node.js · Git',
    points: [
      'Developed and optimized UI components for Port Connect, an enterprise maritime compliance platform.',
      'Built major modules: Dashboard, Company List, Vessel Overview, Inspections, Audits, Certificates, Findings, Scheduling Calendar, User Management.',
      'Integrated REST APIs using Axios and improved frontend-to-backend data efficiency.',
      'Contributed to backend development for inspection workflows, scheduling, certificate management, and analytics.',
      'Improved BSOL Systems website UI/UX using React and Tailwind CSS.',
    ],
  },
  {
    role: 'Python Full Stack',
    company: 'Pentagon Space, Bengaluru',
    period: 'Mar 2025 – Sep 2025',
    stack: 'Core Python · Django · REST API · SQL · NumPy · Pandas · React.js · GIT · GCP',
    points: [
      'Optimized SQL queries, improving database performance by 30%.',
      'Integrated Python data workflows (NumPy, Pandas) into Django backend services.',
    ],
  },
]

export default function Experience() {
  return (
    <ZoomSection id="experience" className="bg-black text-white px-6 md:px-12 lg:px-16 py-24 border-t border-gray-900">
      <SectionHeading label="Experience" title="Work History" />

      <div className="flex flex-col gap-0">
        {experience.map((exp, i) => (
          <div key={i} className="border-t border-gray-900 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6 group hover:border-gray-700 transition-colors duration-300">
            <SlideLeft delay={i * 0.1}>
              <div className="flex items-center gap-2 mb-3">
                <Briefcase size={12} style={{ color: 'var(--accent)' }} className="opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="text-[10px] tracking-[0.4em] uppercase transition-colors duration-300" style={{ color: 'var(--accent)', opacity: 0.6 }}>{exp.period}</p>
              </div>
              <h3 className="text-xl font-black uppercase text-white leading-tight group-hover:text-white transition-colors duration-300">{exp.role}</h3>
              <p className="text-sm uppercase tracking-widest mt-1 transition-colors duration-300" style={{ color: 'var(--accent)', opacity: 0.55 }}>{exp.company}</p>
            </SlideLeft>
            <SlideRight delay={i * 0.1 + 0.1} className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={10} className="text-gray-700" />
                <p className="text-[10px] tracking-[0.4em] text-gray-600 uppercase">{exp.stack}</p>
              </div>
              <ul className="flex flex-col gap-2">
                {exp.points.map((pt, j) => (
                  <li key={j} className="flex gap-3 text-sm text-gray-400 leading-relaxed group/item hover:text-gray-200 transition-colors duration-200">
                    <ArrowRight size={12} className="mt-1 shrink-0 transition-colors duration-300 group-hover:opacity-100" style={{ color: 'var(--accent)', opacity: 0.5 }} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </SlideRight>
          </div>
        ))}
        <div className="border-t border-gray-900" />
      </div>
    </ZoomSection>
  )
}
