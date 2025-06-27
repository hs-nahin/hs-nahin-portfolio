"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Icon } from '@iconify/react'

export function SkillsContent() {
  const skillCategories = [
    {
      title: 'Frontend',
      subcategories: [
        {
          title: 'Markup & Styling',
          skills: [
            { name: 'HTML5', icon: 'vscode-icons:file-type-html', color: '#E34F26' },
            { name: 'CSS3', icon: 'vscode-icons:file-type-css', color: '#1572B6' },
            { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind', color: '#06B6D4' },
            { name: 'Bootstrap', icon: 'logos:bootstrap', color: '#7952B3' },
          ]
        },
        {
          title: 'Frameworks / Libraries',
          skills: [
            { name: 'React', icon: 'vscode-icons:file-type-reactjs', color: '#61DAFB' },
            { name: 'Next.js', icon: 'vscode-icons:file-type-next', color: '#000000' },
            { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official', color: '#F7DF1E' },
            { name: 'TypeScript', icon: 'vscode-icons:file-type-typescript-official', color: '#3178C6' },
          ]
        }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: 'vscode-icons:file-type-git', color: '#F05032' },
        { name: 'GitHub', icon: 'akar-icons:github-fill', color: '#181717' },
        { name: 'Vercel', icon: 'ion:logo-vercel', color: '#000000' },
        { name: 'Netlify', icon: 'vscode-icons:file-type-netlify', color: '#00C7B7' },
        { name: 'Surge', icon: 'simple-icons:surge', color: '#B7178C' },
        { name: 'VS Code', icon: 'vscode-icons:file-type-vscode', color: '#007ACC' },
        { name: 'Ubuntu/Linux', icon: 'logos:ubuntu', color: '#E95420' },
        { name: 'Figma', icon: 'logos:figma', color: '#F24E1E' },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-blue-400 mb-2">Skills & Technologies</h1>
        <p className="text-gray-300 mb-8">
          Here are the technologies and tools I work with to create amazing web experiences.
        </p>
      </motion.div>

      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-300">{category.title}</h2>
          
          {category.subcategories ? (
            category.subcategories.map((subcategory, subIndex) => (
              <div key={subcategory.title} className="space-y-4">
                <h3 className="text-xl font-medium text-gray-300">{subcategory.title}</h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                  {subcategory.skills.map((skill, skillIndex) => (
                    <motion.div key={skill.name} variants={itemVariants}>
                      <Card className="p-4 bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 group cursor-pointer">
                        <div className="flex flex-col items-center space-y-2">
                          <Icon 
                            icon={skill.icon} 
                            className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                            style={{ color: skill.color }}
                          />
                          <span className="text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {category.skills?.map((skill, skillIndex) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <Card className="p-4 bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 group cursor-pointer">
                    <div className="flex flex-col items-center space-y-2">
                      <Icon 
                        icon={skill.icon} 
                        className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  )
}