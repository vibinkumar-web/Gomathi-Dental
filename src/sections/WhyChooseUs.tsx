import { motion } from 'framer-motion';
import { FloatingParticles } from '@/components/FloatingParticles';
import { features } from '@/data/siteData';

const ACCENTS = [
  { num: 'text-pink', bar: 'bg-pink', icon: 'bg-pink/10 text-pink', ring: 'hover:border-pink/30' },
  { num: 'text-blue', bar: 'bg-blue', icon: 'bg-blue/10 text-blue', ring: 'hover:border-blue/30' },
  { num: 'text-violet-500', bar: 'bg-violet-500', icon: 'bg-violet-500/10 text-violet-500', ring: 'hover:border-violet-400/30' },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose" className="relative bg-offwhite overflow-hidden">
      <FloatingParticles count={5} colors={['rgba(255,45,143,0.08)', 'rgba(0,87,231,0.06)']} />

      <div className="relative z-10 section-padding">
        <div className="container-max mx-auto">

          {/* Section Header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex items-center gap-2 text-caption text-pink uppercase tracking-[0.15em] font-semibold mb-2">
              <span className="w-5 h-px bg-pink/40" />
              Why Choose Us
              <span className="w-5 h-px bg-pink/40" />
            </span>
            <h2 className="text-h2 text-near-black mb-2">The Gomathi Dental Advantage</h2>
            <p className="text-body text-dark-gray max-w-xl mx-auto">
              Experience dental care that puts your comfort and health first.
            </p>
          </motion.div>

          {/* 2-column feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              const accent = ACCENTS[i % 3];

              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: Math.floor(i / 2) * 0.1 }}
                  className={`group relative flex items-start gap-5 bg-white border border-light-gray ${accent.ring} rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden`}
                >
                  {/* Left accent bar */}
                  <span className={`absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full ${accent.bar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Large muted number */}
                  <span className={`absolute right-4 top-3 text-5xl font-black leading-none select-none pointer-events-none ${accent.num} opacity-[0.07]`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Icon box */}
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 220, damping: 14, delay: i * 0.07 + 0.15 }}
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${accent.icon} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="text-xl" />
                  </motion.div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-near-black mb-1 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-dark-gray leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
