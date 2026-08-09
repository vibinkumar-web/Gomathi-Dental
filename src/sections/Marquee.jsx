import { motion } from 'framer-motion';

const marqueeItems = [
  'Government Approved',
  'BDS Qualified',
  '10,000+ Happy Patients',
  'Digital X-Ray',
  'Painless Treatment',
  '24/7 Emergency',
  'Child Friendly',
  'Modern Equipment',
];

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="py-6 bg-offwhite border-y border-light-gray overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((item, i) => (
            <span
              key={i}
              className="text-xs md:text-sm font-medium text-medium-gray uppercase tracking-wider mx-6 md:mx-8 flex items-center gap-3 flex-shrink-0"
            >
              <span className="text-pink">&#10022;</span>
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
