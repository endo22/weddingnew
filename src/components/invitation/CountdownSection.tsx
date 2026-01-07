import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const weddingDate = new Date("2026-01-24T10:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const timeBlocks = [
    { value: timeLeft.days, label: "Hari" },
    { value: timeLeft.hours, label: "Jam" },
    { value: timeLeft.minutes, label: "Menit" },
    { value: timeLeft.seconds, label: "Detik" },
  ];

  return (
    <section 
      className="py-20 px-6 relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/img/PRIM3302.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-4xl mx-auto text-center text-white">
        <motion.h2 
          className="font-serif text-4xl md:text-5xl mb-4 text-white font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Save The Date
        </motion.h2>
        
        <motion.div
          className="w-20 h-[1px] bg-gold-light mx-auto mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              className="bg-white/70 backdrop-blur-sm rounded-lg p-4 md:p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="font-serif text-3xl md:text-5xl text-gold mb-2 font-bold">
                {block.value.toString().padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm tracking-wider uppercase opacity-80 font-semibold text-gray-900">
                {block.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p 
          className="mt-12 font-serif text-xl md:text-2xl text-white font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Sabtu, 24 Januari 2026
        </motion.p>
      </div>
    </section>
  );
};

export default CountdownSection;
