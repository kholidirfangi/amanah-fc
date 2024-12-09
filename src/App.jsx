import About from './components/About';
import Client from './components/Client';
import Navbar from './components/Navbar';
import ProductAndServices from './components/ProductAndServices';

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <ProductAndServices />
      <Client />
    </div>
  );
};

export default App;
