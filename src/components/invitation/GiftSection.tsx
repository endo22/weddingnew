import { motion } from "framer-motion";
import { useState } from "react";
import { Gift, CreditCard, Copy, Check } from "lucide-react";
import { toast } from "sonner";

const GiftSection = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const bankAccounts = [
    {
      bank: "BCA",
      accountNumber: "0680107149",
      accountName: "Rocky Fj Pinem",
      logo: "/bank/bca.png",
    },
    // {
    //   bank: "Mandiri",
    //   accountNumber: "700011396806",
    //   accountName: "Desy Marthalina Br Tarigan",
    //   logo: "/bank/mandiri.png",
    // },
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
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/img/DSC06678.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
      
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
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-white/50 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <img src={account.logo} alt={`${account.bank} logo`} className="w-12 h-12 object-contain" />
                <span className="font-semibold text-lg text-gray-900">{account.bank}</span>
              </div>
              
              <div className="bg-gray-100/80 rounded-lg p-4 mb-4">
                <p className="font-mono text-2xl tracking-wider text-gray-900 mb-2 font-bold">
                  {account.accountNumber}
                </p>
                <p className="text-sm text-gray-700 font-medium">a.n. {account.accountName}</p>
              </div>

              <motion.button
                onClick={() => copyToClipboard(account.accountNumber, index)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gold hover:bg-gold/90 rounded-full transition-colors text-sm font-bold text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {copiedIndex === index ? (
                  <>
                    <Check className="w-4 h-4" />
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
