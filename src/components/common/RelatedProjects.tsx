import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

import { projects } from '../../data/projects'

interface RelatedProjectsProps {
  currentProjectId: string
}

function RelatedProjects({
  currentProjectId,
}: RelatedProjectsProps) {
  const relatedProjects = projects
    .filter((project) => project.id !== currentProjectId)
    .slice(0, 3)

  if (relatedProjects.length === 0) {
    return null
  }

  return (
    <section className="border-t border-border py-12 sm:py-16">
      <SectionHeading
        eyebrow="EXPLORE MORE"
        title="Related Projects"
        description="Explore other applications and projects in my development journey."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {relatedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

      <div className="mt-10">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-fast hover:gap-3"
        >
          View All Projects
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

export default RelatedProjects