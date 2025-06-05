
const EducationSection = () => {
  const education = [
    {
      icon: "🎓",
      degree: "Bachelor of Technology in Computer Science",
      institution: "Silicon University, Bhubaneswar",
      period: "Sept 2023 – Present",
      // grade: "CGPA: 7.1"
    },
    {
      icon: "📘",
      degree: "Senior Secondary Education",
      institution: "St. Mary's English High School, Jamshedpur",
      period: "Completed March 2023",
      grade: ""
    }
  ];

  return (
    <section id="education" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-hacker-cyan neon-glow">&lt;</span>
            <span className="text-green-400">Education</span>
            <span className="text-hacker-cyan neon-glow">/&gt;</span>
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="terminal-border p-6 bg-gradient-to-r from-black via-gray-900 to-black hover:from-gray-900 hover:via-black hover:to-gray-900 transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start">
                  <span className="text-3xl mr-4 mt-1">{edu.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-hacker-cyan mb-2 neon-glow">
                      {edu.degree}
                    </h3>
                    <p className="text-green-400 font-mono mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <span className="text-hacker-cyan/70 font-mono text-sm">
                        {edu.period}
                      </span>
                      {edu.grade && (
                        <span className="text-green-300 font-mono text-sm bg-green-400/10 px-2 py-1 border border-green-400/30 mt-2 sm:mt-0">
                          {edu.grade}
                        </span>
                      )}
                    </div>
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

export default EducationSection;
