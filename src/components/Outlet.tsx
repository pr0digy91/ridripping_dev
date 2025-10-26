import OutletCard from './ui/OutletCard';
import { outletData } from '../data/outlets';

const OutletSelection = () => {
  return (
    <section id="outlet" className="relative bg-black py-24 px-4">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-yellow/30 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-yellow rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold text-brand-yellow mb-2">
            Find a Ri'Drippin Outlet
          </h2>
        </div>

        {/* Outlets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {outletData.map((outlet) => (
            <OutletCard
              key={outlet.name}
              name={outlet.name}
              address={outlet.address}
              rating={outlet.rating}
              hours={outlet.hours}
              lat={outlet.lat}
              lng={outlet.lng}
              buttonText={outlet.buttonText}
            />
          ))}
        </div>

        {/* Show More Button */}
        {/* <div className="flex justify-end">
          <button className="px-6 py-3 bg-brand-yellow text-black rounded-full font-semibold text-lg shadow-lg hover:bg-brand-yellow/90 transition-all duration-300">
            Show More
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default OutletSelection;