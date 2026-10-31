import { experiences } from '../data/experience'

import SectionHeading from '../components/common/SectionHeading'
import ExperienceCard from '../components/common/ExperienceCard'

function ExperienceSection() {
  if (experiences.length === 0) {
    return null
  }

  return (
    <section
      id="experience"
      className="section-spacing"
    >
      <div className="site-container">

        <SectionHeading
          eyebrow="MY JOURNEY"
          title="Experience & Development Journey"
          description="An overview of my professional experience, responsibilities, and technical growth."
        />

        <div className="relative mx-auto mt-8 max-w-4xl">

          {/* Timeline connector */}
          <div className="absolute bottom-6 left-[7px] top-6 w-px bg-border" />

          <div className="space-y-6">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="relative pl-8"
              >
                {/* Timeline marker */}
                <span className="absolute left-0 top-7 size-4 rounded-full border-4 border-background bg-accent" />

                <ExperienceCard experience={experience} />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default ExperienceSection