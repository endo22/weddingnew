import { motion } from "framer-motion";
import { MessageCircle, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Wish {
  id: string;
  name: string;
  attendance: "yes" | "no";
  message: string;
  timestamp: Date;
}

const WishesSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    message: ""
  });
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load wishes from localStorage on component mount
  useEffect(() => {
    const savedWishes = localStorage.getItem('wedding-wishes');
    if (savedWishes) {
      const parsedWishes = JSON.parse(savedWishes);
      const wishesWithDates = parsedWishes.map((wish: any) => ({
        ...wish,
        timestamp: new Date(wish.timestamp)
      }));
      setWishes(wishesWithDates);
    }
  }, []);

  // Save wishes to localStorage whenever wishes change
  useEffect(() => {
    if (wishes.length > 0) {
      localStorage.setItem('wedding-wishes', JSON.stringify(wishes));
    }
  }, [wishes]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAttendanceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      attendance: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.attendance || !formData.message) {
      alert('Mohon lengkapi semua field');
      return;
    }

    setIsSubmitting(true);

    const newWish: Wish = {
      id: Date.now().toString(),
      name: formData.name,
      attendance: formData.attendance as "yes" | "no",
      message: formData.message,
      timestamp: new Date()
    };

    setWishes(prev => [newWish, ...prev]);
    
    setFormData({
      name: "",
      attendance: "",
      message: ""
    });
    
    setIsSubmitting(false);
    alert('Terima kasih atas ucapan dan doanya! 💕');
  };

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

  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-2xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MessageCircle className="w-10 h-10 text-gold mx-auto mb-4" />
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Wedding Wishes</h2>
          <div className="w-20 h-[1px] bg-gold mx-auto mb-4" />
          <p className="text-muted-foreground">
            Kirimkan ucapan & doa kepada mempelai
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          className="bg-background p-6 rounded-lg shadow-md border border-border mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Nama Anda</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Masukkan nama Anda"
                required
              />
            </div>

            <div>
              <Label htmlFor="attendance">Konfirmasi Kehadiran</Label>
              <Select 
                value={formData.attendance} 
                onValueChange={handleAttendanceChange}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih jawaban" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Ya, saya akan hadir</SelectItem>
                  <SelectItem value="no">Maaf, saya tidak dapat hadir</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message">Ucapan & Doa</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tuliskan ucapan dan doa untuk mempelai"
                rows={4}
                required
                maxLength={500}
              />
              <div className="text-right text-xs text-muted-foreground mt-1">
                {formData.message.length}/500
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gold hover:bg-gold/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Mengirim...' : 'Kirim Ucapan'}
            </Button>
          </form>
        </motion.div>

        {/* Wishes List */}
        <div>
          <h3 className="text-xl font-semibold text-center mb-6">
            Ucapan dari Tamu
          </h3>
          
          <div className="space-y-4 max-h-[500px] overflow-y-auto">
            {wishes.length === 0 ? (
              <div className="text-center text-muted-foreground py-8">
                <p>Belum ada ucapan. Jadilah yang pertama! 💕</p>
              </div>
            ) : (
              wishes.map((wish, index) => (
                <motion.div
                  key={wish.id}
                  className="bg-background p-6 rounded-lg shadow-sm border border-border"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-gold" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{wish.name}</h4>
                        <span className="text-xs text-muted-foreground">{formatTime(wish.timestamp)}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-2">{wish.message}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          {wish.attendance === 'yes' ? '✅ Akan hadir' : '❌ Tidak dapat hadir'}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>

        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-muted-foreground text-sm">
            {wishes.length} ucapan dari tamu undangan
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WishesSection;
