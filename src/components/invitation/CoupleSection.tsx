import { motion } from "framer-motion";

const CoupleSection = () => {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Bride & Groom</h2>
          <div className="w-20 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Groom */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative mb-6">
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-gold/30">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000" 
                  alt="Carlos"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gold text-primary-foreground px-6 py-1 rounded-full font-serif text-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                Carlos
              </motion.div>
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl text-primary mt-6 mb-3">
              Pengantin Pria
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Putra dari:<br />
              <span className="font-medium">Bpk. Pengantin Pria, SE</span><br />
              &<br />
              <span className="font-medium">Ibu Pengantin Pria</span>
            </p>
          </motion.div>

          {/* Bride */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative mb-6">
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-gold/30">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000" 
                  alt="Bella"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gold text-primary-foreground px-6 py-1 rounded-full font-serif text-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring" }}
              >
                Bella
              </motion.div>
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl text-primary mt-6 mb-3">
              Pengantian Wanita
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Putri dari:<br />
              <span className="font-medium">Bpk. Pengantin Wanita</span><br />
              &<br />
              <span className="font-medium">Ibu Pengantin Wanita</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
