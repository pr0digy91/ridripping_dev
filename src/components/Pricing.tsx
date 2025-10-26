import Card from './ui/Card';
import { Sparkles, Calendar, BarChart3, Crown } from 'lucide-react';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card
            icon={Sparkles}
            title="One-Time Wash - ₹399"
            description="Single wash, all-in, any time."
            buttonText="Choose"
          />

          <Card
            icon={Calendar}
            title="4 Washes - ₹1,000"
            description="Monthly. Save 37%."
            buttonText="Choose"
          />

          <Card
            icon={BarChart3}
            title="12 Washes - ₹2,500"
            description="Quarterly. Save 47%."
            buttonText="Choose"
          />

          <Card
            icon={Crown}
            title="24 Washes - ₹4,000"
            description="Annual. Save 58%."
            buttonText="Choose"
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