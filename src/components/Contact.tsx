import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Phone, Mail, Send, CheckCircle2, MessageSquare, 
  Trash2, Archive, Inbox, Clock, ExternalLink, HelpCircle, PhoneCall
} from 'lucide-react';
import { companyDetails, serviceCategories } from '../data';
import { ContactInquiry } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    serviceType: serviceCategories[0].title,
    message: ''
  });

  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [showAdminInbox, setShowAdminInbox] = useState(false);

  // Load inquiries from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('img_safe_inquiries');
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved inquiries", e);
      }
    } else {
      // Seed initial dummy inquiry to show it works
      const initialSeed: ContactInquiry[] = [
        {
          id: 'inq-seed-1',
          name: 'Juma Bakhresa',
          email: 'j.bakhresa@bakhresagroup.com',
          phone: '+255 786 200 000',
          subject: 'Bulk Sourcing for New Protective Gears',
          serviceType: 'Trading & Equipment Provision',
          message: 'Hello IMG Safe, we would like to request a quote for 500 sets of fire-retardant coveralls and 200 respiratory protection kits for our manufacturing warehouse team in Dar Es Salaam. Please send the catalog.',
          date: new Date(Date.now() - 3600000 * 2).toLocaleString(),
          status: 'new'
        }
      ];
      setInquiries(initialSeed);
      localStorage.setItem('img_safe_inquiries', JSON.stringify(initialSeed));
    }
  }, []);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full name is required.';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone number is required.';
    if (!formData.subject.trim()) errors.subject = 'Inquiry subject is required.';
    if (!formData.message.trim()) errors.message = 'Please type a message.';
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate safe API storage delay
    setTimeout(() => {
      const newInquiry: ContactInquiry = {
        id: `inq-${Date.now()}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        serviceType: formData.serviceType,
        message: formData.message,
        date: new Date().toLocaleString(),
        status: 'new'
      };

      const updated = [newInquiry, ...inquiries];
      setInquiries(updated);
      localStorage.setItem('img_safe_inquiries', JSON.stringify(updated));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        serviceType: serviceCategories[0].title,
        message: ''
      });

      // Clear success notification after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 800);
  };

  const handleInquiryStatus = (id: string, newStatus: 'replied' | 'archived') => {
    const updated = inquiries.map((inq) => 
      inq.id === id ? { ...inq, status: newStatus } : inq
    );
    setInquiries(updated);
    localStorage.setItem('img_safe_inquiries', JSON.stringify(updated));
  };

  const handleDeleteInquiry = (id: string) => {
    const updated = inquiries.filter((inq) => inq.id !== id);
    setInquiries(updated);
    localStorage.setItem('img_safe_inquiries', JSON.stringify(updated));
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0b1222] border-t border-slate-900 overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-[40%] right-[-15%] w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-15%] w-[400px] h-[400px] rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest font-bold">GET IN TOUCH</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Integrated Contact & Sourcing Hub
          </h2>
          <p className="text-sm text-slate-400 font-sans max-w-xl mx-auto">
            Contact us for expert safety advising, request quotes, or schedule on-site training sessions.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Contact Details, Real Direct triggers */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-2xl text-white">
                IMG Safe HQ Office
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Our operations team is available Monday through Friday, 8:00 AM to 5:00 PM, and Saturday, 08:00 AM to 1:00 PM (EAT). 
              </p>
            </div>

             {/* Structured Info items */}
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 shrink-0 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="block text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">Physical Address</span>
                  <span className="block text-sm text-white font-sans font-medium">
                    {companyDetails.contact.address}
                  </span>
                  <span className="block text-xs text-slate-350 font-sans">
                    {companyDetails.contact.cityCountry} • {companyDetails.contact.poBox}
                  </span>
                </div>
              </div>

              {/* Direct Phones */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 shrink-0 shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1 w-full">
                  <span className="block text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">Phone Calls (Standby)</span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {companyDetails.contact.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-blue-400 hover:border-blue-800 hover:bg-slate-950 transition shadow-md"
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                        <span>{phone}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* WhatsApp direct instant triggers */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 shrink-0 shadow-md">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="space-y-1 w-full">
                  <span className="block text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">WhatsApp Live Chat</span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {companyDetails.contact.whatsapps.map((whatsapp, idx) => (
                      <a
                        key={idx}
                        href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20IMG%20Safe,%20we%2527re%20visiting%20your%20portfolio%20and%20would%20like%20to%20inquire%20about%20your%20services.`}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-900/40 text-xs text-emerald-400 hover:bg-emerald-900/60 hover:text-emerald-300 hover:border-emerald-850 transition shadow-md"
                      >
                        <span>Message {whatsapp}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email direct triggers */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 shrink-0 shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="block text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">Email Sourcing Desk</span>
                  <a
                    href={`mailto:${companyDetails.contact.email}?subject=IMG%20Safe%20Service%20Inquiry`}
                    className="block text-sm text-white hover:text-blue-400 transition font-mono font-medium underline underline-offset-4"
                  >
                    {companyDetails.contact.email}
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0e1626]/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative">
              <h3 className="font-display font-semibold text-xl text-white mb-6">
                Submit an Official Corporate Inquiry
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Michael John"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:bg-slate-950 focus:ring-1 focus:ring-blue-600 transition-all ${
                        validationErrors.name ? 'border-red-500/50' : 'border-slate-800'
                      }`}
                    />
                    {validationErrors.name && (
                      <p className="text-[11px] text-red-500 font-sans">{validationErrors.name}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Corporate Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:bg-slate-950 focus:ring-1 focus:ring-blue-600 transition-all ${
                        validationErrors.email ? 'border-red-500/50' : 'border-slate-800'
                      }`}
                    />
                    {validationErrors.email && (
                      <p className="text-[11px] text-red-500 font-sans">{validationErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone & Service Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Phone / Mobile</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +255 786 205 254"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:bg-slate-950 focus:ring-1 focus:ring-blue-600 transition-all ${
                        validationErrors.phone ? 'border-red-500/50' : 'border-slate-800'
                      }`}
                    />
                    {validationErrors.phone && (
                      <p className="text-[11px] text-red-500 font-sans">{validationErrors.phone}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Service of Interest</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300 focus:outline-none focus:border-blue-600 focus:bg-slate-950 focus:text-white transition-all"
                    >
                      {serviceCategories.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Product Sourcing Only">Trade & Sourcing (Products Only)</option>
                      <option value="Other Sourcing">Other Logistics or Servicing</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Inquiry Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Sourcing quote / HSE Training Session"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:bg-slate-950 focus:ring-1 focus:ring-blue-600 transition-all ${
                      validationErrors.subject ? 'border-red-500/50' : 'border-slate-800'
                    }`}
                  />
                  {validationErrors.subject && (
                    <p className="text-[11px] text-red-500 font-sans">{validationErrors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Detailed Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide a detailed request describing your team size, logistical goals, or safety equipment specifications..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:bg-slate-950 focus:ring-1 focus:ring-blue-600 transition-all resize-none ${
                      validationErrors.message ? 'border-red-500/50' : 'border-slate-800'
                    }`}
                  />
                  {validationErrors.message && (
                    <p className="text-[11px] text-red-500 font-sans">{validationErrors.message}</p>
                  )}
                </div>

                {/* Submit button & State alerts */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-center flex items-center justify-center gap-2 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-600/25"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Corporate Inquiry</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Success feedback animation */}
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div
                      id="inquiry-success-alert"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-900/40 flex items-start gap-3 mt-4"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-emerald-300">Inquiry Received Successfully!</h4>
                        <p className="text-[11px] sm:text-xs text-emerald-400 leading-normal mt-1 font-sans">
                          Thank you. Your inquiry has been logged securely to local storage. You can view and manage it below in our Interactive Client Inbox panel.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </div>

        </div>

        {/* INTERACTIVE DEMO ADMIN PANEL: INQUIRIES INBOX */}
        <div className="border-t border-slate-900 pt-16 mt-16 space-y-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <h3 className="font-display font-semibold text-lg text-white">Interactive Client Inquiries Inbox</h3>
              </div>
              <p className="text-xs text-slate-400 font-sans">
                Reviewer Panel: Real-time storage of submitted forms. Submit the form above to see your inquiry appear here immediately!
              </p>
            </div>
            
            <button
              id="admin-inbox-toggle"
              onClick={() => setShowAdminInbox(!showAdminInbox)}
              className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-950 text-xs text-slate-300 font-mono transition-all duration-300 flex items-center gap-2 shadow-md"
            >
              <Inbox className="w-4 h-4 text-blue-400" />
              <span>{showAdminInbox ? 'Hide Admin Inbox' : 'Show Admin Inbox'} ({inquiries.length})</span>
            </button>
          </div>

          <AnimatePresence>
            {showAdminInbox && (
              <motion.div
                id="admin-inbox-panel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="bg-[#0e1626]/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-2xl">
                  {inquiries.length === 0 ? (
                    <div className="text-center py-12 space-y-2">
                      <HelpCircle className="w-8 h-8 text-slate-600 mx-auto" />
                      <p className="text-sm text-slate-400">No inquiries logged yet. Submit the contact form to see real-time updates.</p>
                    </div>
                  ) : (
                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                      {inquiries.map((inq) => {
                        const isNew = inq.status === 'new';
                        return (
                          <div
                            key={inq.id}
                            id={`inquiry-row-${inq.id}`}
                            className={`p-5 rounded-xl border transition-all ${
                              isNew
                                ? 'bg-blue-950/20 border-blue-900/60 shadow-lg'
                                : 'bg-slate-900/40 border-slate-800/80 opacity-90'
                            }`}
                          >
                            {/* Card Header row */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-850 pb-3 mb-3">
                              <div className="space-y-1">
                                <div className="flex items-center gap-2.5">
                                  <span className="font-display font-semibold text-sm text-white">{inq.name}</span>
                                  {isNew && (
                                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono uppercase font-bold tracking-wider bg-blue-950 text-blue-400 border border-blue-900/50">
                                      New Inquiry
                                    </span>
                                  )}
                                  {inq.status === 'replied' && (
                                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono uppercase font-bold tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-900/50">
                                      Replied
                                    </span>
                                  )}
                                </div>
                                <div className="text-xs text-slate-400 font-mono">
                                  <span>{inq.email} • {inq.phone}</span>
                                </div>
                              </div>

                              {/* Actions desk */}
                              <div className="flex items-center gap-2">
                                {isNew && (
                                  <button
                                    id={`inq-reply-btn-${inq.id}`}
                                    onClick={() => handleInquiryStatus(inq.id, 'replied')}
                                    className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-900 hover:bg-emerald-955 text-[10px] font-mono text-slate-400 hover:text-emerald-400 transition"
                                    title="Mark as Replied"
                                  >
                                    Mark Replied
                                  </button>
                                )}
                                <button
                                  id={`inq-delete-btn-${inq.id}`}
                                  onClick={() => handleDeleteInquiry(inq.id)}
                                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-red-900 hover:bg-red-955 text-slate-400 hover:text-red-400 transition"
                                  title="Delete Permanent"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>

                            {/* Body detail row */}
                            <div className="space-y-3">
                              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                                <div>
                                  <span className="text-slate-500">Service Area:</span>
                                  <span className="block text-slate-300 font-medium">{inq.serviceType}</span>
                                </div>
                                <div>
                                  <span className="text-slate-500">Inquiry Subject:</span>
                                  <span className="block text-slate-300 font-medium">{inq.subject}</span>
                                </div>
                              </div>
                              <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-850 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                                {inq.message}
                              </div>
                              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  <span>Submitted {inq.date}</span>
                                </div>
                                <span>ID: {inq.id}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
