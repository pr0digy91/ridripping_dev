import Button from './ui/button';
import { useBubblePhysics } from '../hooks/useBubblePhysics';

function Hero() {
  const bubbles = useBubblePhysics();

  return (
    <section id="home" className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-brand-yellow/10 to-black"></div>

      {/* Physics-based bubble patterns */}
      <div className="absolute inset-0">
        {bubbles.map(bubble => (
          <div
            key={bubble.id}
            className="bubble absolute rounded-full border border-brand-yellow/40"
            style={{
              left: bubble.x - bubble.size / 2,
              top: bubble.y - bubble.size / 2,
              width: bubble.size,
              height: bubble.size,
              opacity: bubble.opacity, // Individual bubble opacity (already includes HERO_ANIMATION_OPACITY)
              background: `radial-gradient(circle at 30% 30%, rgba(255, 210, 0, 0.1), transparent)`,
              boxShadow: `0 0 ${bubble.size / 4}px rgba(255, 210, 0, 0.2)`,
              transition: 'none' // Disable CSS transitions for physics
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 text-center">
        {/* Badge */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full backdrop-blur-sm">
          <span className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse"></span>
          <Car className="w-8 h-8 text-brand-yellow" />
        </div> */}

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-brand-yellow/80 via-brand-yellow to-brand-yellow/80 bg-clip-text text-transparent animate-gradient">
            Drive In
          </span>
          <br />
          <span className="text-white">Drip Out</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Chennai’s fastest, tech-powered, eco-friendly car wash service. <br />
          Automated, Efficient, and Sparkling results everytime.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button>Get Started</Button>
          <Button>Learn More</Button>
        </div>
        {/* Stats or features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="group p-6 bg-brand-yellow/5 border border-brand-yellow/20 rounded-2xl backdrop-blur-sm hover:bg-brand-yellow/10 transition-all duration-300">
            <div className="text-4xl font-bold text-brand-yellow mb-2">5–8%</div>
            <div className="text-gray-400 text-sm">Market CAGR (2022–2030)</div>
          </div>

          <div className="group p-6 bg-brand-yellow/5 border border-brand-yellow/20 rounded-2xl backdrop-blur-sm hover:bg-brand-yellow/10 transition-all duration-300">
            <div className="text-4xl font-bold text-brand-yellow mb-2">1.95M</div>
            <div className="text-gray-400 text-sm">New Vehicles in TN (2024)</div>
          </div>

          <div className="group p-6 bg-brand-yellow/5 border border-brand-yellow/20 rounded-2xl backdrop-blur-sm hover:bg-brand-yellow/10 transition-all duration-300">
            <div className="text-4xl font-bold text-brand-yellow mb-2">₹400–₹800</div>
            <div className="text-gray-400 text-sm">Avg. Willingness to Pay per Wash</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-yellow rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-brand-yellow rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;