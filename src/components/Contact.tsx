import Button from './ui/button';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-24 px-4">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-yellow/30 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow/50 rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold text-brand-yellow mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-brand-yellow/80 max-w-2xl mx-auto">
            Ready to start your project? Let's create something amazing together
          </p>
        </div>

        {/* Contact Form */}
        <div className="
          group
          relative
          rounded-2xl
          p-8 sm:p-12
          bg-gradient-to-br from-white/1 via-gray-200/1 to-gray-300/5
          border-2
          border-brand-yellow/40
          shadow-xl
          overflow-hidden
          backdrop-blur-[12px]
          transition-all duration-500
        "
        style={{
          boxShadow: "0 8px 48px 0 rgba(8,8,16,0.28)",
        }}>
          {/* Extra Glass Layer for Reflection */}
          <div className="absolute inset-0 pointer-events-none rounded-2xl backdrop-blur-lg bg-white/5" />
          {/* Soft Shine Accent */}
          <div className="absolute left-6 right-6 top-0 h-2 rounded-xl blur-[10px] bg-brand-yellow/10" />
          
          {/* Form Content */}
          <form className="space-y-6 relative z-10">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-brand-yellow font-semibold mb-2 text-sm uppercase tracking-wide">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-gradient-to-br from-white/1 via-gray-200/1 to-gray-300/5 border border-brand-yellow/40 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/30 backdrop-blur-[12px] transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-brand-yellow font-semibold mb-2 text-sm uppercase tracking-wide">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-gradient-to-br from-white/1 via-gray-200/1 to-gray-300/5 border border-brand-yellow/40 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/30 backdrop-blur-[12px] transition-all duration-300"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-brand-yellow font-semibold mb-2 text-sm uppercase tracking-wide">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 bg-gradient-to-br from-white/1 via-gray-200/1 to-gray-300/5 border border-brand-yellow/40 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/30 backdrop-blur-[12px] transition-all duration-300"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-brand-yellow font-semibold mb-2 text-sm uppercase tracking-wide">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 bg-gradient-to-br from-white/1 via-gray-200/1 to-gray-300/5 border border-brand-yellow/40 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/30 backdrop-blur-[12px] transition-all duration-300 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="w-full">
              <Button type="submit" className="w-full rounded-lg">
                Send Message
              </Button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-brand-yellow/30 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-brand-yellow text-sm font-semibold uppercase tracking-wide mb-1">Email</div>
                <div className="text-gray-200">contact@ridrippin.com</div>
              </div>
              {/* <div>
                <div className="text-brand-yellow text-sm font-semibold uppercase tracking-wide mb-1">Phone</div>
                <div className="text-gray-200">+1 (000) 000-0000</div>
              </div> */}
              <div>
                <div className="text-brand-yellow text-sm font-semibold uppercase tracking-wide mb-1">Location</div>
                <div className="text-gray-200">Chennai, IN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}