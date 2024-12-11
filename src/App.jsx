import About from './components/About';
import Client from './components/Client';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductAndServices from './components/ProductAndServices';

const App = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900">
      <Navbar />
      <About />
      <ProductAndServices />
      <Client />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
