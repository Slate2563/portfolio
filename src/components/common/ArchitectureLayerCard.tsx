import Badge from './Badge'

import type {
  ArchitectureLayer,
} from '../../types/projectDetails'

interface ArchitectureLayerCardProps {
  layer: ArchitectureLayer
  index: number
}

function ArchitectureLayerCard({
  layer,
  index,
}: ArchitectureLayerCardProps) {
  return (
    <article className="rounded-large border border-border bg-surface p-6 transition-standard hover-lift">

      <span className="font-mono text-xs text-accent">
        LAYER {String(index + 1).padStart(2, '0')}
      </span>

      <h3 className="mt-4 font-display text-lg font-semibold">
        {layer.name}
      </h3>

      <p className="mt-3 text-sm leading-7 text-text-secondary">
        {layer.responsibility}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {layer.technologies.map((technology) => (
          <Badge
            key={technology}
            variant="default"
          >
            {technology}
          </Badge>
        ))}
      </div>

    </article>
  )
}

export default ArchitectureLayerCard