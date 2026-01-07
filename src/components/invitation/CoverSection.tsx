import { motion } from "framer-motion";

interface CoverSectionProps {
  guestName: string;
  onOpen: () => void;
}

const CoverSection = ({ guestName, onOpen }: CoverSectionProps) => {
  return (
    <motion.section 
      className="fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center bg-no-repeat md:bg-top"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/img/PRIM3257.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center text-white px-6">
        <motion.p 
          className="text-sm tracking-[0.3em] uppercase mb-4 text-gold-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          The Wedding of
        </motion.p>
        
        <motion.h1 
          className="font-serif text-5xl md:text-7xl font-light mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Rocky FJ Pinem & Desy Marthalina Br Tarigan
        </motion.h1>

        <motion.div
          className="w-24 h-[1px] bg-gold-light mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <p className="text-sm tracking-wider mb-2 opacity-80">Kepada Yth.</p>
          <p className="text-xl font-serif mb-8">{guestName || "Tamu Undangan"}</p>
        </motion.div>

        <motion.button
          onClick={onOpen}
          className="px-8 py-3 border border-gold-light text-gold-light hover:bg-gold-light hover:text-primary-foreground transition-all duration-300 tracking-wider text-sm uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Buka Undangan
        </motion.button>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, y: [0, 10, 0] }}
        transition={{ delay: 1.3, y: { repeat: Infinity, duration: 1.5 } }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </motion.section>
  );
};

export default CoverSection;
