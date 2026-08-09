import { motion } from 'framer-motion';
import { FaShieldAlt, FaAward, FaClock } from 'react-icons/fa';
import { GradientMesh } from '@/components/GradientMesh';
import { FloatingParticles } from '@/components/FloatingParticles';
import { clinicInfo } from '@/data/siteData';
import doctorImage from '@/images/Main.jpeg';
import consultantImage from '@/images/main2.jpeg';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const scaleUp = {
  initial: { opacity: 0, scale: 0.94 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.2 },
};

const consultants = [
  {
    image: doctorImage,
    name: clinicInfo.doctor.name,
    qualification: clinicInfo.doctor.qualification,
  },
  {
    image: consultantImage,
    name: 'Dr. Sujitha',
    qualification: 'BDS',
  },
];

const stats = [
  { value: '5+', label: 'Years of Experience' },
  { value: '10,000+', label: 'Patients Treated' },
  { value: '9', label: 'Specialized Services' },
];

const trustBadges = [
  {
    icon: FaShieldAlt,
    title: 'Govt. Approved',
    desc: 'Tamil Nadu Dental Council',
  },
  {
    icon: FaAward,
    title: 'Modern Equipment',
    desc: 'Latest Dental Technology',
  },
  {
    icon: FaClock,
    title: 'Emergency Care',
    desc: '24/7 On-Call Support',
  },
];

export function About() {
  return (
    <section id="about" className="relative bg-offwhite overflow-hidden">
      <GradientMesh variant="light" />
      <FloatingParticles count={8} colors={['rgba(255,45,143,0.15)', 'rgba(0,87,231,0.1)']} />

      <div className="relative z-10 section-padding">
        <div className="container-max mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-caption text-blue uppercase tracking-[0.15em] font-semibold mb-3">
              <span className="w-5 h-px bg-blue/50" />
              About Our Clinic
              <span className="w-5 h-px bg-blue/50" />
            </span>
            <h2 className="text-h2 text-near-black max-w-xl mx-auto mb-3">
              Your Trusted Dental Care Partner
            </h2>
            <p className="text-body-lg text-dark-gray max-w-2xl mx-auto">
              Providing world-class dental treatment with advanced technology and compassionate
              care in Sankarankovil since 2020.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="flex flex-col">
              {/* Story Paragraphs */}
              <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="space-y-4 mb-8">
                <p className="text-body text-dark-gray leading-[1.75]">
                  At Gomathi Dental Clinic, we believe everyone deserves a healthy, beautiful smile.
                  Led by {clinicInfo.doctor.name}, our clinic combines cutting-edge dental technology
                  with personalized care to deliver exceptional results.
                </p>
                <p className="text-body text-dark-gray leading-[1.75]">
                  Located in the heart of Sankarankovil, our state-of-the-art facility features RVG
                  Digital X-Ray, modern sterilization protocols, and a child-friendly environment —
                  ensuring comfortable treatment for patients of all ages.
                </p>
              </motion.div>

              {/* Stats Strip */}
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid grid-cols-3 rounded-xl bg-navy overflow-hidden mb-8"
              >
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`text-center px-2 py-4 sm:py-5 ${
                      i !== 0 ? 'border-l border-white/10' : ''
                    }`}
                  >
                    <div className="text-base sm:text-lg md:text-xl font-bold text-white mb-0.5">
                      {stat.value}
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-medium text-white/55 uppercase tracking-wide leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Trust Badges */}
              <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mt-auto">
                {trustBadges.map((badge, i) => (
                  <motion.div
                    key={badge.title}
                    {...scaleUp}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="bg-white rounded-xl p-4 border border-light-gray hover:border-blue/40 hover:shadow-card transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 bg-blue-faint">
                      <badge.icon className="text-sm text-blue" />
                    </div>
                    <h4 className="text-sm font-semibold text-near-black mb-0.5">{badge.title}</h4>
                    <p className="text-xs text-medium-gray leading-relaxed">{badge.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column — Consultants */}
            <div className="w-full max-w-[380px] mx-auto lg:max-w-none">
              <h3 className="text-h4 text-near-black font-semibold text-center lg:text-left mb-4">
                Consultants
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {consultants.map((consultant, i) => (
                <motion.div
                  key={consultant.name}
                  {...scaleUp}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-light-gray shadow-card group"
                >
                  <img
                    src={consultant.image}
                    alt={consultant.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent p-3 sm:p-4">
                    <h4 className="text-white font-semibold text-sm sm:text-base leading-tight">
                      {consultant.name}
                    </h4>
                    <p className="text-white/70 text-[11px] sm:text-xs uppercase tracking-wide mt-0.5">
                      {consultant.qualification}
                    </p>
                  </div>
                </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
