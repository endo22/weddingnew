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
                  src="/img/DSC06604.jpg" 
                  alt="Rocky FJ Pinem"
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
                Rocky
              </motion.div>
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl text-primary mt-6 mb-3">
              Rocky FJ Pinem
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Putra dari:<br />
              <span className="font-medium">Nasibta Pinem</span><br />
              &<br />
              <span className="font-medium">Serta Br Ginting (+)</span>
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
                  src="/img/DSC06610.jpg" 
                  alt="Desy Marthalina Br Tarigan"
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
                Desy
              </motion.div>
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl text-primary mt-6 mb-3">
              Desy Marthalina Br Tarigan
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Putri dari:<br />
              <span className="font-medium">Dekon Tarigan</span><br />
              &<br />
              <span className="font-medium">Sumiyati Br Sembiring (+)</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
