import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 px-6 bg-primary text-primary-foreground">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Thank You
          </h2>
          
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila 
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.
          </p>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-gold-light" />
            <Heart className="w-5 h-5 text-gold-light fill-gold-light" />
            <div className="w-12 h-[1px] bg-gold-light" />
          </div>

          <h3 className="font-serif text-2xl md:text-3xl mb-2">
            Pengantin Pria & Pengantin Wanita
          </h3>
          
          <p className="text-sm text-primary-foreground/60 mt-8">
            © 2026 Endo Febranda Silalahi
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
