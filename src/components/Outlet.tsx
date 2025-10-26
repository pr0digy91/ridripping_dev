import { useEffect, useRef } from "react";

const OutletSelection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px";
  };

  return (
    <section id="outlet" className="relative bg-black py-24 px-4">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-yellow/30 rounded-full blur-3xl opacity-30"></div>
      {/* <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-yellow rounded-full blur-3xl opacity-40"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        {/* <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold text-brand-yellow mb-2">
            Find a Ri'Drippin Outlet
          </h2>
        </div> */}

        {/* Outlets Grid - Commented out */}
        {/*
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
        */}

        {/* Coming Soon Text */}
        <div
          className="flex items-center justify-center overflow-hidden py-8 w-full"
          ref={containerRef}
        >
          <span
            className="whitespace-nowrap text-center font-bold uppercase text-slate-700"
            ref={textRef}
          >
            Drip Centers coming soon...
          </span>
        </div>
      </div>
    </section>
  );
};

export default OutletSelection;