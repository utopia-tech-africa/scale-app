"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalContainerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalContainer = ({
  isOpen,
  onClose,
  title,
  children,
}: ModalContainerProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-125 w-full p-0 g-linear-to-br from-primary/10 to-primary/5 border border-white/10 gap-0 [&>button]:hidden [&>button]:cursor-pointer">
        <style>{`
          .no-scrollbar {
            -ms-overflow-style: none !important;
            scrollbar-width: none !important;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none !important;
          }
        `}</style>

        {/* Animating entire modal container */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{
                duration: 1, // longer duration for smoothness
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.2, // small delay before it starts
              }}
              className="flex flex-col max-h-[85vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 shrink-0">
                <h2 className="text-xl font-semibold text-white">{title}</h2>
                <button
                  onClick={onClose}
                  className="rounded-full p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto px-6 py-6 no-scrollbar">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default ModalContainer;
