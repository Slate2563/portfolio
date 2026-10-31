
import { ArrowUpRight, GitBranch, FolderCode } from 'lucide-react'

import Card from './Card'
import Badge from './Badge'

import type { Project } from '../../data/projects'

import { Link } from 'react-router-dom'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card padding="medium" hoverable>

      {/* Project preview */}
      <div className="relative mb-5 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-medium border border-border bg-surface-secondary">

        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover"
          />
        ) : (
          <FolderCode
            size={48}
            strokeWidth={1.2}
            className="text-accent"
            aria-hidden="true"
          />
        )}

        <span className="absolute right-3 top-3 rounded-full border border-border bg-background/90 px-3 py-1 font-mono text-xs text-text-secondary">
          {project.status}
        </span>
      </div>

      {/* Project information */}
      <div className="flex flex-col gap-3">

        <p className="font-mono text-xs text-accent">
          {project.category}
        </p>

        <h3 className="font-display text-xl font-semibold">
          {project.title}
        </h3>

        <p className="text-sm leading-7 text-text-secondary">
          {project.description}
        </p>

        {/* Technology labels */}
        <div className="mt-2 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Badge key={technology} variant="default">
              {technology}
            </Badge>
          ))}
        </div>

        <Link
            to={`/projects/${project.id}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-fast hover:gap-3"
            >
            View Case Study
            <ArrowUpRight size={16} />
            </Link>

        {/* Project links */}
        {(project.demoUrl || project.sourceUrl) && (
          <div className="mt-4 flex flex-wrap gap-4 border-t border-border pt-4">

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Live Demo
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}

            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent"
              >
                Source Code
                <GitBranch size={16} aria-hidden="true" />
              </a>
            )}

          </div>
        )}

      </div>
    </Card>
  )
}

export default ProjectCard
