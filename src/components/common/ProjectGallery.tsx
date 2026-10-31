import type { ProjectImage } from '../../types/projectDetails'

interface ProjectGalleryProps {
  images: ProjectImage[]
}

function ProjectGallery({ images }: ProjectGalleryProps) {
  if (images.length === 0) {
    return null
  }

  return (
    <section
      id="gallery"
      className="border-t border-border py-8 sm:py-10 lg:py-12"
    >
      <p className="font-mono text-xs tracking-wider text-accent">
        10 — PROJECT GALLERY
      </p>

      <h2 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
        Screenshots & Visuals
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2">
        {images.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-large border border-border bg-surface"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              width="1280"
              height="720"
              className="aspect-video w-full object-cover"
            />

            {image.caption && (
              <figcaption className="border-t border-border px-5 py-4 text-sm text-text-secondary">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  )
}

export default ProjectGallery