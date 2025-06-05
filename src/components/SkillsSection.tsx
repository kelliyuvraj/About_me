
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: ["Python", "Java", "C", "HTML/CSS", "SQL"]
    },
    {
      title: "Cybersecurity Tools",
      icon: "🛡️",
      skills: ["Burp Suite", "Wireshark", "Nmap", "Nessus", "Metasploit", "Hydra", "SQLMap", "John the Ripper"]
    },
    {
      title: "Technical Areas",
      icon: "⚡",
      skills: [
        "Web Application Security (OWASP Top 10)",
        "Satellite Systems Security",
        "Drone Simulation & SLAM Navigation",
        "Vulnerability Assessment & Penetration Testing",
        "Embedded Systems & ROS/Gazebo"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-hacker-cyan neon-glow">&lt;</span>
            <span className="text-green-400">Skills</span>
            <span className="text-hacker-cyan neon-glow">/&gt;</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="terminal-border p-6 bg-black/70 scan-line animate-fade-in hover:animate-glow-pulse transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    <h3 className="text-xl font-bold text-hacker-cyan neon-glow">
                      {category.title}
                    </h3>
                  </div>
                  <div className="text-green-400 font-mono text-sm mb-2">
                    root@skills:~$ ls {category.title.toLowerCase().replace(' ', '_')}
                  </div>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="flex items-center group cursor-default"
                    >
                      <span className="text-green-400 mr-2 font-mono">→</span>
                      <span className="text-green-300 font-mono text-sm group-hover:text-hacker-cyan transition-colors duration-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-hacker-cyan/50 font-mono text-xs">
                  [{category.skills.length} items found]
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="terminal-border p-6 bg-black/80 max-w-2xl mx-auto">
              <div className="text-hacker-cyan font-mono mb-4">
                root@expertise:~$ echo "continuous_learning_status"
              </div>
              <div className="text-green-400 font-mono">
                "Always expanding skillset through hands-on research, CTF competitions, and real-world vulnerability discovery."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
