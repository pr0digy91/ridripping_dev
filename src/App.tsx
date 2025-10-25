import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;

// Yet to add pricing table section, outlets section, mobile app exprience section + mobile app download link
// Card texts needs to be improved and updated
// Footer needs to be added