import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { clinicInfo, quickLinks } from '@/data/siteData';
import { getLenis } from '@/hooks/useLenis';

export function Footer() {
  const scrollTo = (href: string) => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(href, { offset: -80 });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-dark border-t border-white/[0.07] overflow-hidden">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink/40 to-transparent" />

      <div className="relative z-10 px-5 md:px-10 py-8">
        <div className="container-max mx-auto">

          {/* Main footer row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start mb-6"
          >
            {/* Brand */}
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Gomathi Dental Clinic"
                className="h-10 w-auto"
              />
              <div>
                <p className="text-sm font-bold text-white leading-tight">{clinicInfo.name}</p>
                <p className="text-[11px] text-medium-gray">{clinicInfo.tagline}</p>
              </div>
            </div>

            {/* Nav + Contact info */}
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
              {/* Quick links */}
              <div>
                <p className="text-[10px] uppercase tracking-widest text-pink font-semibold mb-2">Pages</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {quickLinks.slice(0, -1).map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollTo(link.href)}
                      className="text-xs text-medium-gray hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact info */}
              <div>
                <p className="text-[10px] uppercase tracking-widest text-blue-light font-semibold mb-2">Contact</p>
                <div className="flex flex-wrap gap-x-5 gap-y-1">
                  <a
                    href={`tel:${clinicInfo.phones[0].replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-1.5 text-xs text-medium-gray hover:text-white transition-colors"
                  >
                    <FaPhone className="text-blue-light text-[10px]" />
                    {clinicInfo.phones[0]}
                  </a>
                  <a
                    href={`tel:${clinicInfo.phones[1].replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-1.5 text-xs text-medium-gray hover:text-white transition-colors"
                  >
                    <FaPhone className="text-blue-light text-[10px]" />
                    {clinicInfo.phones[1]}
                  </a>
                  <span className="inline-flex items-center gap-1.5 text-xs text-medium-gray">
                    <FaClock className="text-blue-light text-[10px]" />
                    Mon–Sat: 9:30 AM–1 PM, 4:30–8:30 PM
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-medium-gray">
                    <FaMapMarkerAlt className="text-blue-light text-[10px]" />
                    Sankarankovil, Tamil Nadu
                  </span>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/91${clinicInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-medium-gray hover:text-white hover:bg-green-500/20 hover:border-green-500/30 transition-all duration-300"
              >
                <FaWhatsapp className="text-xs" />
              </a>
              <a
                href={`tel:${clinicInfo.phones[0].replace(/\s/g, '')}`}
                aria-label="Call"
                className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-medium-gray hover:text-white hover:bg-blue/20 hover:border-blue/30 transition-all duration-300"
              >
                <FaPhone className="text-xs" />
              </a>
              <a
                href="https://maps.app.goo.gl/v2WmYPEZTsisiqDW8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Location"
                className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-medium-gray hover:text-white hover:bg-pink/20 hover:border-pink/30 transition-all duration-300"
              >
                <FaMapMarkerAlt className="text-xs" />
              </a>
            </div>
          </motion.div>

          {/* Bottom bar */}
          <div className="h-px bg-white/[0.06] mb-4" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[11px] text-medium-gray/60">
              © {year} {clinicInfo.name}. All rights reserved.
            </p>
            <p className="text-[11px] text-medium-gray/40">
              Reg. No. {clinicInfo.doctor.registration} · {clinicInfo.doctor.council}
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
