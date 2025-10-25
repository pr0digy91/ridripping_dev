function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2 group cursor-pointer">
              <img src="/src/assets/logo/black_white_cropped.png" alt="Ri'Drippin Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="nav-link transition-colors duration-300 font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="nav-link transition-colors duration-300 font-medium relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="nav-link transition-colors duration-300 font-medium relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#portfolio" className="nav-link transition-colors duration-300 font-medium relative group">
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="nav-link transition-colors duration-300 font-medium relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* CTA Button */}
          {/* <div className="hidden md:block">
            <button className="px-6 py-2.5 bg-yellow-500 text-black font-semibold rounded-lg transition-all duration-300 hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:scale-105">
              Get Started
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <button className="md:hidden text-yellow-500 hover:text-yellow-400 transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;