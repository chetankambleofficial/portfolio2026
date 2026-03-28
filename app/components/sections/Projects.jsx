'use client'
import { ExternalLink, Layers, ArrowRight } from 'lucide-react'
import { ZoomSection, SlideLeft, SlideRight } from '../animations'
import SectionHeading from '../SectionHeading'

const projects = [
  {
    name: 'Port Connect',
    sub: 'Maritime Compliance Platform — BSOL Systems',
    stack: 'React.js · JavaScript · Tailwind CSS · Node.js · Express.js · REST APIs',
    points: [
      'Developed 20+ production screens: Inspections, Audits, Dashboard, Certificates, Findings, Scheduling Calendar, Vessel Management.',
      'Implemented dynamic tables, filters, multi-step forms, and UI workflows.',
      'Integrated backend endpoints for scheduling, inspection workflows, and certificates.',
      'Optimized API performance and UI consistency across modules.',
    ],
  },
  {
    name: 'INSW Fleet Management',
    sub: 'Fleet Accounting & General Ledger System',
    stack: 'React.js · JavaScript · Material UI · REST APIs',
    points: [
      'Developed a React-based fleet accounting and General Ledger workflow with multi-stage validation.',
      'Implemented dynamic tables, Excel upload/download, date-based controls, and controlled posting workflows.',
    ],
  },
  {
    name: 'Suraksha',
    sub: 'AI Healthcare System',
    stack: 'Flask · Scikit-learn · React.js · Node.js · GCP · SQL · Gemini API',
    points: [
      'Developed an ML model achieving 85% accuracy across 10+ diseases.',
      'Built an AI chatbot using Gemini API for patient assistance.',
      'Deployed doctor appointment modules on Google Cloud.',
    ],
  },
]

export default function Projects() {
  return (
    <ZoomSection id="projects" className="bg-black text-white px-6 md:px-12 lg:px-16 py-24 border-t border-gray-900">
      <SectionHeading label="Projects" title="Selected Work" />

      <div className="flex flex-col gap-0">
        {projects.map((proj, i) => (
          <div key={i} className="border-t border-gray-900 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6 group hover:border-gray-700 transition-colors duration-300">
            <SlideLeft delay={i * 0.1}>
              <div className="flex items-center gap-2 mb-2">
                <Layers size={12} style={{ color: 'var(--accent)' }} className="opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: 'var(--accent)' }}>0{i + 1}</span>
              </div>
              <h3 className="text-2xl font-black uppercase text-white mt-2 leading-tight group-hover:text-gray-200 transition-colors duration-300">{proj.name}</h3>
              <p className="text-xs text-gray-600 uppercase tracking-wider mt-1">{proj.sub}</p>
              <div className="flex items-center gap-1 mt-4 transition-all duration-300 opacity-40 group-hover:opacity-100" style={{ color: 'var(--accent)' }}>
                <ExternalLink size={11} />
                <span className="text-[9px] tracking-widest uppercase">View Project</span>
              </div>
            </SlideLeft>
            <SlideRight delay={i * 0.1 + 0.1} className="lg:col-span-2">
              <p className="text-[10px] tracking-[0.4em] text-gray-600 uppercase mb-4">{proj.stack}</p>
              <ul className="flex flex-col gap-2">
                {proj.points.map((pt, j) => (
                  <li key={j} className="flex gap-3 text-sm text-gray-400 leading-relaxed hover:text-gray-200 transition-colors duration-200">
                    <ArrowRight size={12} className="mt-1 shrink-0" style={{ color: 'var(--accent)', opacity: 0.5 }} />
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
