import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useDarkMode } from '../../hooks/useDarkMode';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Log', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleDark } = useDarkMode();

  useEffect(() => {
    const closeMenu = () => setIsMobileMenuOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-20 bg-field border-b border-edge transition-colors duration-300">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 gap-4">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-mono font-semibold text-ink text-[14px] tracking-tight"
          >
            amir-hamdi<span className="text-amber">::</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden sm:flex items-center gap-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-3 py-1.5 text-[13px] text-ink-dim hover:text-ink border border-transparent hover:border-edge rounded transition-colors duration-200"
              >
                {item.name.toLowerCase()}
              </button>
            ))}
            <button
              onClick={toggleDark}
              className="ml-1 px-3 py-1.5 font-mono text-xs text-ink-dim bg-panel border border-edge hover:border-edge-hi hover:text-ink rounded transition-colors duration-200"
              aria-label={isDark ? 'Switch to bench light mode' : 'Switch to dark field mode'}
            >
              ◐ <span aria-hidden="true">{isDark ? 'bench light' : 'dark field'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center gap-2">
            <button
              onClick={toggleDark}
              className="px-3 py-1.5 font-mono text-xs text-ink-dim bg-panel border border-edge rounded"
              aria-label={isDark ? 'Switch to bench light mode' : 'Switch to dark field mode'}
            >
              ◐
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-ink-dim bg-panel border border-edge rounded"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-field border-b border-edge shadow-panel">
          <div className="px-4 py-3 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-sm text-ink-dim hover:text-ink hover:bg-panel rounded transition-colors duration-200"
              >
                {item.name.toLowerCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
