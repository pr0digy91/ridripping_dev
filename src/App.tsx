import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Outlet from './components/Outlet';
import DownloadApp from './components/DownloadApp';
import Contact from './components/Contact';

function App() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Outlet />
      <DownloadApp />
      <Contact />
    </div>
  );
}

export default App;

// Yet to add mobile app exprience section + mobile app download link
// Card texts needs to be improved and updated
// Footer needs to be added