import { useState } from "react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  // Mengubah image (baik string tunggal maupun array) menjadi array agar aman di-mapping
  const images = Array.isArray(project.image) ? project.image : [project.image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <Card>
        {/* Thumbnail utama */}
        <div
          className="relative h-52 w-full overflow-hidden cursor-pointer group"
          onClick={() => {
            setCurrentImageIndex(0);
            setIsOpen(true);
          }}
        >
          <img
            src={images[0]}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-medium">
            🔍 Click to zoom{" "}
            {images.length > 1 ? `(${images.length} photos)` : ""}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold">{project.title}</h3>

          <p className="mt-4 text-gray-400">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge key={index}>{tech}</Badge>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <Button href={project.github}>GitHub</Button>

            <Button variant="outline" href={project.demo}>
              Live Demo
            </Button>
          </div>
        </div>
      </Card>

      {/* Modal Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 p-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/90 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            {/* Container Gambar & Navigasi */}
            <div className="relative w-full flex items-center justify-center overflow-hidden rounded-xl bg-black/50 min-h-[50vh] max-h-[70vh]">
              <img
                src={images[currentImageIndex]}
                alt={`${project.title} - ${currentImageIndex + 1}`}
                className="max-h-[70vh] w-auto object-contain transition-all duration-300"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full transition-colors z-10"
                  >
                    ❮
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full transition-colors z-10"
                  >
                    ❯
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail kecil untuk memilih gambar */}
            {images.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto max-w-full p-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative rounded-lg overflow-hidden h-16 w-24 flex-shrink-0 border-2 transition-all ${
                      currentImageIndex === idx
                        ? "border-cyan-400 scale-105"
                        : "border-transparent opacity-60"
                    }`}
                  >
                    <img
                      src={img}
                      alt="thumbnail"
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Judul & Info */}
            <div className="mt-3 text-center">
              <h4 className="text-lg font-semibold text-white">
                {project.title}
              </h4>
              {images.length > 1 && (
                <p className="text-sm text-gray-400">
                  Image {currentImageIndex + 1} of {images.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
