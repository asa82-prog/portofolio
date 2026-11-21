import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PROFILE } from '../data/portfolio';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 h-[76px] px-[5vw] flex items-center justify-between gap-8 backdrop-blur-md transition-colors duration-300 border-b ${
        scrolled
          ? 'bg-white/92 border-[#111315]/10'
          : 'bg-white/82 border-[#111315]/5'
      }`}
    >
      {/* Zone 1: Single text element wordmark */}
      <a
        href="#hero"
        aria-label={`${PROFILE.fullName} Home`}
        className="font-serif-editorial text-[26px] font-bold tracking-[-0.015em] text-[#111315] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E3A2F] rounded"
      >
        {PROFILE.brand}
      </a>

      {/* Zone 2: 5 single-line navigation links */}
      <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[13.5px] font-medium text-[#686D76] hover:text-[#111315] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E3A2F] rounded"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Zone 3: 1 primary action + mobile menu toggle */}
      <div className="flex items-center gap-3 shrink-0">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-[#111315] px-6 py-2.5 text-[13.5px] font-medium tracking-[0.01em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1E3A2F] hover:shadow-[0_10px_24px_-8px_rgba(30,58,47,0.3)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A2F]"
        >
          Get in Touch
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#111315]/12 text-[#111315] hover:bg-[#F7F8F6] transition-colors focus-visible:outline-2 focus-visible:outline-[#1E3A2F]"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-x-0 top-[76px] bg-white/95 backdrop-blur-md border-b border-[#111315]/10 px-[5vw] py-5 shadow-lg">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 px-3 rounded-xl text-[15px] font-medium text-[#111315] hover:bg-[#F7F8F6] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
