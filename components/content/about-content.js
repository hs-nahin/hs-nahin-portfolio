"use client";

import { Badge } from "@/components/ui/badge";
import { Calendar, Coffee, MapPin } from "lucide-react";

export function AboutContent() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 max-w-4xl mx-auto">
        {/* Header */}
        <div
          className="mb-8 sm:mb-12 blur-in"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
            <div className="w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center shrink-0">
              <img
                src="/images/logo.svg"
                alt="Hasnat Shahriyar logo"
                className="object-contain w-full h-full"
              />
            </div>

            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 blur-in-chars">
                {"Hasnat Shahriyar".split('').map((char, i) => (
                  <span 
                    key={`name-char-${i}-${char}`} 
                    className="char inline-block" 
                    style={{ 
                      animationDelay: `${i * 0.05}s`,
                      opacity: 0
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </h1>
              
              <p
                className="text-muted-foreground text-sm sm:text-base md:text-lg blur-in-text"
                style={{ animationDelay: "0.8s" }}
              >
                Frontend Developer
              </p>
              <div
                className="flex flex-col sm:flex-row sm:space-x-4 mt-2 text-xs sm:text-sm text-muted-foreground space-y-1 sm:space-y-0 blur-in"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center justify-center sm:justify-start space-x-1">
                  <MapPin className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-1">
                  <Calendar className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span>Less than 1 year experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div
          className="mb-8 sm:mb-12 blur-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="p-4 sm:p-6 md:p-8 professional-hover rounded-lg border bg-card text-card-foreground shadow-sm">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center">
              <span className="text-primary mr-2">//</span>
              Introduction
            </h2>
            <div className="prose prose-sm sm:prose-base max-w-none text-muted-foreground leading-relaxed text-balance">
              <p className="mb-4 text-sm sm:text-base slide-up-words" style={{ animationDelay: "0.3s" }}>
                <span className="word">I</span>
                <span className="word">am</span>
                <span className="word">a</span>
                <span className="word">passionate</span>
                <span className="word">and</span>
                <span className="word">motivated</span>
                <span className="word">junior</span>
                <span className="word">frontend</span>
                <span className="word">developer</span>
                <span className="word">with</span>
                <span className="word">a</span>
                <span className="word">focus</span>
                <span className="word">on</span>
                <span className="word">learning</span>
                <span className="word">modern</span>
                <span className="word">web</span>
                <span className="word">technologies.</span>
                <span className="word">Currently</span>
                <span className="word">improving</span>
                <span className="word">my</span>
                <span className="word">skills</span>
                <span className="word">in</span>
                <span className="word">React,</span>
                <span className="word">Next.js,</span>
                <span className="word">and</span>
                <span className="word">TypeScript.</span>
              </p>
              <p className="mb-4 text-sm sm:text-base slide-up-words" style={{ animationDelay: "0.5s" }}>
                <span className="word">I</span>
                <span className="word">enjoy</span>
                <span className="word">solving</span>
                <span className="word">problems</span>
                <span className="word">through</span>
                <span className="word">code</span>
                <span className="word">and</span>
                <span className="word">am</span>
                <span className="word">eager</span>
                <span className="word">to</span>
                <span className="word">contribute</span>
                <span className="word">to</span>
                <span className="word">real</span>
                <span className="word">projects</span>
                <span className="word">while</span>
                <span className="word">gaining</span>
                <span className="word">professional</span>
                <span className="word">experience.</span>
              </p>
              <p className="text-sm sm:text-base slide-up-words" style={{ animationDelay: "0.7s" }}>
                <span className="word">Outside</span>
                <span className="word">of</span>
                <span className="word">coding,</span>
                <span className="word">I'm</span>
                <span className="word">exploring</span>
                <span className="word">best</span>
                <span className="word">practices,</span>
                <span className="word">UI/UX</span>
                <span className="word">fundamentals,</span>
                <span className="word">and</span>
                <span className="word">web</span>
                <span className="word">performance</span>
                <span className="word">optimization.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Skills & Learning */}
        <div
          className="mb-8 sm:mb-12 blur-in"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center blur-in-chars">
            <span className="text-primary mr-2">//</span>
            {"Skills & Learning Highlights".split('').map((char, i) => (
              <span key={i} className="char" style={{ animationDelay: `${i * 0.03}s` }}>
                {char}
              </span>
            ))}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-4 sm:p-6 professional-hover rounded-lg border bg-card text-card-foreground shadow-sm blur-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center space-x-3 mb-4">
                <Coffee className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                <h3 className="text-base sm:text-lg font-semibold blur-in-chars">
                  {"Frontend Development".split('').map((char, i) => (
                    <span key={i} className="char" style={{ animationDelay: `${i * 0.02}s` }}>
                      {char}
                    </span>
                  ))}
                </h3>
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base slide-up-words">
                <span className="word">Familiar</span>
                <span className="word">with</span>
                <span className="word">HTML,</span>
                <span className="word">CSS,</span>
                <span className="word">JavaScript</span>
                <span className="word">fundamentals,</span>
                <span className="word">and</span>
                <span className="word">building</span>
                <span className="word">responsive</span>
                <span className="word">layouts</span>
                <span className="word">using</span>
                <span className="word">Tailwind</span>
                <span className="word">CSS</span>
                <span className="word">and</span>
                <span className="word">React.js.</span>
              </p>
            </div>

            <div className="p-4 sm:p-6 professional-hover rounded-lg border bg-card text-card-foreground shadow-sm blur-in" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center space-x-3 mb-4">
                <Coffee className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                <h3 className="text-base sm:text-lg font-semibold blur-in-chars">
                  {"Continuous Learning".split('').map((char, i) => (
                    <span key={i} className="char" style={{ animationDelay: `${i * 0.02}s` }}>
                      {char}
                    </span>
                  ))}
                </h3>
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base slide-up-words">
                <span className="word">Actively</span>
                <span className="word">learning</span>
                <span className="word">Next.js,</span>
                <span className="word">TypeScript,</span>
                <span className="word">and</span>
                <span className="word">improving</span>
                <span className="word">understanding</span>
                <span className="word">of</span>
                <span className="word">React</span>
                <span className="word">hooks,</span>
                <span className="word">state</span>
                <span className="word">management,</span>
                <span className="word">and</span>
                <span className="word">component</span>
                <span className="word">design.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <div
          className="mb-8 sm:mb-12 blur-in"
          style={{ animationDelay: "0.4s" }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center blur-in-chars">
            <span className="text-primary mr-2">//</span>
            {"Current Focus".split('').map((char, i) => (
              <span key={i} className="char" style={{ animationDelay: `${i * 0.03}s` }}>
                {char}
              </span>
            ))}
          </h2>
          <div className="p-4 sm:p-6 professional-hover rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="text-xs sm:text-sm blur-in" style={{ animationDelay: "0.1s" }}>
                Next.js (Learning)
              </Badge>
              <Badge variant="secondary" className="text-xs sm:text-sm blur-in" style={{ animationDelay: "0.2s" }}>
                TypeScript (Learning)
              </Badge>
              <Badge variant="secondary" className="text-xs sm:text-sm blur-in" style={{ animationDelay: "0.3s" }}>
                React.js
              </Badge>
              <Badge variant="secondary" className="text-xs sm:text-sm blur-in" style={{ animationDelay: "0.4s" }}>
                Tailwind CSS
              </Badge>
              <Badge variant="secondary" className="text-xs sm:text-sm blur-in" style={{ animationDelay: "0.5s" }}>
                JavaScript ES6+
              </Badge>
              <Badge variant="secondary" className="text-xs sm:text-sm blur-in" style={{ animationDelay: "0.6s" }}>
                Problem Solving
              </Badge>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base slide-up-words">
              <span className="word">Focused</span>
              <span className="word">on</span>
              <span className="word">mastering</span>
              <span className="word">core</span>
              <span className="word">frontend</span>
              <span className="word">technologies</span>
              <span className="word">and</span>
              <span className="word">improving</span>
              <span className="word">my</span>
              <span className="word">ability</span>
              <span className="word">to</span>
              <span className="word">build</span>
              <span className="word">clean,</span>
              <span className="word">accessible,</span>
              <span className="word">and</span>
              <span className="word">performant</span>
              <span className="word">web</span>
              <span className="word">applications.</span>
              <span className="word">Open</span>
              <span className="word">to</span>
              <span className="word">learning</span>
              <span className="word">new</span>
              <span className="word">tools</span>
              <span className="word">and</span>
              <span className="word">frameworks.</span>
            </p>
          </div>
        </div>

        {/* Professional Journey */}
        <div
          className="mb-8 sm:mb-12 blur-in"
          style={{ animationDelay: "0.5s" }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center blur-in-chars">
            <span className="text-primary mr-2">//</span>
            {"Professional Journey".split('').map((char, i) => (
              <span key={i} className="char" style={{ animationDelay: `${i * 0.03}s` }}>
                {char}
              </span>
            ))}
          </h2>
          <div className="p-4 sm:p-6 professional-hover rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="space-y-4 text-muted-foreground text-xs sm:text-sm md:text-base text-balance">
              <p className="slide-up-words" style={{ animationDelay: "0.1s" }}>
                <span className="word">I</span>
                <span className="word">started</span>
                <span className="word">my</span>
                <span className="word">journey</span>
                <span className="word">into</span>
                <span className="word">web</span>
                <span className="word">development</span>
                <span className="word">recently,</span>
                <span className="word">motivated</span>
                <span className="word">by</span>
                <span className="word">a</span>
                <span className="word">passion</span>
                <span className="word">for</span>
                <span className="word">technology</span>
                <span className="word">and</span>
                <span className="word">building</span>
                <span className="word">websites.</span>
                <span className="word">Since</span>
                <span className="word">then,</span>
                <span className="word">I've</span>
                <span className="word">been</span>
                <span className="word">actively</span>
                <span className="word">learning</span>
                <span className="word">and</span>
                <span className="word">practicing</span>
                <span className="word">frontend</span>
                <span className="word">development</span>
                <span className="word">fundamentals.</span>
              </p>
              <p className="slide-up-words" style={{ animationDelay: "0.3s" }}>
                <span className="word">I've</span>
                <span className="word">worked</span>
                <span className="word">on</span>
                <span className="word">several</span>
                <span className="word">personal</span>
                <span className="word">projects</span>
                <span className="word">to</span>
                <span className="word">apply</span>
                <span className="word">my</span>
                <span className="word">skills,</span>
                <span className="word">and</span>
                <span className="word">I'm</span>
                <span className="word">eager</span>
                <span className="word">to</span>
                <span className="word">gain</span>
                <span className="word">practical</span>
                <span className="word">experience</span>
                <span className="word">through</span>
                <span className="word">internships</span>
                <span className="word">or</span>
                <span className="word">entry-level</span>
                <span className="word">roles.</span>
              </p>
              <p className="slide-up-words" style={{ animationDelay: "0.5s" }}>
                <span className="word">My</span>
                <span className="word">goal</span>
                <span className="word">is</span>
                <span className="word">to</span>
                <span className="word">grow</span>
                <span className="word">steadily</span>
                <span className="word">as</span>
                <span className="word">a</span>
                <span className="word">developer</span>
                <span className="word">by</span>
                <span className="word">taking</span>
                <span className="word">on</span>
                <span className="word">challenging</span>
                <span className="word">projects</span>
                <span className="word">and</span>
                <span className="word">continuously</span>
                <span className="word">expanding</span>
                <span className="word">my</span>
                <span className="word">knowledge.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div
          className="mb-6 sm:mb-8 blur-in"
          style={{ animationDelay: "0.6s" }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center blur-in-chars">
            <span className="text-primary mr-2">//</span>
            {"Values & Approach".split('').map((char, i) => (
              <span key={i} className="char" style={{ animationDelay: `${i * 0.03}s` }}>
                {char}
              </span>
            ))}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                title: "Learning Mindset",
                desc: "I approach every project as a learning opportunity, eager to absorb new knowledge and improve my skills.",
              },
              {
                title: "Attention to Detail",
                desc: "I strive to write clean, readable code and pay close attention to UI consistency and usability.",
              },
              {
                title: "Persistence",
                desc: "I understand that mastery takes time, and I'm committed to overcoming challenges and setbacks.",
              },
              {
                title: "Collaboration",
                desc: "I value working with others, asking questions, and learning from experienced developers.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 professional-hover rounded-lg border bg-card text-card-foreground shadow-sm blur-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <h3 className="text-base sm:text-lg font-semibold mb-3 blur-in-chars">
                  {item.title.split('').map((char, i) => (
                    <span key={i} className="char" style={{ animationDelay: `${i * 0.02}s` }}>
                      {char}
                    </span>
                  ))}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base slide-up-words">
                  {item.desc.split(' ').map((word, i) => (
                    <span key={i} className="word" style={{ animationDelay: `${i * 0.05}s` }}>
                      {word}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}