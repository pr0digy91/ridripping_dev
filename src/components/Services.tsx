import Card from './ui/card';
import { Sparkles, CalendarPlus, EvCharger, Coffee, Gift, Leaf } from 'lucide-react';

function Services() {
  return (
    <section id="services" className="relative bg-black py-24 px-4">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,210,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,210,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-brand-yellow mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            icon={Sparkles}
            title="Touchless Wash"
            bold_text="Remarkable Results, Zero Contact"
            description="Revolutionary sensors restore your shine without a single touch."
          />

          <Card
            icon={CalendarPlus}
            title="App Booking"
            bold_text="Ready When You Are"
            description="Pre-book all services through the app. Track everything in real-time, no surprises."
          />

          <Card
            icon={EvCharger}
            title="EV Charging"
            bold_text="Recharged by the Sun"
            description="100% solar-generated fast charging stations—eco-friendly energy for your electric ride."
          />

          <Card
            icon={Coffee}
            title="Cafe"
            bold_text="Relax & Replenish"
            description="Recharge yourself while we restore your car's brilliance."
          />

          <Card
            icon={Gift}
            title="Loyalty Rewards"
            bold_text="Return & Reap Rewards"
            description="Recurring visits unlock remarkable deals and exclusive member perks."
          />

          <Card
            icon={Leaf}
            title="Green Tech"
            bold_text="Refreshingly Responsible"
            description="Renewable energy meets recycled water—redefining eco-friendly care."
          />
        </div>
      </div>
    </section>
  );
}

export default Services;