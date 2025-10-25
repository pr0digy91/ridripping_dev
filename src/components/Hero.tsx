import Button from './Button';

function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-yellow-900/10 to-black"></div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 border-2 border-yellow-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-yellow-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-yellow-500/30 rotate-45"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 text-center">
        {/* Badge */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-yellow-500/10 border border-yellow-500/30 rounded-full backdrop-blur-sm">
          <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
          <Car className="w-8 h-8 text-yellow-500" />
        </div> */}

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200 bg-clip-text text-transparent animate-gradient">
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
          <div className="group p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-2xl backdrop-blur-sm hover:bg-yellow-500/10 transition-all duration-300">
            <div className="text-4xl font-bold text-yellow-500 mb-2">5–8%</div>
            <div className="text-gray-400 text-sm">Market CAGR (2022–2030)</div>
          </div>

          <div className="group p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-2xl backdrop-blur-sm hover:bg-yellow-500/10 transition-all duration-300">
            <div className="text-4xl font-bold text-yellow-500 mb-2">1.95M</div>
            <div className="text-gray-400 text-sm">New Vehicles in TN (2024)</div>
          </div>

          <div className="group p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-2xl backdrop-blur-sm hover:bg-yellow-500/10 transition-all duration-300">
            <div className="text-4xl font-bold text-yellow-500 mb-2">₹400–₹800</div>
            <div className="text-gray-400 text-sm">Avg. Willingness to Pay per Wash</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;