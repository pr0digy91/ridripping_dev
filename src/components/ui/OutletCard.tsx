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
    <div className="bg-brand-yellow rounded-2xl p-6 flex flex-col items-center shadow-2xl border border-brand-yellow/80 min-h-[430px] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]">
      <MapMini lat={lat} lng={lng} label={name} />
      <div className="flex items-center mt-4 mb-2">
        <MapPin className="text-black w-5 h-5 mr-2" />
        <span className="text-lg font-bold text-black">{name}</span>
      </div>
      <div className="text-black text-sm mb-4">{address}</div>
      <div className="flex items-center gap-2 text-black/80 text-base mb-6">
        <Star className="w-4 h-4 text-black/70 mr-1" />
        <span>{rating}</span>
        <span className="mx-2">|</span>
        <Clock className="w-4 h-4 text-black/70 mr-1" />
        <span className="font-semibold">{hours}</span>
      </div>
      <UnreactiveButton className="w-full py-3">
        {buttonText}
      </UnreactiveButton>

    </div>
  );
};

export default OutletCard;