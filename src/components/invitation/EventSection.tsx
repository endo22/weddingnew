import { motion } from "framer-motion";
import { MapPin, Clock, Church, PartyPopper } from "lucide-react";

const EventSection = () => {
  const events = [
    {
      icon: Church,
      title: "Pemberkatan",
      date: "Jumat, 16 Januari 2026",
      time: "10:00 WIB - Selesai",
      venue: "Gereja HKBP Pasar Melintang",
      address: "Resort Pasar Melintang, Jl. Buku No.20 Medan",
      mapLink: "https://maps.app.goo.gl/kf9uXJPw4XDyUUZG9",
    },
    {
      icon: PartyPopper,
      title: "Resepsi",
      date: "Jumat, 16 Januari 2026",
      time: "12:30 WIB - Selesai",
      venue: "Wisma Taman Sari Indah",
      address: "Jl. Kapten Muslim No.94 Medan (Depan Plaza Millenium)",
      mapLink: "https://maps.app.goo.gl/s4o4jt6CmvvJsTka6",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Acara Pernikahan</h2>
          <div className="w-20 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              className="bg-card p-8 rounded-lg shadow-lg border border-border text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <event.icon className="w-8 h-8 text-gold" />
              </div>

              <h3 className="font-serif text-2xl text-primary mb-4">{event.title}</h3>
              
              <div className="space-y-3 text-muted-foreground">
                <p className="font-medium text-foreground">{event.date}</p>
                
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-gold" />
                  <span>{event.time}</span>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground mb-1">{event.venue}</p>
                  <p className="text-sm">{event.address}</p>
                </div>
              </div>

              <motion.a
                href={event.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-2 bg-gold text-primary-foreground rounded-full hover:bg-gold/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Google Maps</span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
