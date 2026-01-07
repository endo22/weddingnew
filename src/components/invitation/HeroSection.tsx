import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069')`,
      }}
    >
      <div className="text-center text-white px-6 py-20">
        <motion.p 
          className="text-sm tracking-[0.3em] uppercase mb-4 text-gold-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Wedding of
        </motion.p>

        <motion.h1 
          className="font-serif text-6xl md:text-8xl font-light mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Carlos & Bella
        </motion.h1>

        <motion.div
          className="w-32 h-[1px] bg-gold-light mx-auto my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        <motion.p 
          className="text-xl md:text-2xl font-serif tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Jumat, 16 Januari 2026
        </motion.p>

        <motion.div
          className="mt-12 p-6 bg-black/20 backdrop-blur-sm rounded-lg max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="font-serif italic text-lg leading-relaxed opacity-90">
            "Sebab itu laki-laki akan meninggalkan ayahnya dan ibunya dan bersatu dengan istrinya, 
            sehingga keduanya menjadi satu daging."
          </p>
          <p className="mt-4 text-sm tracking-wider text-gold-light">Kejadian 2:24</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
