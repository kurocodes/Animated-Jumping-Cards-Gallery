import { mai_san_images } from "../assets/assets";
import { motion } from "motion/react";

export default function JumpingCardGallery() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex">
        {mai_san_images.map((image, index) => {
          const rotation = ["8deg", "5deg", "-4deg", "-8deg", "0deg"];

          return (
            <motion.div
              key={index}
              className={`w-50 h-50 p-2 bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-3xl ${
                index !== 0 ? "-ml-25" : ""
              }`}
              style={{
                rotate: rotation[index],
                zIndex: index + 1,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{
                rotate: "-15deg",
                x: -40,
              }}
              transition={{ delay: index * 0.05 }}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
