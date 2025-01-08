// App.js
import React from 'react';
import { Navbar } from './components/Navbar';
import { Carousel } from './components/Carousel';
import { About } from './components/About';
import { Products } from './components/Products';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import IsoCertification from './components/IsoCertification'; // Import the new component

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate a delay for loading
  }, []);

  return (
    <div className="min-h-screen">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <Cursor />
          <section id="home">
            <Carousel />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="products">
            <Products />
            
            <IsoCertification />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
