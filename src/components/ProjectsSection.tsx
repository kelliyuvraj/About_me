
const ProjectsSection = () => {
  const project = {
    icon: "🛰️",
    title: "Software-Only Satellite Security Research",
    period: "Jan 2021 – Present",
    description: "Advanced research into satellite command injection vulnerabilities without traditional SDR hardware requirements.",
    achievements: [
      "Created a low-cost methodology for satellite command injection without SDR hardware.",
      "Demonstrated successful replay attacks using OpenSatKit (OSK).",
      "Exposed vulnerabilities in TM/TC protocols and proposed enhanced authentication methods.",
      "Conducted comparative studies between SDR-based and software-only approaches to satellite security."
    ],
    technologies: ["OpenSatKit", "TM/TC Protocols", "Command Injection", "Replay Attacks", "Authentication Systems"]
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-hacker-cyan neon-glow">&lt;</span>
            <span className="text-green-400">Projects</span>
            <span className="text-hacker-cyan neon-glow">/&gt;</span>
          </h2>

          <div className="terminal-border p-8 bg-black/80 scan-line animate-fade-in">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{project.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-hacker-cyan neon-glow">
                    {project.title}
                  </h3>
                  <p className="text-green-400 font-mono">{project.period}</p>
                </div>
              </div>
              
              <p className="text-green-300 font-mono mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-hacker-cyan font-bold mb-4 font-mono">
                root@research:~$ cat achievements.log
              </h4>
              <div className="space-y-3">
                {project.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1 font-mono">[{index + 1}]</span>
                    <p className="text-green-300 font-mono text-sm leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-hacker-cyan font-bold mb-4 font-mono">
                Technologies & Tools:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-hacker-cyan/10 border border-hacker-cyan/30 text-hacker-cyan text-sm font-mono hover:bg-hacker-cyan/20 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 text-center">
              <a href="/ResearchPaper.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-hacker-cyan to-green-400 text-black px-8 py-3 font-mono font-bold hover:from-green-400 hover:to-hacker-cyan transition-all duration-300 animate-glow-pulse">
    View Research Documentation →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
