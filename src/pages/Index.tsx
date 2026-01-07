import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import CoverSection from "@/components/invitation/CoverSection";
import HeroSection from "@/components/invitation/HeroSection";
import CoupleSection from "@/components/invitation/CoupleSection";
import CountdownSection from "@/components/invitation/CountdownSection";
import EventSection from "@/components/invitation/EventSection";
import RSVPSection from "@/components/invitation/RSVPSection";
import GallerySection from "@/components/invitation/GallerySection";
import GiftSection from "@/components/invitation/GiftSection";
import WishesSection from "@/components/invitation/WishesSection";
import FooterSection from "@/components/invitation/FooterSection";
import ThemeToggle from "@/components/invitation/ThemeToggle";
import MusicPlayer from "@/components/invitation/MusicPlayer";

const Index = () => {
  const [searchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  
  // Get guest name from URL parameter
  const guestName = searchParams.get("to") || "";

  const handleOpen = () => {
    setIsOpen(true);
    // Scroll to top when opening
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Prevent scroll when cover is showing
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {!isOpen && (
          <CoverSection guestName={guestName} onOpen={handleOpen} />
        )}
      </AnimatePresence>

      {isOpen && (
        <>
          <HeroSection />
          <CoupleSection />
          <CountdownSection />
          <EventSection />
          <RSVPSection />
          <GallerySection />
          <GiftSection />
          <WishesSection />
          <FooterSection />
          <ThemeToggle />
          <MusicPlayer autoPlay />
        </>
      )}
    </div>
  );
};

export default Index;
