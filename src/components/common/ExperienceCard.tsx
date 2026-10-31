import { BriefcaseBusiness, CalendarDays, MapPin } from 'lucide-react'

import Badge from './Badge'
import type { Experience } from '../../types/experience'

interface ExperienceCardProps {
  experience: Experience
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="relative rounded-large border border-border bg-surface p-5 transition-standard hover-lift sm:p-6">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

        <div className="flex items-start gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-medium bg-elevated text-accent">
            <BriefcaseBusiness size={20} aria-hidden="true" />
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">
              {experience.position}
            </h3>

            <p className="mt-1 text-sm text-text-secondary">
              {experience.company}
            </p>

            {experience.employmentType && (
              <p className="mt-1 text-xs text-text-muted">
                {experience.employmentType}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 text-xs text-text-muted sm:items-end">

          <span className="inline-flex items-center gap-2">
            <CalendarDays size={14} aria-hidden="true" />
            {experience.startDate} — {experience.endDate}
          </span>

          {experience.location && (
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} aria-hidden="true" />
              {experience.location}
            </span>
          )}

        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-text-secondary">
        {experience.description}
      </p>

      {experience.responsibilities.length > 0 && (
        <ul className="mt-4 space-y-2">
          {experience.responsibilities.map((responsibility, index) => (
            <li
              key={`${experience.id}-${index}`}
              className="flex items-start gap-3 text-sm leading-7 text-text-secondary"
            >
              <span className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      )}

      {experience.technologies && experience.technologies.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <Badge key={technology} variant="default">
              {technology}
            </Badge>
          ))}
        </div>
      )}

    </article>
  )
}

export default ExperienceCard