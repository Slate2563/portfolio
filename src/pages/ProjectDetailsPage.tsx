
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

import Badge from '../components/common/Badge'
import Button from '../components/common/Button'

import NotFoundPage from './NotFoundPage'

import { projects } from '../data/projects'
import { projectCaseStudies } from '../data/projectDetails'

import CaseStudySection from '../components/common/CaseStudySection'

import ObjectiveCard from '../components/common/ObjectiveCard'
import FeatureCard from '../components/common/FeatureCard'

import ArchitectureSection from '../components/common/ArchitectureSection'

import TechnicalDecisionCard from '../components/common/TechnicalDecisionCard'
import TechnicalChallengeCard from '../components/common/TechnicalChallengeCard'

import OutcomeCard from '../components/common/OutcomeCard'

import ProjectGallery from '../components/common/ProjectGallery'

import RelatedProjects from '../components/common/RelatedProjects'

function ProjectDetailsPage() {
  const { projectId } = useParams<{ projectId: string }>()

  const project = projects.find(
    (item) => item.id === projectId,
  )

  if (!project) {
    return <NotFoundPage />
  }

  const caseStudy = projectCaseStudies.find(
    (item) => item.projectId === projectId,
  )

  return (
    <section className="site-container section-spacing">

      {/* Back navigation */}
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 text-sm text-text-secondary transition-fast hover:text-accent"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to Projects
      </Link>

      {/* Project heading */}
      <div className="mt-8 max-w-4xl sm:mt-12">

        <p className="font-mono text-sm text-accent">
          {project.category}
        </p>

        <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-3xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Badge key={technology} variant="default">
              {technology}
            </Badge>
          ))}
        </div>

        {/* External project links */}
        {(project.demoUrl || project.sourceUrl) && (
          <div className="mt-8 flex flex-wrap gap-4">

            {project.demoUrl && (
            <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-medium bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-standard hover:opacity-90"
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
                <ArrowUpRight size={16} />
              </a>
            )}

          </div>
        )}
      </div>

      {/* Case study content */}
        {caseStudy ? (
        <div className="mt-10 sm:mt-12">

            <p className="mb-2 font-mono text-xs tracking-wider text-accent">
            PROJECT CASE STUDY
            </p>

            <CaseStudySection
            eyebrow="01 — PROJECT OVERVIEW"
            title="About the Project"
            >
            {caseStudy.overview}
            </CaseStudySection>

            <CaseStudySection
            eyebrow="02 — PROBLEM STATEMENT"
            title="The Problem"
            >
            {caseStudy.problem}
            </CaseStudySection>

            <CaseStudySection
            eyebrow="03 — PROJECT OBJECTIVES"
            title="What We Aim to Achieve"
            >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {caseStudy.objectives.map((objective, index) => (
                <ObjectiveCard
                    key={objective.title}
                    number={index + 1}
                    title={objective.title}
                    description={objective.description}
                />
                ))}
            </div>
            </CaseStudySection>

            <CaseStudySection
            eyebrow="04 — KEY FEATURES"
            title="Core Application Features"
            >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {caseStudy.keyFeatures.map((feature) => (
                <FeatureCard
                    key={feature.title}
                    title={feature.title}
                    description={feature.description}
                />
                ))}
            </div>
            </CaseStudySection>

            <ArchitectureSection
            architecture={caseStudy.architecture}
            />

            <CaseStudySection
            eyebrow="06 — ENGINEERING DECISIONS"
            title="Why These Technologies and Approaches?"
            >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {caseStudy.technicalDecisions.map((item, index) => (
                <TechnicalDecisionCard
                    key={item.decision}
                    decision={item.decision}
                    reason={item.reason}
                    index={index}
                />
                ))}
            </div>
            </CaseStudySection>

            <CaseStudySection
            eyebrow="07 — TECHNICAL CHALLENGES"
            title="Engineering Challenges & Solutions"
            >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {caseStudy.technicalChallenges.map((item, index) => (
                <TechnicalChallengeCard
                    key={item.challenge}
                    challenge={item.challenge}
                    solution={item.solution}
                    index={index}
                />
                ))}
            </div>
            </CaseStudySection>

            {/* Project Outcomes */}
            <CaseStudySection
            eyebrow="08 — PROJECT OUTCOMES"
            title="What Has Been Achieved"
            >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {caseStudy.outcomes.map((outcome, index) => (
                <OutcomeCard
                    key={outcome.title}
                    number={index + 1}
                    title={outcome.title}
                    description={outcome.description}
                />
                ))}
            </div>
            </CaseStudySection>

            {/* Engineering Learnings */}
            <CaseStudySection
            eyebrow="09 — ENGINEERING LEARNINGS"
            title="Knowledge Gained Through Development"
            >
            <ul className="space-y-4">
                {caseStudy.learnings.map((learning, index) => (
                <li
                    key={learning}
                    className="flex items-start gap-4 rounded-large border border-border bg-surface p-5"
                >
                    <span className="font-mono text-sm text-accent">
                    {String(index + 1).padStart(2, '0')}
                    </span>

                    <p className="text-sm leading-7 text-text-secondary">
                    {learning}
                    </p>
                </li>
                ))}
            </ul>
            </CaseStudySection>

            <ProjectGallery images={caseStudy.gallery ?? []} />

            <RelatedProjects currentProjectId={project.id} />

        </div>
        ) : (
        <div className="mt-16 border-t border-border py-12">
            <h2 className="font-display text-2xl font-semibold">
            Case Study Coming Soon
            </h2>

            <p className="mt-4 text-text-secondary">
            Detailed documentation for this project is currently being prepared.
            </p>
        </div>
        )}

    </section>
  )
}

export default ProjectDetailsPage
