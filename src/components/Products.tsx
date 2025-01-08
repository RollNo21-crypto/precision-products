import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Codesandbox, 
  Box, 
  Zap, 
  Cable, 
  CircuitBoard, 
  Power, 
  ToggleLeft 
} from 'lucide-react';

const products = [
  {
    title: 'Inductor Coil',
    description: 'A passive electrical component that stores energy in a magnetic field when current flows through it',
    image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80',
    icon: CircuitBoard
  },
  {
    title: 'Transformers',
    description: 'A device that transfers electrical energy between circuits through electromagnetic induction, typically used to step up or step down voltage levels.',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80',
    icon: Power
  },
  {
    title: 'Inductor Choke',
    description: 'A type of inductor designed to block high-frequency AC signals while allowing DC or low-frequency AC to pass.',
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80',
    icon: Cable
  },
  {
    title: 'Transformer Winding',
    description: 'A crucial device for power distribution, enabling efficient voltage conversion to meet transmission or usage needs.',
    image: 'https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&fit=crop&q=80',
    icon: Codesandbox
  },
  {
    title: 'Torroidal Ring Core',
    description: 'A doughnut-shaped magnetic core made of ferromagnetic material, used in transformers or inductors for efficient magnetic flux containment with minimal energy loss.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80',
    icon: Box
  },
  {
    title: 'Electromagnetic Relay',
    description: 'A switch operated by an electromagnet, which opens or closes circuits mechanically in response to electrical signals.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
    icon: Zap
  },
  {
    title: 'Solenoid',
    description: 'A coil of wire designed to generate a magnetic field when an electric current flows through it, often used in actuators or as a switch.',
    image: 'https://images.unsplash.com/photo-1581093458851-3dc67e2a3c3c?auto=format&fit=crop&q=80',
    icon: ToggleLeft
  }
];

export const Products = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Products</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-xl ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <product.icon className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};