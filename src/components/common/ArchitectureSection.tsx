import ArchitectureLayerCard from './ArchitectureLayerCard'

import type {
  ProjectCaseStudy,
} from '../../types/projectDetails'

interface ArchitectureSectionProps {
  architecture: ProjectCaseStudy['architecture']
}

function ArchitectureSection({
  architecture,
}: ArchitectureSectionProps) {
  return (
    <section className="border-t border-border py-12 sm:py-16">

      <p className="font-mono text-xs tracking-wider text-accent">
        05 — SYSTEM ARCHITECTURE
      </p>

      <h2 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
        Architecture & Technology
      </h2>

      <p className="mt-6 max-w-3xl text-base leading-8 text-text-secondary">
        {architecture.summary}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {architecture.layers.map((layer, index) => (
          <ArchitectureLayerCard
            key={layer.name}
            layer={layer}
            index={index}
          />
        ))}

      </div>

    </section>
  )
}

export default ArchitectureSection