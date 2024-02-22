import { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import { pubmat1, pubmat2, palaro, back, front, packaging } from "../assets";

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [pubmat1, pubmat2, palaro, back, front, packaging];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div
      id="photos"
      className="bg-background text-foreground space-y-2 rounded-lg p-4 shadow-md"
    >
      <h2 className=" text-xl font-bold">Photos</h2>
      <p className="pb-2 ">Here are some of my graphic design works.</p>
      <div className="grid grid-cols-3 gap-1 overflow-clip rounded-lg">
        {images.map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            width="300"
            height="300"
            key={index}
            alt=""
            className="size-[155px] object-cover"
          />
        ))}

        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </div>
    </div>
  );
}
