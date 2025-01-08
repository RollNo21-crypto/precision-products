import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Lightbulb } from 'lucide-react';

export const MissionVision = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
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
    <section ref={ref} className="py-20 bg-gray-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Mission & Vision</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Driving innovation and excellence in precision engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Target className="text-blue-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Mission</h3>
            <p className="text-gray-600 text-center">
              To deliver exceptional quality products while maintaining the highest standards
              of precision and reliability in every component we manufacture.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Eye className="text-blue-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Vision</h3>
            <p className="text-gray-600 text-center">
              To be the global leader in precision engineering, setting industry standards
              and driving technological advancement in manufacturing.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Lightbulb className="text-blue-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Values</h3>
            <p className="text-gray-600 text-center">
              Innovation, integrity, and excellence guide every aspect of our operations,
              ensuring customer satisfaction and continuous improvement.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};