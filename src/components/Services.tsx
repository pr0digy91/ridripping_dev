import Card from './Card';
import { Zap, Shield, Sparkles, Rocket, Target, TrendingUp } from 'lucide-react';

function Services() {
  return (
    <section id="services" className="relative bg-black py-24 px-4">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-yellow-500 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            icon={Sparkles}
            title="Modern Design"
            description="Beautiful, intuitive interfaces that captivate users. Our designs blend aesthetics with functionality for exceptional user experiences."
          />

          <Card
            icon={Rocket}
            title="Rapid Deployment"
            description="Launch faster with our streamlined deployment process. From concept to production in record time without compromising quality."
          />

          <Card
            icon={Target}
            title="Precision Targeting"
            description="Reach your ideal audience with data-driven strategies. We help you connect with customers who matter most to your business."
          />

          <Card
            icon={TrendingUp}
            title="Growth Focused"
            description="Scale your business with confidence. Our solutions are built to grow alongside your success and adapt to changing needs."
          />
        </div>
      </div>
    </section>
  );
}

export default Services;