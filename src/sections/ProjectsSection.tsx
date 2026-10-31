
import SectionHeading from '../components/common/SectionHeading'
import ProjectCard from '../components/common/ProjectCard'

import { projects } from '../data/projects'

function ProjectsSection() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  )

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="site-container section-spacing"
    >
      <SectionHeading
        eyebrow="04 / SELECTED WORK"
        title="Projects I've been working on."
        description="A selection of software projects, experiments, and engineering work."
      />

      <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
