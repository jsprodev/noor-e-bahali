// "use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";

export const CertificatesSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section
        id="recognition"
        className="py-12 sm:py-16 lg:py-24 bg-linear-to-br from-gray-50 to-teal-50 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-600 mb-2 sm:mb-5">
              Official Recognition
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700">
              {" "}
              Certified and registered by the Securities and Exchange Commission of Pakistan
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "SECP NGO License", image: "/certificate1.webp" },
              { title: "FBR Tax Certificate", image: "/certificate2.webp" },
            ].map((cert, i) => (
              <div key={i} onClick={() => setSelectedImage(cert.image)} className="group relative cursor-pointer">
                <div className="absolute inset-0 bg-linear-to-br from-gray-500/20 to-teal-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl"></div>
                <div className="relative overflow-hidden rounded-2xl  border border-teal-200/30 bg-white hover:border-teal-300  group-hover:border-teal-300 transition duration-300  group-hover:shadow-md group-hover:shadow-teal-300/10">
                  <div className="aspect-video bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden relative">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-700 mb-2">{cert.title}</h3>
                    <div className="flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-3 transition">
                      <span>View Full Size</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <Image
              src={selectedImage}
              alt="Certificate"
              width={1200}
              height={800}
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};
