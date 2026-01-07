import { motion } from "framer-motion";
import { useState } from "react";
import { Gift, CreditCard, Copy, Check } from "lucide-react";
import { toast } from "sonner";

const GiftSection = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const bankAccounts = [
    {
      bank: "BCA",
      accountNumber: "1234567890",
      accountName: "Pengantian Pria",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg",
    },
    {
      bank: "Mandiri",
      accountNumber: "0987654321",
      accountName: "Pengantin Wanita",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg",
    },
  ];

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast.success("Nomor rekening berhasil disalin!");
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section 
      className="py-20 px-6 relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1513623935135-c896b59073c1?q=80&w=2070')`,
      }}
    >
      <div className="max-w-2xl mx-auto text-center text-white">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Gift className="w-12 h-12 text-gold-light mx-auto mb-4" />
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Wedding Gift</h2>
          <div className="w-20 h-[1px] bg-gold-light mx-auto mb-6" />
          <p className="text-white/80 max-w-md mx-auto">
            Kehadiran dan doa restu Anda adalah hadiah terbesar bagi kami. Namun, jika Anda ingin memberikan tanda kasih, 
            kami menyediakan opsi di bawah ini.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {bankAccounts.map((account, index) => (
            <motion.div
              key={account.bank}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <CreditCard className="w-5 h-5 text-gold-light" />
                <span className="font-semibold">{account.bank}</span>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 mb-4">
                <p className="font-mono text-2xl tracking-wider text-gold-light mb-2">
                  {account.accountNumber}
                </p>
                <p className="text-sm text-white/70">a.n. {account.accountName}</p>
              </div>

              <motion.button
                onClick={() => copyToClipboard(account.accountNumber, index)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 hover:bg-gold/30 rounded-full transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {copiedIndex === index ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Salin No. Rekening</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
