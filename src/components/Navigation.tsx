
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const menuItems = [
    { id: 'hero', label: '> root' },
    { id: 'about', label: '> about' },
    { id: 'experience', label: '> experience' },
    { id: 'projects', label: '> projects' },
    { id: 'education', label: '> education' },
    { id: 'skills', label: '> skills' },
    { id: 'contact', label: '> contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-hacker-cyan/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-hacker-cyan font-bold text-lg neon-glow">
            KELLI_YUVRAJ.EXE
          </div>
          
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-mono transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-hacker-cyan bg-hacker-cyan/10 border border-hacker-cyan/50'
                    : 'text-green-400 hover:text-hacker-cyan hover:bg-hacker-cyan/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-hacker-cyan hover:text-green-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
