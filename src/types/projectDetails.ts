export interface ProjectObjective {
  title: string
  description: string
}

export interface ProjectFeature {
  title: string
  description: string
}

export interface ArchitectureLayer {
  name: string
  responsibility: string
  technologies: string[]
}

export interface TechnicalDecision {
  decision: string
  reason: string
}

export interface TechnicalChallenge {
  challenge: string
  solution: string
}

export interface ProjectOutcome {
  title: string
  description: string
}

export interface ProjectImage {
  src: string
  alt: string
  caption?: string
}

export interface ProjectCaseStudy {
  projectId: string

  overview: string

  problem: string

  objectives: ProjectObjective[]

  keyFeatures: ProjectFeature[]

  architecture: {
    summary: string
    layers: ArchitectureLayer[]
  }

  technicalDecisions: TechnicalDecision[]

  technicalChallenges: TechnicalChallenge[]

  outcomes: ProjectOutcome[]

  learnings: string[]

  gallery?: ProjectImage[]
}