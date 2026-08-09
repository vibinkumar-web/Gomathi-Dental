import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaWhatsapp,
  FaExternalLinkAlt,
  FaEnvelope,
} from 'react-icons/fa';
import { clinicInfo } from '@/data/siteData';

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FAFBFF 0%, #FFF3FB 50%, #F0F6FF 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-[-80px] right-[-80px] w-[340px] h-[340px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FF2D8F 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0057E7 0%, transparent 70%)' }} />

      <div className="relative z-10 section-padding">
        <div className="container-max mx-auto">

          {/* ── Header ── */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-caption text-pink uppercase tracking-[0.18em] font-bold mb-2">
              <span className="w-6 h-px bg-gradient-to-r from-transparent to-pink" />
              Get in Touch
              <span className="w-6 h-px bg-gradient-to-l from-transparent to-pink" />
            </span>
            <h2 className="text-h2 text-near-black mb-2">
              We'd Love to <span className="gradient-text">Hear From You</span>
            </h2>
            <p className="text-body text-dark-gray max-w-lg mx-auto">
              Visit us, call us, or send a message — we're always here for your dental needs.
            </p>
          </motion.div>

          {/* ── Main layout ── */}
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">

            {/* ── Left: Dark rich info panel ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="relative rounded-3xl overflow-hidden flex flex-col justify-between"
              style={{
                background: 'linear-gradient(145deg, #0A1628 0%, #0D1E3C 60%, #0A1628 100%)',
              }}
            >
              {/* Inner glow */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #FF2D8F 0%, transparent 70%)' }} />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #0057E7 0%, transparent 70%)' }} />

              <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-between gap-6">

                {/* Info rows */}
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex gap-3.5 items-start">
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-pink/15 border border-pink/20 flex items-center justify-center">
                      <FaMapMarkerAlt className="text-pink text-xs" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-medium-gray font-semibold mb-0.5">Address</p>
                      <p className="text-white/85 text-xs md:text-sm leading-relaxed">{clinicInfo.address.full}</p>
                      <a
                        href="https://maps.app.goo.gl/v2WmYPEZTsisiqDW8"
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-1 text-xs text-pink hover:text-pink-light transition-colors font-medium"
                      >
                        Get Directions <FaExternalLinkAlt className="text-[8px]" />
                      </a>
                    </div>
                  </div>

                  <div className="h-px bg-white/[0.06]" />

                  {/* Phones */}
                  <div className="flex gap-3.5 items-start">
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue/15 border border-blue/20 flex items-center justify-center">
                      <FaPhone className="text-blue-light text-xs" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-medium-gray font-semibold mb-0.5">Phone</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        {clinicInfo.phones.map((ph) => (
                          <a key={ph} href={`tel:${ph.replace(/\s/g, '')}`}
                            className="text-white/85 text-xs md:text-sm hover:text-white transition-colors">{ph}</a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-white/[0.06]" />

                  {/* Hours */}
                  <div className="flex gap-3.5 items-start">
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-light/15 border border-blue-light/20 flex items-center justify-center">
                      <FaClock className="text-blue-sky text-xs" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-medium-gray font-semibold mb-0.5">Hours</p>
                      <p className="text-white/85 text-xs md:text-sm leading-relaxed">{clinicInfo.hours.weekday}</p>
                      <p className="text-medium-gray text-[11px] mt-0.5">{clinicInfo.hours.sunday}</p>
                    </div>
                  </div>

                  <div className="h-px bg-white/[0.06]" />

                  {/* Doctor */}
                  <div className="flex gap-3.5 items-start">
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-pink/10 border border-pink/15 flex items-center justify-center">
                      <FaEnvelope className="text-pink text-xs" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-medium-gray font-semibold mb-0.5">Doctor</p>
                      <p className="text-white/85 text-xs md:text-sm">{clinicInfo.doctor.name} · {clinicInfo.doctor.qualification}</p>
                      <p className="text-medium-gray text-[11px] mt-0.5">Reg. {clinicInfo.doctor.registration}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom action buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={`https://wa.me/${clinicInfo.whatsapp}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white text-xs md:text-sm font-semibold hover:bg-white/15 transition-all duration-300"
                  >
                    <FaWhatsapp className="text-sm" /> WhatsApp
                  </a>
                  <a
                    href={`tel:${clinicInfo.phones[0].replace(/\s/g, '')}`}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-xs md:text-sm font-semibold transition-all duration-300 shadow-glow-pink"
                    style={{ background: 'linear-gradient(135deg, #FF2D8F, #FF5AAE)' }}
                  >
                    <FaPhone className="text-sm" /> Call
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ── Right: Map + mini stat chips ── */}
            <div className="flex flex-col justify-between gap-4">
              {/* Stat chips row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-3 gap-3"
              >
                {[
                  { value: '10K+', label: 'Happy Patients', color: 'text-pink' },
                  { value: '15+', label: 'Years of Care', color: 'text-blue' },
                  { value: '9+', label: 'Treatments', color: 'text-blue-light' },
                ].map((stat) => (
                  <div key={stat.label}
                    className="bg-white rounded-2xl p-3 text-center shadow-card border border-light-gray/60"
                  >
                    <p className={`text-xl font-extrabold leading-none mb-1 ${stat.color}`}>{stat.value}</p>
                    <p className="text-[10px] text-dark-gray leading-tight font-medium">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* Compact Map */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden bg-white shadow-card border border-light-gray/60 flex-1 flex flex-col"
                style={{ minHeight: '220px' }}
              >
                {/* Map header */}
                <div className="flex items-center justify-between px-3.5 py-2 border-b border-light-gray/70 bg-white">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #FF2D8F, #0057E7)' }}>
                      <FaMapMarkerAlt className="text-white text-[8px]" />
                    </div>
                    <span className="text-xs font-semibold text-near-black">Gomathi Dental Clinic</span>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/v2WmYPEZTsisiqDW8"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] text-blue hover:text-pink font-semibold transition-colors"
                  >
                    Open Maps <FaExternalLinkAlt className="text-[8px]" />
                  </a>
                </div>

                <div className="w-full flex-1 min-h-[180px]">
                  <iframe
                    title="Gomathi Dental Clinic Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5!2d77.5395342!3d9.1746101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06978408700719%3A0xe50fc7daebf911f8!2sGOMATHI%20DENTAL%20CARE!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%" height="100%"
                    style={{ border: 0, width: '100%', height: '100%', minHeight: '180px', display: 'block' }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>

              {/* Registration badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center gap-3 bg-white rounded-2xl p-3 md:p-3.5 shadow-card border border-light-gray/60"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #FFF0F7, #F0F6FF)' }}>
                  <span className="gradient-text text-base font-black">✓</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-near-black">Government Approved Clinic</p>
                  <p className="text-[10px] text-medium-gray mt-0.5">
                    Reg. {clinicInfo.doctor.registration} · {clinicInfo.doctor.council}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
