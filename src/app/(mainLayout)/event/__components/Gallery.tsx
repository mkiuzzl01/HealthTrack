"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import image1 from "@public/assets/gallery/Image-2 (1).jpg";
import image2 from "@public/assets/gallery/Image-2 (2).jpg";
import image3 from "@public/assets/gallery/Image-2 (3).jpg";
import image4 from "@public/assets/gallery/Image-2 (4).jpg";
import image5 from "@public/assets/gallery/image-5.jpg";

interface GalleryItem {
  id: string;
  description: string;
  image: StaticImageData;
}

const galleries: GalleryItem[] = [
  {
    id: "01",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis eos eaque qui fuga omnis voluptate impedit! Voluptatibus praesentium, iure facere ab, neque incidunt possimus explicabo tempore id deleniti, assumenda vero!",
    image: image1,
  },
  {
    id: "02",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis eos eaque qui fuga omnis voluptate impedit! Voluptatibus praesentium, iure facere ab, neque incidunt possimus explicabo tempore id deleniti, assumenda vero!",
    image: image2,
  },
  {
    id: "03",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis eos eaque qui fuga omnis voluptate impedit! Voluptatibus praesentium, iure facere ab, neque incidunt possimus explicabo tempore id deleniti, assumenda vero!",
    image: image3,
  },
  {
    id: "04",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis eos eaque qui fuga omnis voluptate impedit! Voluptatibus praesentium, iure facere ab, neque incidunt possimus explicabo tempore id deleniti, assumenda vero!",
    image: image4,
  },
  {
    id: "05",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis eos eaque qui fuga omnis voluptate impedit! Voluptatibus praesentium, iure facere ab, neque incidunt possimus explicabo tempore id deleniti, assumenda vero!",
    image: image5,
  },
];

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    cursor: "pointer",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  }));

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "unset";
    }
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % galleries.length : 0
    );
  };

  const handlePrevious = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev === 0 ? galleries.length - 1 : prev - 1) : 0
    );
  };

  return (
    <>
      <Box sx={{ minHeight: 500, width: "100%" }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {galleries.map((gallery, index) => (
            <Item key={gallery.id} onClick={() => handleImageClick(index)}>
              <Image
                src={gallery.image}
                alt={gallery.description}
                width={500}
                height={500}
                objectFit="cover"
                placeholder="blur"
              />
            </Item>
          ))}
        </Masonry>
      </Box>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative w-full max-w-[800px] max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedIndex !== null && (
                <>
                  <Image
                    src={galleries[selectedIndex].image}
                    alt={galleries[selectedIndex].description}
                    width={1000}
                    height={1000}
                    objectFit="contain"
                    className="max-w-full max-h-full"
                  />
                  <p className="text-white text-center mt-2">
                    {galleries[selectedIndex].description}
                  </p>
                </>
              )}

              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
                onClick={handleCloseModal}
              >
                &times;
              </button>
              <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
                onClick={handlePrevious}
              >
                &#8592;
              </button>
              <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
                onClick={handleNext}
              >
                &#8594;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
