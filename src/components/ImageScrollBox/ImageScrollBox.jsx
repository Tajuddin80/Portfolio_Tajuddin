import React from "react"; // Custom scrollbar + arrow styles

const ImageScrollBox = ({ images }) => {
  return (
    <div className="md:p-6 rounded-2xl shadow-2xl bg-[#140719]">
      <div className="h-[70vh] md:w-[45vw] w-full  overflow-y-scroll scroll-smooth rounded-xl custom-scrollbar bg-[#140719] border border-[#B63AFF]/30">
        <div>
          <h3 className="text-4xl font-extrabold text-center text-white drop-shadow-xl py-4 bg-gradient-to-r from-[#B63AFF]/70 via-[#B63AFF]/40 to-transparent rounded-xl mb-2">
            Scroll Down to Explore
          </h3>

          <div className="flex justify-center mb-4">
            <div className="animate-bounce-slow text-[#B63AFF] text-2xl">↓</div>
          </div>

          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Project Screenshot ${idx + 1}`}
              className="block w-full min-h-[1500px] rounded-xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageScrollBox;
