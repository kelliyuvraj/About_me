
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-hacker-cyan neon-glow">&lt;</span>
            <span className="text-green-400">About</span>
            <span className="text-hacker-cyan neon-glow">/&gt;</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="terminal-border p-4 bg-black/50 scan-line">
                  <Avatar className="w-80 h-80 mx-auto">
                    <AvatarImage 
                      src="/lovable-uploads/81955c34-21ee-436f-b4b4-6f76d067c730.png" 
                      alt="Kelli Yuvraj"
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-hacker-cyan/20 text-hacker-cyan text-6xl font-bold">
                      KY
                    </AvatarFallback>
                  </Avatar>
                </div>
                {/* Glowing border effect */}
                <div className="absolute inset-0 border-2 border-hacker-cyan/30 animate-pulse"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div className="terminal-border p-6 bg-black/80 animate-fade-in">
                <div className="text-hacker-cyan font-mono mb-4">
                  root@about:~$ whoami
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">
                  Hi, I'm Kelli Yuvraj 👋
                </h3>
                <p className="text-green-300 font-mono leading-relaxed mb-4">
                  A <span className="text-hacker-cyan">B.Tech Computer Science</span> student at 
                  Silicon University with a deep focus on <span className="text-hacker-cyan">cybersecurity</span> and 
                  system exploitation.
                </p>
                <p className="text-green-300 font-mono leading-relaxed mb-4">
                  I specialize in <span className="text-hacker-cyan">web application security</span>, 
                  <span className="text-hacker-cyan"> ethical hacking</span>, and 
                  <span className="text-hacker-cyan"> drone-based simulation research</span>.
                </p>
                <p className="text-green-300 font-mono leading-relaxed">
                  I enjoy working on real-world vulnerabilities, turning 
                  <span className="text-hacker-cyan"> curiosity into actionable impact</span>.
                </p>
              </div>

              {/* Status indicators */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-hacker-cyan/30 p-4 bg-hacker-cyan/5">
                  <div className="text-hacker-cyan font-mono text-sm mb-1">
                    STATUS: ACTIVE
                  </div>
                  <div className="text-green-400 font-mono text-xs">
                    Currently seeking cybersecurity internships
                  </div>
                </div>
                <div className="border border-green-400/30 p-4 bg-green-400/5">
                  <div className="text-green-400 font-mono text-sm mb-1">
                    FOCUS: RESEARCH
                  </div>
                  <div className="text-green-300 font-mono text-xs">
                    Satellite & drone security vulnerabilities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
