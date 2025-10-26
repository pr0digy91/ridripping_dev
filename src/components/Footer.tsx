import { Car } from 'lucide-react';

const Footer = () => (
  <footer className="bg-yellow-500 py-4 w-full">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
      <span className="font-bold text-black tracking-wide flex items-center">
        © 2025 Ri'Drippin Car Wash
      </span>
      <span className="mx-2 text-black hidden sm:inline">|</span>
      <span className="text-black flex items-center gap-1">
        Made in Chennai
        <Car className="inline w-5 h-5 text-black ml-1 -mt-0.5" />
      </span>
      <span className="mx-2 text-black hidden sm:inline">|</span>
      <a
        href="mailto:support@ridrippin.com"
        className="font-semibold text-black hover:text-yellow-900 transition-colors duration-150 underline-offset-2 hover:underline"
      >
        Contact Support
      </a>
    </div>
  </footer>
);

export default Footer;