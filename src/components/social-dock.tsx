'use client'

import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'

const socialLinks = [
  {
    icon: FaGithub,
    url: 'https://github.com/hs-nahin',
    label: 'GitHub'
  },
  {
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/hs-nahin/',
    label: 'LinkedIn'
  },
  {
    icon: FaTwitter,
    url: 'https://x.com/hs_nahin',
    label: 'Twitter'
  },
  {
    icon: FaFacebook,
    url: 'https://www.facebook.com/hs.nahin430/',
    label: 'Facebook'
  }
]

export default function SocialDock() {
  return (
    <div className="fixed left-8 top-[40vh] flex flex-col gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={social.label}
        >
          <social.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  )
}