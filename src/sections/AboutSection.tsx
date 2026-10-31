
import {
  Code2,
  GraduationCap,
  Lightbulb,
  Target,
} from 'lucide-react'

import profileImage from '../assets/images/profile.png'

const principles = [
  {
    icon: Code2,
    title: 'Clean Engineering',
    description:
      'I focus on writing clean, readable, and well-structured code that is easy to maintain and improve.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description:
      'I approach challenges by breaking them into smaller problems, analyzing possible solutions, and choosing practical ways to solve them.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description:
      'I continuously improve my skills through hands-on projects, learning new technologies, and exploring better ways to build software.',
  },
  {
    icon: Target,
    title: 'Purposeful Development',
    description:
      'I aim to build solutions that meet project requirements while balancing code quality, usability, and practical value.',
  },
]

function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="site-container section-spacing"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

        {/* Left: About content */}
        <div>
          <div className="section-heading">
            <p className="font-mono text-xs tracking-widest text-accent">
              02 / ABOUT ME
            </p>

            <h2
              id="about-title"
              className="font-display text-3xl font-bold tracking-tight sm:text-4xl"
            >
              A little about my journey.
            </h2>

            <p className="text-base leading-8 text-text-secondary">
              My journey in junior programmer began with an interest in understanding how applications work and how technology can solve real-world problems. Through continuous learning and hands-on projects, I have explored backend, full-stack, and mobile development, with a focus on Java, Spring Boot, React Native, and database technologies. My goal is to grow into a well-rounded software engineer and build reliable, practical applications that make a meaningful impact.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => {
              const Icon = principle.icon

              return (
                <article
                  key={principle.title}
                  className="rounded-large border border-border bg-surface p-5 transition-standard hover:border-accent"
                >
                  <div className="mb-4 inline-flex size-11 items-center justify-center rounded-medium bg-accent/10 text-accent">
                    <Icon size={21} aria-hidden="true" />
                  </div>

                  <h3 className="mb-2 font-display text-base font-semibold">
                    {principle.title}
                  </h3>

                  <p className="text-sm leading-7 text-text-secondary">
                    {principle.description}
                  </p>
                </article>
              )
            })}
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="mb-2 font-display text-lg font-semibold">
                My Development Journey
              </h3>

              <p className="leading-8 text-text-secondary">
                My journey began with curiosity about software development. Through self-learning and hands-on projects, I have explored Java, Spring Boot, React Native, and database technologies while continuously improving my problem-solving skills and working toward becoming a well-rounded software engineer.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-display text-lg font-semibold">
                What Drives Me
              </h3>

              <p className="leading-8 text-text-secondary">
                I am motivated by turning ideas into useful software, solving real-world problems, and continuously learning new technologies to create better solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Profile portrait */}
        <div className="relative mx-auto w-full max-w-md">

          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="absolute inset-x-6 bottom-4 top-12 rounded-full bg-accent/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 aspect-square w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30"
          />

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10"
          />

          {/* Portrait */}
          <img
            src={profileImage}
            alt="Portrait of the portfolio owner"
            className="relative z-10 mx-auto block h-auto w-full object-contain"
          />

          {/* Decorative label */}
          <div className="absolute bottom-8 left-0 z-20 rounded-large border border-border bg-surface/95 px-4 py-3 shadow-soft backdrop-blur-md">
            <p className="font-mono text-xs text-accent">
              DEVELOPER
            </p>
            <p className="mt-1 text-sm font-semibold">
              [SHEIN YU MIN MAUNG]
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection
