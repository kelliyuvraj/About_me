
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = 'Committed to building secure systems and exploring cutting-edge vulnerabilities in both digital and physical environments.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 matrix-bg opacity-20"></div>
      
      {/* Scanning Lines Effect */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-hacker-cyan to-transparent opacity-30"
            style={{
              top: `${20 + i * 20}%`,
              animation: `scan ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title with Glitch Effect */}
          <h1 
            className="text-6xl md:text-8xl font-bold mb-6 glitch text-hacker-cyan neon-glow"
            data-text="KELLI YUVRAJ"
          >
            KELLI YUVRAJ
          </h1>
          
          {/* Subtitle */}
          <div className="text-xl md:text-2xl mb-8 text-green-400 font-mono">
            <span className="text-hacker-cyan">[</span>
            Cybersecurity Enthusiast
            <span className="text-hacker-cyan"> | </span>
            Ethical Hacker
            <span className="text-hacker-cyan"> | </span>
            Drone Simulation Researcher
            <span className="text-hacker-cyan">]</span>
          </div>

          {/* Location and Contact */}
          <div className="mb-8 space-y-2 text-green-300 font-mono">
            <div className="flex items-center justify-center space-x-4 flex-wrap">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 text-hacker-cyan mr-2" /> Bhubaneswar, India
              </span>
              <a href="mailto:kelliyuvraj@gmail.com" className="flex items-center hover:text-hacker-cyan transition-colors">
                <Mail className="w-4 h-4 text-hacker-cyan mr-2" /> kelliyuvraj@gmail.com
              </a>
              <a href="tel:+917903634789" className="flex items-center hover:text-hacker-cyan transition-colors">
                <Phone className="w-4 h-4 text-hacker-cyan mr-2" /> +91 7903634789
              </a>
            </div>
            <div className="flex items-center justify-center space-x-6 mt-4">
              <a 
                href="https://www.linkedin.com/in/kelliyuvraj/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-hacker-cyan hover:text-green-400 transition-colors flex items-center"
              >
                <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
              </a>
              <a 
                href="https://github.com/kelliyuvraj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-hacker-cyan hover:text-green-400 transition-colors flex items-center"
              >
                <Github className="w-5 h-5 mr-2" /> GitHub
              </a>
            </div>
          </div>

          {/* Typing Animation Quote */}
          <div className="terminal-border p-6 bg-black/50 max-w-3xl mx-auto">
            <div className="text-left">
              <div className="text-hacker-cyan mb-2 font-mono">root@kelli:~$ echo "mission_statement"</div>
              <div className="text-green-400 font-mono text-lg">
                "{text}<span className="animate-pulse">|</span>"
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <div className="w-1 h-16 bg-gradient-to-b from-hacker-cyan to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
