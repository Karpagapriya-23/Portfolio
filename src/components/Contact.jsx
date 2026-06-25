import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const emailAddress = 'karpagapriyak24@gmail.com';
  const phoneNumber = '6383073699';

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous states
    setErrorMessage('');
    setSubmitSuccess(false);

    // Validation
    const nameVal = formState.name.trim();
    const emailVal = formState.email.trim();
    const subjectVal = formState.subject.trim();
    const messageVal = formState.message.trim();

    if (!nameVal || !emailVal || !subjectVal || !messageVal) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: nameVal,
          email: emailVal,
          subject: subjectVal,
          message: messageVal,
          _subject: `New Portfolio Message: ${subjectVal}`
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again later.');
      }

      const data = await response.json();
      if (data.success === 'true' || data.success === true) {
        setSubmitSuccess(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Form submission failed.');
      }
    } catch (err) {
      setErrorMessage(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-dot-pattern">
      {/* Decorative Aura Orb */}
      <div className="absolute top-[40%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-violet-600/5 dark:bg-violet-600/10 glow-orb pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-blue-500/5 dark:bg-blue-500/10 glow-orb pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-gray-900 dark:text-white"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-violet-600 rounded-full mt-3 mx-auto"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base"
          >
            Let's connect! Have an internship opportunity, placement project, or general query?
          </motion.p>
        </div>

        {/* Outer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Detail Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl glass-panel relative group shadow-md hover:shadow-lg transition-all border border-gray-200/50 dark:border-gray-800/50 flex items-start gap-4"
            >
              <div className="p-3 rounded-2xl bg-violet-600/10 text-violet-600 dark:text-violet-400 shadow-inner">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-600 block mb-1">
                  Email Address
                </span>
                <a 
                  href={`mailto:${emailAddress}`}
                  className="font-display font-bold text-gray-900 dark:text-white text-sm md:text-base hover:text-violet-600 dark:hover:text-violet-400 transition-colors block truncate"
                >
                  {emailAddress}
                </a>
              </div>
              <button
                onClick={() => copyToClipboard(emailAddress, 'email')}
                className="p-2 rounded-xl border border-gray-200/50 dark:border-gray-800/50 bg-white/40 dark:bg-black/40 text-gray-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors cursor-pointer self-center"
                aria-label="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-3xl glass-panel relative group shadow-md hover:shadow-lg transition-all border border-gray-200/50 dark:border-gray-800/50 flex items-start gap-4"
            >
              <div className="p-3 rounded-2xl bg-violet-600/10 text-violet-600 dark:text-violet-400 shadow-inner">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-600 block mb-1">
                  Phone Number
                </span>
                <a 
                  href={`tel:${phoneNumber}`}
                  className="font-display font-bold text-gray-900 dark:text-white text-sm md:text-base hover:text-violet-600 dark:hover:text-violet-400 transition-colors block"
                >
                  +91 {phoneNumber}
                </a>
              </div>
              <button
                onClick={() => copyToClipboard(phoneNumber, 'phone')}
                className="p-2 rounded-xl border border-gray-200/50 dark:border-gray-800/50 bg-white/40 dark:bg-black/40 text-gray-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors cursor-pointer self-center"
                aria-label="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-3xl glass-panel relative group shadow-md hover:shadow-lg transition-all border border-gray-200/50 dark:border-gray-800/50 flex items-start gap-4"
            >
              <div className="p-3 rounded-2xl bg-violet-600/10 text-violet-600 dark:text-violet-400 shadow-inner">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-600 block mb-1">
                  Location
                </span>
                <span className="font-display font-bold text-gray-900 dark:text-white text-sm md:text-base block">
                  Gobichettipalayam, Erode
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-500 font-medium block mt-0.5">
                  Tamil Nadu, India
                </span>
              </div>
            </motion.div>

            {/* Social handles block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-3xl glass-panel relative shadow-md border border-gray-200/50 dark:border-gray-800/50 flex flex-col justify-center items-center text-center overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-tr from-violet-500/5 to-transparent pointer-events-none" />
              <h4 className="font-display font-bold text-gray-800 dark:text-gray-200 mb-4 text-sm">
                Follow my work & connect on social networks
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Karpagapriya-23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-black/40 hover:border-violet-500 hover:text-violet-500 font-medium text-xs transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/karpagapriya-k-39572b323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-black/40 hover:border-violet-500 hover:text-violet-500 font-medium text-xs transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-4 h-4 text-violet-500" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>

          </div>

          {/* Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 md:p-10 rounded-3xl glass-panel relative shadow-lg border border-gray-200/50 dark:border-gray-800/50"
          >
            {/* Visual shine */}
            <span className="absolute inset-0 bg-gradient-to-tr from-violet-500/5 to-transparent pointer-events-none" />

            <h3 className="font-display font-extrabold text-2xl text-gray-900 dark:text-white tracking-tight mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-600 block pl-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-sm font-medium"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-600 block pl-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="johndoe@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-sm font-medium"
                  required
                />
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-600 block pl-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  placeholder="Internship Inquiry / Project Proposal"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-sm font-medium"
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-600 block pl-1">
                  Message Content
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Your message details..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-sm font-medium resize-none"
                  required
                />
              </div>

              {/* Submit Success Message */}
              {submitSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/20"
                >
                  ✓ Thank you for contacting me. I will get back to you soon.
                </motion.div>
              )}

              {/* Submit Error Message */}
              {errorMessage && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-semibold border border-rose-500/20"
                >
                  ✕ {errorMessage}
                </motion.div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] flex items-center justify-center gap-2 hover:scale-[1.01] disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
