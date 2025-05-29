import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi';

export default function SocialDock() {
  const socialLinks = [
    {
      icon: <FiGithub className="w-6 h-6" />,
      url: 'https://github.com/hs-nahin',
      label: 'GitHub'
    },
    {
      icon: <FiLinkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/hs-nahin/',
      label: 'LinkedIn'
    },
    {
      icon: <FiTwitter className="w-6 h-6" />,
      url: 'https://x.com/hs_nahin',
      label: 'X (Twitter)'
    },
    {
      icon: <FiFacebook className="w-6 h-6" />,
      url: 'https://www.facebook.com/hs.nahin430/',
      label: 'Facebook'
    }
  ];

  return (
    <motion.div 
      className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-6 p-3 rounded-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm shadow-lg"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-300"
          aria-label={social.label}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}