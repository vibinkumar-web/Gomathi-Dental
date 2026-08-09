import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaCalendarCheck } from 'react-icons/fa';
import { MagneticButton } from './MagneticButton';
import { getLenis } from '@/hooks/useLenis';
import { quickLinks } from '@/data/siteData';

const navLinks = quickLinks.filter((l) => l.label !== 'Book Appointment');

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleSectionObserver = () => {
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleSectionObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleSectionObserver);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const lenis = getLenis();
    const navEl = document.querySelector('nav');
    const navOffset = navEl ? navEl.getBoundingClientRect().height : 0;
    if (lenis) {
      lenis.scrollTo(`#${id}`, { offset: -navOffset });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isScrolled
            ? 'h-14 bg-navy/95 shadow-[0_2px_10px_rgba(100,100,100,0.15)]'
            : 'h-16 bg-navy/80'
        }`}
        style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="container-max h-full mx-auto px-5 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#home')}
            className="flex items-center gap-3 group"
          >
            <img
              src="/images/logo.png"
              alt="Gomathi Dental Clinic"
              className="h-10 md:h-12 w-auto"
            />
            <div className="text-left hidden sm:block">
              <div className="text-white font-semibold text-sm leading-tight">
                Gomathi Dental
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-pink'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.href.replace('#', '') && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pink rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <MagneticButton
              href="https://www.clinicia.com/calendar/book?u=63852"
              className="bg-pink text-white px-7 py-3 rounded-full text-sm font-semibold shadow-glow-pink hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            >
              <FaCalendarCheck className="text-xs" />
              Book Appointment
            </MagneticButton>
          </div>

          {/* Phone (tablet) */}
          <a
            href="tel:9043816020"
            className="hidden md:flex lg:hidden items-center gap-2 text-blue-light text-sm font-medium"
          >
            <FaPhone className="text-xs" />
            90438 16020
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className="lg:hidden text-white p-2"
            aria-label="Open menu"
          >
            <FaBars className="text-xl" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]"
              onClick={() => setIsMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[360px] bg-navy z-[999] p-8 flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMobileOpen(false)}
                className="absolute top-5 right-5 text-white p-2"
                aria-label="Close menu"
              >
                <FaTimes className="text-xl" />
              </button>

              {/* Logo */}
              <div className="flex items-center gap-3 mb-10 mt-4">
                <img
                  src="/images/logo.png"
                  alt="Gomathi Dental Clinic"
                  className="h-12 w-auto"
                />
                <div>
                  <div className="text-white font-semibold text-sm">Gomathi Dental</div>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-6 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 + 0.2 }}
                    onClick={() => scrollTo(link.href)}
                    className={`text-left text-lg font-medium transition-colors ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-pink'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => scrollTo('#appointment')}
                className="bg-pink text-white px-6 py-4 rounded-full text-base font-semibold shadow-glow-pink mt-6"
              >
                Book Appointment
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
