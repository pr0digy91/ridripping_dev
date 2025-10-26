import UnreactiveButton from './ui/Unreactive_button';

const DownloadApp = () => (
  <section id="download" className="bg-brand-yellow py-16 px-4">
    <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
      <h2 className="text-4xl sm:text-5xl font-bold text-black mb-2">
        Ready to Get Drippin?
      </h2>
      <p className="text-lg sm:text-xl text-black/80 mb-4">
        Book your first wash or grab a membership in minutes. Try the drip. Love the shine.
      </p>
      <UnreactiveButton className="mt-2 !bg-black !text-yellow-300 !rounded-lg !px-8 !py-4 font-semibold text-lg">
        Download the App
      </UnreactiveButton>
    </div>
  </section>
);

export default DownloadApp;