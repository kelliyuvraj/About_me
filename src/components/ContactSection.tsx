
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-hacker-cyan neon-glow">&lt;</span>
            <span className="text-green-400">Contact</span>
            <span className="text-hacker-cyan neon-glow">/&gt;</span>
          </h2>

          <div className="space-y-8">
            {/* Resume Section */}
            <div className="terminal-border p-6 bg-gradient-to-r from-hacker-cyan/10 to-green-400/10 text-center animate-fade-in">
              <h3 className="text-2xl font-bold text-hacker-cyan mb-4 neon-glow">
                📄 Download My Resume
              </h3>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-hacker-cyan to-green-400 text-black px-8 py-3 font-mono font-bold hover:from-green-400 hover:to-hacker-cyan transition-all duration-300 animate-glow-pulse"
              >
                Click Here to View PDF →
              </a>
            </div>

            {/* Contact Info */}
            <div className="terminal-border p-8 bg-black/80 scan-line animate-slide-in-right">
              <div className="mb-6">
                <div className="text-hacker-cyan font-mono mb-4">
                  root@contact:~$ cat contact_info.txt
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">
                  📬 Let's Connect!
                </h3>
                <p className="text-green-300 font-mono leading-relaxed mb-6">
                  If you're looking for an <span className="text-hacker-cyan">ethical hacker</span>, 
                  a <span className="text-hacker-cyan">cybersecurity intern</span>, or 
                  a <span className="text-hacker-cyan">researcher</span> passionate about 
                  satellite and drone security — reach out. I'd love to contribute to your mission.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-hacker-cyan text-2xl mr-4" />
                    <div>
                      <div className="text-green-400 font-mono text-sm">Email</div>
                      <a 
                        href="mailto:kelliyuvraj@gmail.com" 
                        className="text-hacker-cyan hover:text-green-400 transition-colors font-mono"
                      >
                        kelliyuvraj@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="text-hacker-cyan text-2xl mr-4" />
                    <div>
                      <div className="text-green-400 font-mono text-sm">Phone</div>
                      <a 
                        href="tel:+917903634789" 
                        className="text-hacker-cyan hover:text-green-400 transition-colors font-mono"
                      >
                        +91 7903634789
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Linkedin className="text-hacker-cyan text-2xl mr-4" />
                    <div>
                      <div className="text-green-400 font-mono text-sm">LinkedIn</div>
                      <a 
                        href="https://www.linkedin.com/in/kelliyuvraj/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-hacker-cyan hover:text-green-400 transition-colors font-mono"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Github className="text-hacker-cyan text-2xl mr-4" />
                    <div>
                      <div className="text-green-400 font-mono text-sm">GitHub</div>
                      <a 
                        href="https://github.com/kelliyuvraj" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-hacker-cyan hover:text-green-400 transition-colors font-mono"
                      >
                        View My Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="inline-block border border-hacker-cyan/30 p-4 bg-hacker-cyan/5">
                  <div className="text-hacker-cyan font-mono text-sm mb-2">
                    Current Status: AVAILABLE FOR OPPORTUNITIES
                  </div>
                  <div className="text-green-400 font-mono text-xs">
                    Seeking: Cybersecurity Internships | Research Collaborations | Ethical Hacking Projects
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center border-t border-hacker-cyan/30 pt-8">
            <div className="text-green-400/70 font-mono text-sm">
              © 2024 Kelli Yuvraj | Built with security in mind 
              <span className="text-hacker-cyan">♦</span>
            </div>
            <div className="text-hacker-cyan/50 font-mono text-xs mt-2">
              "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
