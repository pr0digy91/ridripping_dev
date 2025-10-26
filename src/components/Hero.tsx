// import Button from './ui/button';
import { useBubblePhysics } from '../hooks/useBubblePhysics';

function Hero() {
  const bubbles = useBubblePhysics();

  return (
    <section id="home" className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden pt-20">
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
        <h1 className="font-bold mb-6 leading-tight" style={{ fontFamily: "'Architype Aubette W90', sans-serif", fontSize: '8rem' }}>
          <span className="bg-gradient-to-r from-brand-yellow/80 via-brand-yellow to-brand-yellow/80 bg-clip-text text-transparent animate-gradient">
            DRIVE IN
          </span><span className="text-white"> DRIP OUT</span>
          <br />
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
          India's fastest automated wash. Tech-driven. Eco-friendly. Always spotless.<br />
          Superior results in record time because your car deserves nothing less.
        </p>

        {/* CTA Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button>Get Started</Button>
        </div> */}
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