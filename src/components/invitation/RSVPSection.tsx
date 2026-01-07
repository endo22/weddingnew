import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Send, CheckCircle } from "lucide-react";

const RSVPSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    event: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.attendance) {
      toast.error("Mohon lengkapi nama dan konfirmasi kehadiran");
      return;
    }

    // Simulate form submission
    setSubmitted(true);
    toast.success("Terima kasih atas konfirmasi Anda!");
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
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Konfirmasi Kehadiran</h2>
          <div className="w-20 h-[1px] bg-gold mx-auto mb-4" />
          <p className="text-muted-foreground">
            Mohon konfirmasi kehadiran Anda sebelum tanggal 10 Januari 2026
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
            <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
            <Input
              placeholder="Masukkan nama Anda"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Konfirmasi Kehadiran</label>
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
                <label className="block text-sm font-medium mb-2">Hadir di Acara</label>
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
                <label className="block text-sm font-medium mb-2">Jumlah Tamu</label>
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
            <label className="block text-sm font-medium mb-2">Ucapan untuk Mempelai</label>
            <Textarea
              placeholder="Tulis ucapan Anda..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background min-h-[100px]"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gold hover:bg-gold/90 text-primary-foreground"
          >
            <Send className="w-4 h-4 mr-2" />
            Kirim Konfirmasi
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVPSection;
