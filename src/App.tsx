import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <About />
      <Services />
    </div>
  );
}

export default App;
