import { motion } from 'framer-motion';

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
            alt="Hasnat Shahriyar"
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20"
          />
        </motion.div>
        
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Hasnat Shahriyar
        </motion.h1>

        <div className="overflow-hidden">
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Frontend Developer focused on clean design and responsive UI
          </motion.p>
        </div>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-secondary transition-colors duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}