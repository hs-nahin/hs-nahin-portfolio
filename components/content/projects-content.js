"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Github, Star } from "lucide-react";
import { useState, useEffect } from "react";

const projects = [
  {
    id: "codelink",
    title: "CodeLink",
    description:
      "A modern collaborative platform for developers to share, discover, and work together on code snippets. Built with real-time collaboration using WebSockets, it supports syntax highlighting, efficient code sharing, and a seamless user experience.",
    image:
      "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.io",
      "Tailwind CSS",
    ],
    liveUrl: "https://codelink-demo.vercel.app",
    githubUrl: "https://github.com/hs-nahin/Project_CodeLink",
    status: "In Development",
    year: "2025",
    featured: true,
  },
  {
    id: "careerhive",
    title: "CareerHive",
    description:
      "CareerHive is a comprehensive platform designed to streamline the job search process and support individuals at every stage of their professional journey. It features centralized job listings, professional networking opportunities, and intuitive tools to connect job seekers with employers effectively.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://career-hive.vercel.app/",
    githubUrl:
      "https://github.com/hs-nahin/ReactJS-Project/tree/main/react-project-04",
    status: "Live",
    year: "2024",
    featured: false,
  }
];

export function ProjectsContent({ activeFile }) {
  const [activeFilter, setActiveFilter] = useState("all");

  // Set filter based on activeFile
  useEffect(() => {
    if (activeFile === "CodeLink.jsx") {
      setActiveFilter("codelink");
    } else if (activeFile === "CareerHive.jsx") {
      setActiveFilter("careerhive");
    } else if (activeFile === "projects") {
      setActiveFilter("all");
    }
  }, [activeFile]);

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.id === activeFilter);

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-8 text-center blur-in" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4 blur-in-chars">
            <span className="char">F</span>
            <span className="char">e</span>
            <span className="char">a</span>
            <span className="char">t</span>
            <span className="char">u</span>
            <span className="char">r</span>
            <span className="char">e</span>
            <span className="char">d</span>
            <span className="char"> </span>
            <span className="char">P</span>
            <span className="char">r</span>
            <span className="char">o</span>
            <span className="char">j</span>
            <span className="char">e</span>
            <span className="char">c</span>
            <span className="char">t</span>
            <span className="char">s</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg slide-up-words" style={{ animationDelay: '0.8s' }}>
            <span className="word">A</span>
            <span className="word">showcase</span>
            <span className="word">of</span>
            <span className="word">recent</span>
            <span className="word">work</span>
            <span className="word">demonstrating</span>
            <span className="word">expertise</span>
            <span className="word">in</span>
            <span className="word">modern</span>
            <span className="word">web</span>
            <span className="word">development</span>
            <span className="word">and</span>
            <span className="word">user</span>
            <span className="word">experience</span>
            <span className="word">design.</span>
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 blur-in" style={{ animationDelay: '0.2s' }}>
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            onClick={() => setActiveFilter("all")}
            className="text-xs sm:text-sm"
          >
            All Projects
          </Button>
          <Button
            variant={activeFilter === "codelink" ? "default" : "outline"}
            onClick={() => setActiveFilter("codelink")}
            className="text-xs sm:text-sm"
          >
            CodeLink
          </Button>
          <Button
            variant={activeFilter === "careerhive" ? "default" : "outline"}
            onClick={() => setActiveFilter("careerhive")}
            className="text-xs sm:text-sm"
          >
            CareerHive
          </Button>
        </div>

        {/* Project list */}
        <div className="space-y-8 sm:space-y-12 md:space-y-16 mb-16">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="blur-in" style={{ animationDelay: `${0.3 + index * 0.2}s` }}>
              {/* Project Card - Redesigned without Card component */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Status */}
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                      <Badge
                        className={
                          project.status === "Live"
                            ? "bg-green-500 hover:bg-green-600 text-xs sm:text-sm"
                            : "bg-yellow-500 hover:bg-yellow-600 text-xs sm:text-sm"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>

                    {/* Featured */}
                    {project.featured && (
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                        <Badge className="bg-primary hover:bg-primary/90 text-xs sm:text-sm">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Year */}
                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 flex items-center text-white">
                      <Calendar className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                      <span className="text-xs sm:text-sm font-medium">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 blur-in-chars">
                      {project.title.split('').map((char, i) => (
                        <span key={i} className="char" style={{ animationDelay: `${i * 0.05}s` }}>
                          {char}
                        </span>
                      ))}
                    </h3>
                    <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base slide-up-words">
                      {project.description.split(' ').slice(0, 15).map((word, i) => (
                        <span key={i} className="word" style={{ animationDelay: `${i * 0.1}s` }}>
                          {word}
                        </span>
                      ))}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6 sm:mb-8">
                      <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-muted-foreground uppercase tracking-wide">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs blur-in"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <Button
                        className="w-full sm:flex-1 flex items-center justify-center px-4 sm:px-6 py-2 shine-effect text-sm blur-in"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                        style={{ animationDelay: '0.1s' }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full sm:flex-1 flex items-center justify-center px-4 sm:px-6 py-2 text-sm blur-in"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        style={{ animationDelay: '0.2s' }}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card - Redesigned without Card component */}
        <div className="p-4 sm:p-6 md:p-8 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 mb-16 blur-in" style={{ animationDelay: '0.7s' }}>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
            <span className="text-primary mr-2">//</span>
            Project Portfolio Summary
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 slide-up-words">
            <span className="word">As</span>
            <span className="word">a</span>
            <span className="word">passionate</span>
            <span className="word">front-end</span>
            <span className="word">developer,</span>
            <span className="word">I</span>
            <span className="word">specialize</span>
            <span className="word">in</span>
            <span className="word">building</span>
            <span className="word">modern,</span>
            <span className="word">responsive</span>
            <span className="word">web</span>
            <span className="word">applications</span>
            <span className="word">using</span>
            <span className="word">React,</span>
            <span className="word">Next.js,</span>
            <span className="word">and</span>
            <span className="word">Tailwind</span>
            <span className="word">CSS.</span>
          </p>
          <ul className="list-disc pl-4 sm:pl-6 space-y-1 text-muted-foreground text-xs sm:text-sm">
            <li className="blur-in" style={{ animationDelay: '0.1s' }}>Utilized best practices for scalability and maintainability</li>
            <li className="blur-in" style={{ animationDelay: '0.2s' }}>
              Integrated APIs and back-end systems using REST and Firebase
            </li>
            <li className="blur-in" style={{ animationDelay: '0.3s' }}>
              Implemented custom animations and UI patterns with GSAP and
              shadcn/ui
            </li>
            <li className="blur-in" style={{ animationDelay: '0.4s' }}>Focused on creating delightful, magical user experiences</li>
          </ul>
        </div>
      </div>
    </div>
  );
}