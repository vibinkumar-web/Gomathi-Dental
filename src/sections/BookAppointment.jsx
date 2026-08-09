import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaShieldAlt, FaPhone, FaClock } from 'react-icons/fa';
import { GradientMesh } from '@/components/GradientMesh';
import { FloatingParticles } from '@/components/FloatingParticles';
import { MagneticButton } from '@/components/MagneticButton';
import { treatmentOptions } from '@/data/siteData';

export function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: '',
    date: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name || formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }
    if (!formData.phone || !/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit mobile number';
    }
    if (!formData.treatment) {
      newErrors.treatment = 'Please select a treatment';
    }
    if (!formData.date) {
      newErrors.date = 'Please select a preferred date';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setFormData({ name: '', phone: '', treatment: '', date: '', message: '' });
    setErrors({});
    setIsSuccess(false);
  };

  const inputClass = (field: string) =>
    `w-full bg-white/5 border ${
      errors[field] ? 'border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-blue-light focus:ring-blue-light/20'
    } rounded-xl px-4 py-3.5 text-white placeholder-medium-gray text-sm md:text-base outline-none transition-all duration-200 focus:ring-[3px]`;

  return (
    <section id="appointment" className="relative bg-navy overflow-hidden">
      {/* Center Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255,45,143,0.15) 0%, rgba(0,87,231,0.1) 40%, transparent 70%)',
          animation: 'pulse-glow 4s ease-in-out infinite',
        }}
      />
      <GradientMesh variant="dark" />
      <FloatingParticles count={12} />

      <div className="relative z-10 section-padding">
        <div className="container-max mx-auto max-w-3xl">
          {/* Section Header */}
          <motion.div
            className="text-center mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-caption text-pink uppercase tracking-[0.1em] font-semibold mb-3 block">
              Book Appointment
            </span>
            <h2 className="text-h2 text-white mb-4">Schedule Your Visit</h2>
            <p className="text-body-lg text-medium-gray">
              Fill in your details and we'll confirm your appointment shortly.
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Animated Gradient Border */}
            <div className="absolute -inset-[1.5px] rounded-[34px] overflow-hidden">
              <div
                className="w-full h-full animate-spin-slow"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 0%, rgba(255,45,143,0.5) 25%, transparent 50%, rgba(0,87,231,0.5) 75%, transparent 100%)',
                }}
              />
            </div>

            <div className="relative glass-card rounded-[32px] p-6 md:p-10 lg:p-12">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Form Grid */}
                    <div className="grid md:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label className="text-sm font-medium text-white mb-2 block">
                          Full Name <span className="text-pink">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={inputClass('name')}
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="text-sm font-medium text-white mb-2 block">
                          Phone Number <span className="text-pink">*</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="10-digit mobile number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={inputClass('phone')}
                        />
                        {errors.phone && (
                          <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                        )}
                      </div>

                      {/* Treatment */}
                      <div>
                        <label className="text-sm font-medium text-white mb-2 block">
                          Treatment Required <span className="text-pink">*</span>
                        </label>
                        <select
                          value={formData.treatment}
                          onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                          className={`${inputClass('treatment')} appearance-none cursor-pointer`}
                        >
                          {treatmentOptions.map((option) => (
                            <option key={option} value={option === 'Select a treatment' ? '' : option} className="bg-navy text-white">
                              {option}
                            </option>
                          ))}
                        </select>
                        {errors.treatment && (
                          <p className="text-red-400 text-xs mt-1">{errors.treatment}</p>
                        )}
                      </div>

                      {/* Date */}
                      <div>
                        <label className="text-sm font-medium text-white mb-2 block">
                          Preferred Date <span className="text-pink">*</span>
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          min={new Date().toISOString().split('T')[0]}
                          className={inputClass('date')}
                        />
                        {errors.date && (
                          <p className="text-red-400 text-xs mt-1">{errors.date}</p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-sm font-medium text-white mb-2 block">
                        Message <span className="text-medium-gray">(Optional)</span>
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Any specific concerns?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`${inputClass('message')} resize-none`}
                        maxLength={500}
                      />
                    </div>

                    {/* Submit Button */}
                    <MagneticButton
                      onClick={() => {}}
                      className="w-full md:w-auto bg-pink text-white px-12 py-4 rounded-full text-lg font-semibold shadow-glow-pink hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-transparent text-white font-semibold"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Booking...
                          </span>
                        ) : (
                          'Book Appointment'
                        )}
                      </button>
                    </MagneticButton>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="text-center py-8"
                  >
                    {/* Success Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-blue flex items-center justify-center mx-auto mb-6"
                    >
                      <FaCheck className="text-3xl text-white" />
                    </motion.div>

                    <h3 className="text-h3 font-bold text-white mb-3">
                      Appointment Booked!
                    </h3>
                    <p className="text-body-lg text-white/80 mb-8 max-w-md mx-auto">
                      Thank you! Your appointment request has been received. We'll contact you
                      shortly to confirm.
                    </p>

                    <button
                      onClick={handleReset}
                      className="bg-white/10 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition-colors"
                    >
                      Book Another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10"
          >
            {[
              { icon: FaShieldAlt, text: 'Your data is secure' },
              { icon: FaPhone, text: "We'll call to confirm" },
              { icon: FaClock, text: 'Quick response' },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 text-medium-gray">
                <badge.icon className="text-sm" />
                <span className="text-sm">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
