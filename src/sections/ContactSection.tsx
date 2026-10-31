import { Mail, MapPin, Link as LinkIcon } from 'lucide-react'

import { contactInfo } from '../data/contact'

import type { ContactLink } from '../types/contact'

import contactPortrait from '../assets/images/contact-portrait.png'

const contactIcons = {
  email: Mail,
  location: MapPin,
  github: LinkIcon,
  linkedin: LinkIcon,
}

function ContactLinkItem({ link }: { link: ContactLink }) {
  const Icon = contactIcons[link.icon]

  const content = (
    <>
      <span className="flex size-11 shrink-0 items-center justify-center rounded-medium border border-white/10 bg-white/5 text-accent">
        <Icon size={19} aria-hidden="true" />
      </span>

      <span className="min-w-0">
        <span className="block text-xs text-white/50">
          {link.label}
        </span>

        <span className="mt-1 block break-all text-sm font-medium text-white">
          {link.value}
        </span>
      </span>
    </>
  )

  if (link.href) {
    return (
      <a
        href={link.href}
        target={link.href.startsWith('mailto:') ? undefined : '_blank'}
        rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
        className="flex items-center gap-4 rounded-medium p-3 transition-standard hover:bg-white/5"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="flex items-center gap-4 rounded-medium p-3">
      {content}
    </div>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="section-spacing">
      <div className="site-container">

        <div className="contact-studio rounded-large border border-white/10">

          <div className="relative grid min-h-[600px] grid-cols-1 items-center gap-8 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4 lg:px-12">

            {/* Contact information */}
            <div className="relative z-10">

              <p className="font-mono text-xs tracking-widest text-accent">
                GET IN TOUCH
              </p>

              <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                {contactInfo.title}
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                {contactInfo.description}
              </p>

              <div className="mt-8 space-y-2">
                {contactInfo.links.map((link) => (
                  <ContactLinkItem key={link.id} link={link} />
                ))}
              </div>

            </div>

            {/* Portrait */}
            <div className="relative flex min-h-[440px] items-end justify-center sm:min-h-[520px] lg:min-h-[600px]">

              <div className="contact-portrait-glow" />

              <img
                src={contactPortrait}
                alt="Portrait"
                loading="lazy"
                className="relative z-10 max-h-[440px] w-full object-contain object-bottom sm:max-h-[520px] lg:max-h-[600px]"
                />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default ContactSection