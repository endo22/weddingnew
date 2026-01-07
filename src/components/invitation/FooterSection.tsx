import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer 
      className="py-16 px-6 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/img/DSC06678.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Decorative separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-white">
            Thank You
          </h2>
          
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila 
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.
          </p>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-gold-light" />
            <Heart className="w-5 h-5 text-gold-light fill-gold-light" />
            <div className="w-12 h-[1px] bg-gold-light" />
          </div>

          <h3 className="font-serif text-2xl md:text-3xl mb-2 text-white">
            Rocky FJ Pinem & Desy Marthalina Br Tarigan
          </h3>
          
          <p className="text-sm text-white/60 mt-8">
            © 2026 Endo Febranda Silalahi
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
