import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const StorySection = () => {
  const timeline = [
    {
      speaker: "Rocky",
      title: "Kenalan di SMA",
      description: "Kami berdua kenalan di SMA, dan awalnya cuma temen biasa. kami berbeda sekali. Desy murid biasa, nggak terlalu aktif di sekolah, tapi fokus sama pelajaran, sementara Aku, beda banget. aku anak yang badung, sering bolos, dan nggak terlalu peduli dengan pelajaran. 😂 Tapi, Desy suka caraku yang apa adanya, nggak pura-pura jadi orang lain. ",
      note: "(cinta monyet nihyeee….)",
      position: "left"
    },
    {
      speaker: "Desy",
      title: "Lama-lama Deket Juga",
      description: "Lama-lama, kami deket juga. Kami sering saling ejek, main bareng, dan kadang-kadang juga ribut-ributan. Tapi, yang jelas kami tidak tau apa yg sedang terjadi selain perasaan senang satu sama lain. Aku suka cara Rocky yang bisa membuat aku tertawa, dan dia suka cara aku yang bisa membuat dia lebih tenang.",
      position: "right"
    },
    {
      speaker: "Rocky",
      title: "Mengikuti ke Jogja",
      description: "Setelah lulus SMA, Desy lulus di PTN ternama di Jogja, sementara aku nggak lulus. Tapi, aku nggak menyerah. aku memutuskan untuk mengikuti desy ke Jogja, dan melanjutkan kuliah di PTS di sana. 😍 kami melanjutkan hubungan layaknya pacaran anak kuliah wkwk",
      position: "left"
    },
    {
      speaker: "Desy",
      title: "Perjalanan Penuh Tantangan",
      description: "Perjalanan kami nggak selalu mulus, sih. Kami sering berantem, jarang gubris keharmonisan kami, dan banyak tantangan lainnya. Tapi, kami punya tekad yang sama: menikah. Kami tahu kami nggak sempurna, tapi kami ingin mencoba untuk menjadi yang terbaik untuk satu sama lain.",
      position: "right"
    },
    {
      speaker: "Desy & Rocky",
      title: "Hari Bahagia Kami! 🎉",
      description: "Sekarang, kami mau lanjut ke tahap berikutnya: menikah! 🎉 Kami berbahagia mengundang kalian untuk merayakan hari spesial kami, pernikahan kami,24 Januari 2026. 🙏",
      position: "left"
    }
  ];

  return (
    <section 
      className="relative py-20 overflow-hidden bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/PRIM3302.jpg')`
      }}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-gold fill-gold" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
              Kisah Cinta Kami
            </h2>
            <Heart className="w-6 h-6 text-gold fill-gold" />
          </div>
          <p className="text-white max-w-2xl mx-auto font-bold">
            Setiap kisah cinta memiliki awal yang indah. Ini adalah perjalanan kami menuju hari bahagia.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold-light via-gold to-gold-light" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  item.position === "left"
                    ? "md:flex-row-reverse md:justify-end"
                    : "md:flex-row md:justify-start"
                } justify-start`}
                initial={{ opacity: 0, x: item.position === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${item.position === "left" ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-white/50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-gold text-white rounded-full px-4 py-2 font-bold text-sm">
                        {item.speaker}
                      </div>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      {item.description}
                    </p>
                    {item.note && (
                      <p className="text-gold italic text-sm mt-2">
                        {item.note}
                      </p>
                    )}
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-gold border-4 border-white shadow-lg" />
                </div>

                {/* Mobile Line */}
                <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-light via-gold to-gold-light -z-10" />
                <div className="md:hidden absolute left-6 top-6 transform -translate-x-1/2">
                  <div className="w-3 h-3 rounded-full bg-gold border-2 border-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="font-serif text-lg md:text-xl text-white font-bold max-w-3xl mx-auto">
            "Dari teman SMA yang berbeda dunia, hingga sepasang kekasih yang siap menikah. Ini adalah awal dari selamanya bersama kalian semua."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;