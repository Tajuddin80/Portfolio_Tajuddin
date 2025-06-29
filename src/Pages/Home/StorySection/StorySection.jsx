import React from "react";

const items = [
  {
    id: "1",
    img: "https://i.ibb.co/qLhDrzXy/rear-view-programmer-working-all-night-long.jpg",
  },
  {
    id: "2",
    img: "https://i.ibb.co/ymYszcbS/high-angle-gaming-setup-indoors.jpg",
  },
  {
    id: "3",
    img: "https://i.ibb.co/hJ2vKjm1/tourist-taking-photos-nature-landscape-using-his-smartphone.jpg",
  },
  {
    id: "4",
    img: "https://i.ibb.co/gFymymxR/person-traveling-enjoying-their-vacation.jpg",
  },
  {
    id: "5",
    img: "https://i.ibb.co/0VvtQJsN/7448202.jpg",
  },
  {
    id: "6",
    img: "https://i.ibb.co/Rp5mtCTG/2394953.jpg",
  },
  {
    id: "7",
    img: "https://i.ibb.co/fzjY0dZs/3990.jpg",
  },
  {
    id: "8",
    img: "https://i.ibb.co/cX1PKLj8/top-view-unrecognizable-hacker-performing-cyberattack-night.jpg",
  },
  {
    id: "9",
    img: "https://i.ibb.co/xv45J49/Screenshot-From-2025-06-30-04-41-43.png",
  },
];

const StorySection = () => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="mb-4 overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
        >
          <img
            src={item.img}
            alt={`Story ${item.id}`}
            className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default StorySection;
