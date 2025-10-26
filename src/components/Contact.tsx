// import Button from './ui/Button';

// export default function Contact() {
//   return (
//     <section id="contact" className="relative bg-yellow-500 py-24 px-4">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-50"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-600 rounded-full blur-3xl opacity-50"></div>

//       <div className="relative z-10 max-w-4xl mx-auto">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h2 className="text-5xl sm:text-6xl font-bold text-black mb-4">
//             Get In Touch
//           </h2>
//           <p className="text-xl text-black/70 max-w-2xl mx-auto">
//             Ready to start your project? Let's create something amazing together
//           </p>
//         </div>

//         {/* Contact Form */}
//         <div className="bg-black rounded-2xl p-8 sm:p-12 shadow-2xl">
//           <form className="space-y-6">
//             {/* Name */}
//             <div>
//               <label htmlFor="name" className="block text-yellow-500 font-semibold mb-2 text-sm uppercase tracking-wide">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="John Doe"
//                 className="w-full px-4 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 transition-all duration-300"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label htmlFor="email" className="block text-yellow-500 font-semibold mb-2 text-sm uppercase tracking-wide">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="john@example.com"
//                 className="w-full px-4 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 transition-all duration-300"
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label htmlFor="phone" className="block text-yellow-500 font-semibold mb-2 text-sm uppercase tracking-wide">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 placeholder="+1 (555) 000-0000"
//                 className="w-full px-4 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 transition-all duration-300"
//               />
//             </div>

//             {/* Message */}
//             <div>
//               <label htmlFor="message" className="block text-yellow-500 font-semibold mb-2 text-sm uppercase tracking-wide">
//                 Your Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={6}
//                 placeholder="Tell us about your project..."
//                 className="w-full px-4 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 transition-all duration-300 resize-none"
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <div className="w-full">
//               <Button type="submit" className="!w-full !rounded-lg !bg-yellow-500 !text-black !font-bold !text-lg !border-yellow-500 hover:!bg-yellow-400">
//                 Send Message
//               </Button>
//             </div>
//           </form>

//           {/* Contact Info */}
//           <div className="mt-12 pt-8 border-t border-yellow-500/20">
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
//               <div>
//                 <div className="text-yellow-500 text-sm font-semibold uppercase tracking-wide mb-1">Email</div>
//                 <div className="text-gray-400">hello@example.com</div>
//               </div>
//               <div>
//                 <div className="text-yellow-500 text-sm font-semibold uppercase tracking-wide mb-1">Phone</div>
//                 <div className="text-gray-400">+1 (555) 123-4567</div>
//               </div>
//               <div>
//                 <div className="text-yellow-500 text-sm font-semibold uppercase tracking-wide mb-1">Location</div>
//                 <div className="text-gray-400">San Francisco, CA</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import UnreactiveButton from './ui/Unreactive_button';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-24 px-4">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-900 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-700 rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold text-yellow-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
            Ready to start your project? Let's create something amazing together
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-yellow-500 rounded-2xl p-8 sm:p-12 shadow-2xl">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-black font-semibold mb-2 text-sm uppercase tracking-wide">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-black/5 border border-yellow-500/80 rounded-lg text-black placeholder-gray-600 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/30 transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-black font-semibold mb-2 text-sm uppercase tracking-wide">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-black/5 border border-yellow-500/80 rounded-lg text-black placeholder-gray-600 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/30 transition-all duration-300"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-black font-semibold mb-2 text-sm uppercase tracking-wide">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 bg-black/5 border border-yellow-500/80 rounded-lg text-black placeholder-gray-600 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/30 transition-all duration-300"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-black font-semibold mb-2 text-sm uppercase tracking-wide">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 bg-black/5 border border-yellow-500/80 rounded-lg text-black placeholder-gray-600 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/30 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="w-full">
              <UnreactiveButton type="submit" className="!w-full !rounded-lg !bg-black !text-yellow-300 !font-bold !text-lg !border-0 hover:!bg-gray-900 hover:!text-yellow-200">
                Send Message
              </UnreactiveButton>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-yellow-700/30">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-black text-sm font-semibold uppercase tracking-wide mb-1">Email</div>
                <div className="text-black/80">hello@example.com</div>
              </div>
              <div>
                <div className="text-black text-sm font-semibold uppercase tracking-wide mb-1">Phone</div>
                <div className="text-black/80">+1 (555) 123-4567</div>
              </div>
              <div>
                <div className="text-black text-sm font-semibold uppercase tracking-wide mb-1">Location</div>
                <div className="text-black/80">San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}