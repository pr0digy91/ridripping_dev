import AnimatedCard from './ui/animated_card';
import { Award, Trophy, Crown } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="relative bg-brand-yellow py-24 px-4">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-yellow/70 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-yellow/90 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-black mb-4">
            Our Pricing
          </h2>
        </div>

        {/* Pricing Table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedCard
            icon={Award}
            title="Pay-Per-Wash ₹399"
            description="Perfect for one-time shine."
          />

          <AnimatedCard
            icon={Trophy}
            title="Essential (4x) ₹1,299"
            description="Save 19%. Best for monthly maintenance."
          />

          <AnimatedCard
            icon={Crown}
            title="Ultimate (10x) ₹2,599"
            description="Save 35%. Best Value."
          />
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-6">
          <span className="font-bold text-black">
            *All prices exclude GST.
          </span>
          <span className="text-black/70 ml-2">
            Membership unlocks exclusive slots, priority support, and rewards!
          </span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;