
import SectionHeading from '../components/common/SectionHeading'
import Card from '../components/common/Card'
import Badge from '../components/common/Badge'

import { skillCategories } from '../data/skills'

function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="site-container section-spacing"
    >
      <SectionHeading
        eyebrow="03 / TECHNICAL EXPERTISE"
        title="Technologies & tools I work with."
        description="A collection of technologies used across my development work and ongoing learning."
      />

      <div className="grid gap-5 mt-8 sm:grid-cols-2 lg:grid-cols-3">

        {skillCategories.map((category) => {
          const Icon = category.icon

          return (
            <Card
              key={category.id}
              padding="large"
              hoverable
            >
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-medium bg-accent/10 text-accent">
                <Icon size={23} aria-hidden="true" />
              </div>

              <h3
                className="font-display text-lg font-semibold"
                id={`skill-${category.id}`}
              >
                {category.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-text-secondary">
                {category.description}
              </p>

              <div
                className="mt-6 flex flex-wrap gap-2"
                aria-labelledby={`skill-${category.id}`}
              >
                {category.technologies.map((technology) => (
                  <Badge
                    key={technology}
                    variant="default"
                  >
                    {technology}
                  </Badge>
                ))}
              </div>
            </Card>
          )
        })}

      </div>
    </section>
  )
}

export default SkillsSection
