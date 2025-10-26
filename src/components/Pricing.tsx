const Pricing = () => {
  return (
    <section className="relative bg-yellow-500 py-24 px-4">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-600 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-black mb-4">
            Our Pricing
          </h2>
        </div>

        {/* Pricing Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          {/* Card 1 */}
          <div className="bg-black rounded-2xl p-8 flex flex-col items-center text-center shadow-xl">
            <h3 className="text-2xl font-bold text-yellow-500 mb-6">One-Time Wash</h3>
            <div className="text-4xl font-extrabold text-yellow-500 mb-4">₹399</div>
            <p className="text-white mb-8">Single wash, all-in, any time.</p>
            <button className="w-full py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold transition-all hover:bg-yellow-400">
              Choose
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-black rounded-2xl p-8 flex flex-col items-center text-center shadow-xl">
            <h3 className="text-2xl font-bold text-yellow-500 mb-6">4 Washes</h3>
            <div className="text-4xl font-extrabold text-yellow-500 mb-4">₹1,000</div>
            <p className="text-white mb-8">Monthly. Save 37%.</p>
            <button className="w-full py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold transition-all hover:bg-yellow-400">
              Choose
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-black rounded-2xl p-8 flex flex-col items-center text-center shadow-xl">
            <h3 className="text-2xl font-bold text-yellow-500 mb-6">12 Washes</h3>
            <div className="text-4xl font-extrabold text-yellow-500 mb-4">₹2,500</div>
            <p className="text-white mb-8">Quarterly. Save 47%.</p>
            <button className="w-full py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold transition-all hover:bg-yellow-400">
              Choose
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-black rounded-2xl p-8 flex flex-col items-center text-center shadow-xl">
            <h3 className="text-2xl font-bold text-yellow-500 mb-6">24 Washes</h3>
            <div className="text-4xl font-extrabold text-yellow-500 mb-4">₹4,000</div>
            <p className="text-white mb-8">Annual. Save 58%.</p>
            <button className="w-full py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold transition-all hover:bg-yellow-400">
              Choose
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-6">
          <span className="font-bold text-black">
            *All prices exclude GST.
          </span>
          <span className="text-black/70 ml-2">
            Membership unlocks exclusive slots, priority support, and rewards!
          </span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;