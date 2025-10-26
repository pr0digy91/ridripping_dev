import { MapPin, Star, Clock } from 'lucide-react';
import MapMini from '../MapMini';
import Button from './Button';

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
    <div className="bg-yellow-500 rounded-2xl p-6 flex flex-col items-center shadow-2xl border border-yellow-400 min-h-[430px] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]">
      <MapMini lat={lat} lng={lng} label={name} />
      <div className="flex items-center mt-4 mb-2">
        <MapPin className="text-yellow-600 w-5 h-5 mr-2" />
        <span className="text-lg font-bold text-black">{name}</span>
      </div>
      <div className="text-black text-sm mb-4">{address}</div>
      <div className="flex items-center gap-2 text-black/80 text-base mb-6">
        <Star className="w-4 h-4 text-yellow-800 mr-1" />
        <span>{rating}</span>
        <span className="mx-2">|</span>
        <Clock className="w-4 h-4 text-yellow-800 mr-1" />
        <span className="font-semibold">{hours}</span>
      </div>
      <Button className="w-full py-3 !bg-black !text-yellow-300 !rounded-lg !border-0 transition-all duration-200 hover:!scale-100 hover:!shadow-none [&>span]:!text-yellow-300 [&>span]:hover:!text-yellow-300 [&>span]:group-hover:!text-yellow-300 [&>div]:!opacity-0 [&>div]:hover:!opacity-0">
        {buttonText}
      </Button>

    </div>
  );
};

export default OutletCard;