import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Award, Target, Heart } from 'lucide-react';

export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Founded in 2000 by Mr. K.R. Ramesh, Precision Products has established itself as a leading MSME 
            in the precision engineering sector. Our journey is marked by continuous innovation and unwavering 
            commitment to quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-600">
              As a women-led organization, we take pride in our diverse team of 15 dedicated professionals 
              who bring innovation and integrity to every project. Our commitment to excellence has enabled 
              us to forge strong partnerships with industry leaders.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold">Women-Led Organization</h4>
                <p className="text-gray-600">Empowering diversity in engineering</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold">ISO 9001:2015 Certified</h4>
                <p className="text-gray-600">Committed to quality excellence</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-50 p-8 rounded-xl">
            <div className="flex items-center gap-4 mb-6">
              <Heart className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-semibold">Founder's Note</h3>
            </div>
            <blockquote className="text-gray-600 italic">
              "Our vision has always been to create a company that not only delivers exceptional products 
              but also fosters innovation and empowers its people. We believe in the power of precision 
              and the importance of building lasting relationships with our clients."
            </blockquote>
            <div className="mt-6">
              <p className="font-semibold">Mr. K.R. Ramesh</p>
              <p className="text-gray-600">Founder, Precision Products</p>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl">
            <Target className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Mission</h3>
            <p className="text-gray-600">
              To continuously improve our processes and systems, equip our team with professional 
              development opportunities, and uphold a culture of excellence.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <Award className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Vision</h3>
            <p className="text-gray-600">
              To be recognized globally as a leader in precision engineering, setting new standards 
              for quality and innovation in the industry.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Values</h3>
            <p className="text-gray-600">
              Innovation, integrity, and excellence guide every aspect of our operations, ensuring 
              customer satisfaction and continuous improvement.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};