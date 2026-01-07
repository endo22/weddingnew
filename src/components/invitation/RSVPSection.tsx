import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Send, CheckCircle, Heart } from "lucide-react";

interface Wish {
  id: string;
  name: string;
  attendance: "yes" | "no";
  message: string;
  timestamp: Date;
}

// Google Apps Script Web App URLs
const GOOGLE_SCRIPT_RSVP_URL = import.meta.env.VITE_GOOGLE_SCRIPT_RSVP_URL || "";
const GOOGLE_SCRIPT_WISHES_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "";

const RSVPSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isLoadingWishes, setIsLoadingWishes] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    event: "",
    guests: "",
    message: "",
  });

  // Load wishes from Google Sheets
  useEffect(() => {
    const loadWishes = async () => {
      if (!GOOGLE_SCRIPT_WISHES_URL) {
        setIsLoadingWishes(false);
        return;
      }

      try {
        const response = await fetch(GOOGLE_SCRIPT_WISHES_URL);
        const data = await response.json();
        
        if (data.wishes && Array.isArray(data.wishes)) {
          const wishesData = data.wishes.map((wish: any) => ({
            ...wish,
            timestamp: new Date(wish.timestamp)
          }));
          setWishes(wishesData);
        }
      } catch (error) {
        console.error("Error loading wishes:", error);
      } finally {
        setIsLoadingWishes(false);
      }
    };

    loadWishes();
    
    // Reload wishes every 30 seconds
    const interval = setInterval(loadWishes, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
      return diffInMinutes < 1 ? 'Baru saja' : `${diffInMinutes} menit yang lalu`;
    } else if (diffInHours < 24) {
      return `${diffInHours} jam yang lalu`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} hari yang lalu`;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.attendance || !formData.message) {
      toast.error("Mohon lengkapi nama, konfirmasi kehadiran, dan ucapan");
      return;
    }

    if (!GOOGLE_SCRIPT_RSVP_URL || !GOOGLE_SCRIPT_WISHES_URL) {
      toast.error("Konfigurasi Google Sheets belum diatur");
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit ke RSVP Sheet
      await fetch(GOOGLE_SCRIPT_RSVP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          attendance: formData.attendance,
          event: formData.event || '-',
          guests: formData.guests || '-',
          message: formData.message,
          timestamp: new Date().toISOString()
        })
      });

      // Submit ke Wishes Sheet (untuk ditampilkan publik)
      await fetch(GOOGLE_SCRIPT_WISHES_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          attendance: formData.attendance,
          message: formData.message,
          timestamp: new Date().toISOString()
        })
      });

      // Add to local wishes immediately
      const newWish: Wish = {
        id: Date.now().toString(),
        name: formData.name,
        attendance: formData.attendance as "yes" | "no",
        message: formData.message,
        timestamp: new Date()
      };
      setWishes(prev => [newWish, ...prev]);

      setSubmitted(true);
      toast.success("Terima kasih atas konfirmasi dan ucapan Anda!");
    } catch (error) {
      console.error("Error submitting:", error);
      toast.error("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-20 px-6 bg-cream">
        <motion.div 
          className="max-w-md mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircle className="w-20 h-20 text-gold mx-auto mb-6" />
          <h3 className="font-serif text-3xl text-primary mb-4">Terima Kasih!</h3>
          <p className="text-muted-foreground">
            Konfirmasi kehadiran Anda telah kami terima. Kami sangat menantikan kehadiran Anda di hari bahagia kami.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section 
      className="py-20 px-6 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/img/PRIM3302.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
      
      <div className="max-w-xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4 font-bold">Konfirmasi Kehadiran</h2>
          <div className="w-20 h-[1px] bg-gold-light mx-auto mb-4" />
          <p className="text-white/80 font-semibold">
            Mohon konfirmasi kehadiran Anda
          </p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <label className="block text-sm font-bold mb-2 text-white">Nama Lengkap</label>
            <Input
              placeholder="Masukkan nama Anda"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-white">Konfirmasi Kehadiran</label>
            <Select
              value={formData.attendance}
              onValueChange={(value) => setFormData({ ...formData, attendance: value })}
            >
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Pilih konfirmasi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hadir">Hadir</SelectItem>
                <SelectItem value="tidak">Tidak Hadir</SelectItem>
                <SelectItem value="ragu">Masih Ragu</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {formData.attendance === "hadir" && (
            <>
              <div>
                <label className="block text-sm font-bold mb-2 text-white">Hadir di Acara</label>
                <Select
                  value={formData.event}
                  onValueChange={(value) => setFormData({ ...formData, event: value })}
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Pilih acara" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pemberkatan">Pemberkatan</SelectItem>
                    <SelectItem value="resepsi">Resepsi</SelectItem>
                    <SelectItem value="keduanya">Keduanya</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-white">Jumlah Tamu</label>
                <Select
                  value={formData.guests}
                  onValueChange={(value) => setFormData({ ...formData, guests: value })}
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Pilih jumlah" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Orang</SelectItem>
                    <SelectItem value="2">2 Orang</SelectItem>
                    <SelectItem value="3">3 Orang</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-bold mb-2 text-white">Ucapan untuk Mempelai</label>
            <Textarea
              placeholder="Tulis ucapan dan doa Anda..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background min-h-[100px]"
              required
              maxLength={500}
            />
            <div className="text-right text-xs text-white/60 mt-1 font-semibold">
              {formData.message.length}/500
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gold hover:bg-gold/90 text-primary-foreground font-bold"
            disabled={isSubmitting}
          >
            <Send className="w-4 h-4 mr-2" />
            {isSubmitting ? 'Mengirim...' : 'Kirim Konfirmasi & Ucapan'}
          </Button>
        </motion.form>

        {/* Wishes Display */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <Heart className="w-8 h-8 text-gold-light mx-auto mb-4" />
            <h3 className="font-serif text-3xl text-white mb-2 font-bold">Ucapan dari Tamu</h3>
            <div className="w-16 h-[1px] bg-gold-light mx-auto" />
          </div>

          {isLoadingWishes ? (
            <div className="text-center text-white py-8">
              <p className="font-semibold">Memuat ucapan...</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[500px] overflow-y-auto">
              {wishes.length === 0 ? (
                <div className="text-center text-white py-8">
                  <p className="font-semibold">Belum ada ucapan. Jadilah yang pertama! 💕</p>
                </div>
              ) : (
                wishes.map((wish, index) => (
                  <motion.div
                    key={wish.id}
                    className="bg-background p-6 rounded-lg shadow-sm border border-border"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="w-5 h-5 text-gold" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-foreground">{wish.name}</h4>
                          <span className="text-xs text-muted-foreground font-semibold">{formatTime(wish.timestamp)}</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-2 font-medium">{wish.message}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground font-semibold">
                            {wish.attendance === 'yes' ? '✅ Akan hadir' : '❌ Tidak dapat hadir'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          )}

          <div className="mt-6 text-center">
            <p className="text-white text-sm font-semibold">
              {wishes.length} ucapan dari tamu undangan
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPSection;
