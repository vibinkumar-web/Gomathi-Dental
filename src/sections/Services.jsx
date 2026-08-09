import { motion } from 'framer-motion';
import { GradientMesh } from '@/components/GradientMesh';
import { FloatingParticles } from '@/components/FloatingParticles';
import { services } from '@/data/siteData';
import { FaArrowRight } from 'react-icons/fa';

const ACCENTS = [
  { icon: 'text-pink-400', border: 'border-pink-400/40', bg: 'from-pink-500/80' },
  { icon: 'text-blue-400', border: 'border-blue-400/40', bg: 'from-blue-500/80' },
  { icon: 'text-violet-400', border: 'border-violet-400/40', bg: 'from-violet-500/80' },
];

export function Services() {
  return (
    <section id="services" className="relative bg-navy overflow-hidden">
      <GradientMesh variant="dark" />
      <FloatingParticles count={12} />

      <div className="relative z-10 section-padding">
        <div className="container-max mx-auto">

          {/* Section Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex items-center gap-2 text-caption text-pink uppercase tracking-[0.15em] font-semibold mb-2">
              <span className="w-5 h-px bg-pink/50" />
              Our Services
              <span className="w-5 h-px bg-pink/50" />
            </span>
            <h2 className="text-h2 text-white mb-2">Comprehensive Dental Care</h2>
            <p className="text-body text-medium-gray max-w-xl mx-auto">
              From preventive care to advanced procedures, we offer a full range of dental
              services under one roof.
            </p>
          </motion.div>

          {/* Services Grid — 3 columns, 3 rows, image cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => {
              const Icon = service.icon;
              const accent = ACCENTS[i % 3];

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                  className="group relative h-[280px] rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* Full-bleed image */}
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Default dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-navy-dark/10 transition-opacity duration-500" />

                  {/* Hover coloured overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${accent.bg} to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                  {/* Number badge */}
                  <span className="absolute top-3 right-3 text-[10px] font-bold text-white/50 tracking-widest bg-white/5 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/10">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Icon badge */}
                  <div className={`absolute top-3 left-3 w-9 h-9 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-md border ${accent.border} transition-colors duration-300`}>
                    <Icon className={`text-base ${accent.icon}`} />
                  </div>

                  {/* Bottom content — always visible title, description slides up on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    {/* Description — hidden by default, slides up on hover */}
                    <p className="text-white/80 text-xs leading-relaxed mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out line-clamp-2">
                      {service.description}
                    </p>

                    <div className="flex items-end justify-between">
                      <h3 className="text-white font-semibold text-sm leading-tight max-w-[75%]">
                        {service.name}
                      </h3>

                      {/* Arrow — slides in on hover */}
                      <span className={`flex items-center justify-center w-7 h-7 rounded-full bg-white/10 border ${accent.border} opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out`}>
                        <FaArrowRight className={`text-[9px] ${accent.icon}`} />
                      </span>
                    </div>
                  </div>

                  {/* Bottom border accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accent.bg} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mt-10 pt-8 border-t border-white/10"
          >
            <p className="text-body text-medium-gray mb-5">
              Not sure which treatment you need? Contact us for a free consultation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
