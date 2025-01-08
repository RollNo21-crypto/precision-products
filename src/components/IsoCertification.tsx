import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Shield, CheckCircle } from 'lucide-react';

export const Certifications = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Our Certification</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">ISO 9001:2015 Certified</h3>
                <p className="text-gray-600">
                  As an ISO 9001:2015 certified company, we uphold the highest standards in every process, 
                  ensuring quality and compliance in all our operations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Management System</h3>
                <p className="text-gray-600">
                  Our commitment to excellence drives us to exceed customer expectations through continuous 
                  improvement of our Quality Management System.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Professional Development</h3>
                <p className="text-gray-600">
                  We prioritize the professional development of our team, equipping them with comprehensive 
                  training and resources to serve our customers with exceptional skill and dedication.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
              alt="ISO Certification"
              className="w-full rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">ISO 9001:2015</p>
              <p className="text-sm">Certified Company</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};