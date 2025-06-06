
import { useState } from "react";
import { X, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl max-w-4xl w-full mx-4 overflow-hidden shadow-2xl">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full"
        >
          <X className="w-6 h-6" />
        </Button>

        {/* Video Container */}
        <div className="aspect-video bg-gradient-to-br from-solar-500 to-solar-600 flex items-center justify-center">
          {/* Placeholder for video - you can replace this with actual video embed */}
          <div className="text-center text-white p-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="w-10 h-10 text-white ml-1" />
            </div>
            <h3 className="text-2xl font-bold mb-4">¿Cómo funciona la energía solar?</h3>
            <p className="text-lg mb-6 opacity-90">
              Descubre paso a paso cómo los paneles solares pueden transformar tu hogar
            </p>
            <p className="text-sm opacity-75">
              Video explicativo próximamente disponible
            </p>
          </div>
          
          {/* You can replace the above placeholder with an actual video embed like this:
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Cómo funciona la energía solar"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          */}
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-gray-50">
          <div className="text-center">
            <h4 className="font-bold text-gray-900 mb-2">¿Listo para tu evaluación gratuita?</h4>
            <p className="text-gray-600 mb-4">
              Nuestros expertos pueden diseñar el sistema perfecto para tu hogar
            </p>
            <Button
              onClick={() => {
                onClose();
                const element = document.querySelector('#cotizacion');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary hover:from-kilowatt-secondary hover:to-kilowatt-primary text-white px-6 py-2 rounded-full"
            >
              Solicitar cotización gratis
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
