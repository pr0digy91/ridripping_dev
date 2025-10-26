import Card from './ui/Card';
import { Zap, Shield, Users } from 'lucide-react';

function About() {
  return (
    <section id="about" className="relative bg-brand-yellow py-24 px-4">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-yellow/70 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-yellow/90 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-black mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            Discover what makes us different from the rest
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            icon={Zap}
            title="Lightning Fast Performance"
            description="Experience unparalleled speed and efficiency with our cutting-edge technology. We've optimized every aspect to ensure your projects load in milliseconds."
          />

          <Card
            icon={Shield}
            title="Reliable & Secure"
            description="Built with enterprise-grade security and reliability. Your data is protected with the latest encryption standards and redundant backup systems."
          />

          <Card
            icon={Users}
            title="Expert Support"
            description="Our dedicated support team is available 24/7 to help you succeed. Get personalized assistance from industry experts whenever you need it."
          />
        </div>
      </div>
    </section>
  );
}

export default About;