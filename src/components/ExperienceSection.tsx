
const ExperienceSection = () => {
  const experiences = [
    {
      icon: "🔐",
      title: "Freelance Security Researcher",
      company: "Silicon University",
      period: "Oct 2024 – Jan 2025",
      achievements: [
        "Discovered critical vulnerabilities in the university ERP system, including unauthorized admin access.",
        "Identified logic flaws and insecure coding practices affecting user data and access control.",
        "Used Burp Suite for deep payload injection, parameter manipulation, and logic-based attack simulations."
      ]
    },
    {
      icon: "🚁",
      title: "Research & Development Intern",
      company: "IG Drones",
      period: "June 2024 – Aug 2024",
      achievements: [
        "Built a fully autonomous indoor drone simulation with ROS, MAVROS, and Gazebo.",
        "Integrated SLAM (RTAB-Map) for dynamic mapping and localization.",
        "Optimized system stability with Dockerized environments and modular code architecture.",
        "Conducted extensive Gazebo-based simulation trials validating indoor navigation performance."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-hacker-cyan neon-glow">&lt;</span>
            <span className="text-green-400">Experience</span>
            <span className="text-hacker-cyan neon-glow">/&gt;</span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="terminal-border p-6 bg-gradient-to-r from-black to-gray-900 hover:from-gray-900 hover:to-black transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex items-center mb-2 md:mb-0">
                      <span className="text-2xl mr-3">{exp.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-hacker-cyan group-hover:neon-glow transition-all duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-green-400 font-mono">{exp.company}</p>
                      </div>
                    </div>
                    <div className="text-hacker-cyan/70 font-mono text-sm">
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-green-400 mr-2 mt-1">→</span>
                        <p className="text-green-300 font-mono text-sm leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
