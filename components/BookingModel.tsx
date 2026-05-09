"use client";

import { X, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

interface BookingModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function BookingModal({ open, setOpen }: BookingModalProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-7xl h-[85vh] bg-white rounded-xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 bg-white border-b border-gray-100 px-6 py-4 z-10 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#F8D000] rounded-lg flex items-center justify-center">
              <Calendar className="w-4 h-4 text-[#1C2E4A]" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1C2E4A]">Schedule Your Free Consultation</h2>
              <p className="text-xs text-gray-500">30-min session • No commitment</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Loading State */}
        {!iframeLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-20">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-[#0E9BF0] border-t-transparent"></div>
              <p className="mt-3 text-gray-600 text-sm">Loading calendar...</p>
            </div>
          </div>
        )}

        {/* Calendar Iframe */}
        <iframe
          src="https://api.leadconnectorhq.com/widget/booking/v3X1VeODz2sPjpKbySyx"
          title="Booking Calendar"
          className="w-full h-full border-0 pt-[73px]"
          onLoad={() => setIframeLoaded(true)}
        />
      </div>
    </div>
  );
}