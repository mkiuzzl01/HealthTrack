"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import image1 from "@public/assets/gallery/Image-2 (1).jpg";
import image2 from "@public/assets/gallery/Image-2 (2).jpg";
import image3 from "@public/assets/gallery/Image-2 (3).jpg";
import image4 from "@public/assets/gallery/Image-2 (4).jpg";
import image5 from "@public/assets/gallery/image-5.jpg";
import image6 from "@public/assets/gallery/image-1.jpg";

const galleries = [
  {
    id: "01",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ullam atque cupiditate ad cum? Adipisci architecto neque error, natus explicabo, ullam est sed earum, mollitia autem labore iure ut consequatur.",
    image: image1,
  },
  {
    id: "02",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ullam atque cupiditate ad cum? Adipisci architecto neque error, natus explicabo, ullam est sed earum, mollitia autem labore iure ut consequatur.",
    image: image2,
  },
  {
    id: "03",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ullam atque cupiditate ad cum? Adipisci architecto neque error, natus explicabo, ullam est sed earum, mollitia autem labore iure ut consequatur.",
    image: image3,
  },
  {
    id: "04",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ullam atque cupiditate ad cum? Adipisci architecto neque error, natus explicabo, ullam est sed earum, mollitia autem labore iure ut consequatur.",
    image: image4,
  },
  {
    id: "05",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ullam atque cupiditate ad cum? Adipisci architecto neque error, natus explicabo, ullam est sed earum, mollitia autem labore iure ut consequatur.",
    image: image5,
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  const handleImageClick = (gallery) => {
    setSelectedImage(gallery);
    // Prevent body scrolling when modal is open
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    // Restore body scrolling
    if (typeof window !== "undefined") {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <>
      <Box sx={{ minHeight: 500, width: "100%" }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {galleries.map((gallery) => (
            <Item key={gallery.id} onClick={() => handleImageClick(gallery)}>
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
        {selectedImage && (
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
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage?.image}
                  alt={selectedImage?.description}
                  width={1000}
                  height={1000}
                  objectFit="contain"
                  className="max-w-full max-h-full"
                />
                <p className="text-white">{selectedImage?.description}</p>
              </div>
              <button
                className="absolute -top-10 right-0 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
                onClick={handleCloseModal}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div>
        <div className="flex justify-end gap-4 p-4">
          <button className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-400">
            &#8592;
          </button>
          <button className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-400">
            &#8594;
          </button>
        </div>
      </div>
    </>
  );
};

export default Gallery;
