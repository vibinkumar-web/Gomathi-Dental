import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaChevronDown, FaCalendarCheck } from 'react-icons/fa';
import { GradientMesh } from '@/components/GradientMesh';
import { FloatingParticles } from '@/components/FloatingParticles';
import { MagneticButton } from '@/components/MagneticButton';
import { clinicInfo } from '@/data/siteData';
import { getLenis } from '@/hooks/useLenis';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (id: string) => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(`#${id}`, { offset: -80 });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[40dvh] flex items-center overflow-hidden bg-navy"
      style={{
        background:
          'radial-gradient(ellipse at 20% 50%, rgba(0,87,231,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(255,45,143,0.12) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(0,87,231,0.08) 0%, transparent 50%), linear-gradient(180deg, #0A1628 0%, #0D1E3C 50%, #0A1628 100%)',
      }}
    >
      {/* Background Effects */}
      <GradientMesh variant="dark" />
      <FloatingParticles count={20} />

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-max mx-auto px-5 md:px-10 pt-20 pb-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Column */}
          <motion.div
            className="flex-1 lg:max-w-[55%]"
            variants={staggerContainer}
            initial="initial"
            animate={mounted ? 'animate' : 'initial'}
          >
            {/* Clinic Name */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="font-hero text-6xl sm:text-7xl md:text-8xl lg:text-[88px] xl:text-[102px] font-black text-white leading-[1.02] tracking-tight mb-6"
              style={{ textShadow: '0 6px 40px rgba(0,0,0,0.4)' }}
            >
              {clinicInfo.name}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="font-hero text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[44px] font-bold gradient-text tracking-wide mb-10"
            >
              {clinicInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 mb-4"
            >
              <MagneticButton
                href="https://www.clinicia.com/calendar/book?u=63852"
                className="font-hero bg-pink text-white px-9 py-5 rounded-full text-lg md:text-xl font-bold shadow-glow-pink hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaCalendarCheck className="text-xl" />
                Book Appointment
              </MagneticButton>
              <MagneticButton
                href={`tel:${clinicInfo.phones[0].replace(/\s/g, '')}`}
                className="font-hero bg-transparent text-white border border-white/25 hover:bg-white/10 hover:border-white/50 px-9 py-5 rounded-full text-lg md:text-xl font-bold transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaPhone className="text-base" />
                Call Now
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Column — 3D Visual */}
          <motion.div
            className="flex flex-1 justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={mounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="relative">
              {/* Glow behind tooth */}
              <div
                className="absolute inset-0 animate-pulse-glow"
                style={{
                  background:
                    'radial-gradient(circle, rgba(255,45,143,0.2) 0%, rgba(0,87,231,0.15) 50%, transparent 70%)',
                  filter: 'blur(60px)',
                  transform: 'scale(1.5)',
                }}
              />

              {/* Tooth Image */}
              <motion.img
                src="/images/hero-tooth.png"
                alt="Premium Dental Care"
                className="relative z-10 w-[140px] sm:w-[280px] md:w-[340px] lg:w-[400px] xl:w-[500px] animate-float"
                style={{ animationDuration: '6s' }}
              />

              {/* Floating Sparkles */}
              <motion.div
                className="absolute top-10 right-0 text-pink"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </motion.div>
              <motion.div
                className="absolute bottom-20 left-0 text-blue-light"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </motion.div>
              <motion.div
                className="absolute top-1/3 -left-8 text-blue-sky"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </motion.div>

              {/* Small Glow Orbs */}
              <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-pink/30 animate-pulse-glow" />
              <div
                className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-blue-light/30 animate-pulse-glow"
                style={{ animationDelay: '1s' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll to about section"
      >
        <FaChevronDown className="text-xl animate-bounce-gentle" />
      </motion.button>
    </section>
  );
}
