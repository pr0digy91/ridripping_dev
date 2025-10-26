import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Outlet from './components/Outlet';
import DownloadApp from './components/DownloadApp';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
