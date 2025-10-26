import { MapPin, Star, Clock } from 'lucide-react';
import MapMini from '../MapMini';
import UnreactiveButton from './Unreactive_button';

interface OutletCardProps {
  name: string;
  address: string;
  rating: string;
  hours: string;
  lat: number;
  lng: number;
  buttonText: string;
}

const OutletCard = ({ name, address, rating, hours, lat, lng, buttonText }: OutletCardProps) => {
  return (
    <div
      className="
        group
        relative
        rounded-2xl
        p-6
        bg-gradient-to-br from-white/1 via-gray-200/1 to-gray-300/5
        border-2
        border-brand-yellow/40
        shadow-xl
        overflow-hidden
        backdrop-blur-[12px]
        hover:scale-[1.022]
        transition-all duration-500
        flex flex-col items-center
        min-h-[430px]
      "
      style={{
        boxShadow: "0 8px 48px 0 rgba(8,8,16,0.28)",
      }}
      data-section="glass-card"
    >
      {/* Extra Glass Layer for Reflection */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl backdrop-blur-lg bg-white/5" />
      {/* Soft Shine Accent */}
      <div className="absolute left-6 right-6 top-0 h-2 rounded-xl blur-[10px] bg-brand-yellow/10" />
      
      {/* Card Content */}
      <div className="flex flex-col items-center z-10 relative w-full">
        {/* Map */}
        <MapMini lat={lat} lng={lng} label={name} />
        
        {/* Outlet Name */}
        <div className="flex items-center mt-4 mb-2">
          <MapPin className="text-brand-yellow w-5 h-5 mr-2" />
          <span className="text-lg font-bold text-brand-yellow">{name}</span>
        </div>
        
        {/* Address */}
        <div className="text-gray-200 text-sm mb-4 text-center">{address}</div>
        
        {/* Rating and Hours */}
        <div className="flex items-center gap-2 text-gray-200 text-base mb-6">
          <Star className="w-4 h-4 text-brand-yellow/70 mr-1" />
          <span>{rating}</span>
          <span className="mx-2">|</span>
          <Clock className="w-4 h-4 text-brand-yellow/70 mr-1" />
          <span className="font-semibold">{hours}</span>
        </div>
        
        {/* Button */}
        <UnreactiveButton className="w-full py-3">
          {buttonText}
        </UnreactiveButton>
      </div>
    </div>
  );
};

export default OutletCard;