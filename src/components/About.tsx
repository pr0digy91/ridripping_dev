import AnimatedCard from './ui/animated_card';
import { Leaf, Zap, Smartphone } from 'lucide-react';

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
          <AnimatedCard
            icon={Zap}
            title="Speed Redefined"
            bold_text="Revolutionary Speed Meets Premium Care"
            description="Advanced automatic systems clean thoroughly and fast. Drive in, drive out renewed."
          />

          <AnimatedCard
            icon={Leaf}
            title="Responsible Innovation"
            bold_text="Renewable by Design"
            description="Fully solar-powered and recycling 80% of water—no untreated water ever discharged. Your wash at Ri'drippin accelerates 8 key UN SDGs."
          />

          <AnimatedCard
            icon={Smartphone}
            title="Remote Control"
            bold_text="Reimagine Convenience"
            description="Manage your wash from anywhere—book slots, pay instantly, track progress live."
          />
        </div>
      </div>
    </section>
  );
}

export default About;