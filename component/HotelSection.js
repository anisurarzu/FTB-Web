import React from "react";
import { Carousel } from "antd";
import { motion } from "framer-motion";
import { HeartOutlined, StarOutlined } from "@ant-design/icons"; // Import Ant Design icons

// Sample hotel data
const hotels = [
  {
    id: 1,
    name: "Castle Stay",
    description: "Experience a royal stay in an ",
    icon: "/images/hotel1.webp", // Demo image
    price: "$299/night", // Price for the hotel
    reviews: 120, // Reviews count
  },
  {
    id: 2,
    name: "Luxury Villa",
    description: "Relax in a luxury villa by the beach.",
    icon: "/images/hotel2.webp", // Demo image
    price: "$499/night", // Price for the hotel
    reviews: 150, // Reviews count
  },
  {
    id: 3,
    name: "Igloo Retreat",
    description: "A cozy igloo stay in the snowy.",
    icon: "/images/hotel3.webp", // Demo image
    price: "$349/night", // Price for the hotel
    reviews: 95, // Reviews count
  },
  {
    id: 4,
    name: "Floating Boat",
    description: "Stay in a floating boat in the.",
    icon: "/images/hotel4.webp", // Demo image
    price: "$250/night", // Price for the hotel
    reviews: 80, // Reviews count
  },
];

// Custom Arrow for Ant Design Carousel
const CustomArrow = ({ className, style, onClick, direction }) => (
  <div
    className={className}
    style={{
      ...style,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#061A6E",
      borderRadius: "50%",
      padding: "5px", // Smaller size for the button
      cursor: "pointer",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1000,
      [direction]: "-25px", // Positioning arrows further outside
    }}
    onClick={onClick}>
    <span style={{ color: "white", fontSize: "18px" }}>
      {direction === "next" ? "→" : "←"}
    </span>
  </div>
);

export default function HotelSection() {
  return (
    <div className="bg-white py-10 px-6 mt-4">
      {" "}
      {/* Section background white */}
      {/* Section Title */}
      <h2 className="text-[18px] font-bold text-[#061A6E] my-6">
        Stay at our top unique properties
      </h2>
      <p className="text-[#061A6E] mb-6">
        From castles and villas to boats and igloos, we have it all
      </p>
      {/* Hotel Slider */}
      <Carousel
        dots={false}
        arrows
        prevArrow={<CustomArrow direction="prev" />}
        nextArrow={<CustomArrow direction="next" />}
        slidesToShow={4} // Show 4 items in a row
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3, // Show 3 items on medium screens
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2, // Show 2 items on small screens
            },
          },
        ]}>
        {hotels.map((hotel) => (
          <motion.div
            key={hotel.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="hotel-card p-4 rounded-lg shadow-lg bg-white"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between", // Ensures all cards have same height
              maxWidth: "250px", // Fixed width
              height: "380px", // Fixed height for uniform card sizes
              margin: "0 auto",
              overflow: "hidden",
              minHeight: "380px", // Ensure the cards are always the same height
              position: "relative", // To position the favorite icon
            }}>
            {/* Favorite Icon */}
            <div
              style={{
                // position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.9)", // Adjusted background opacity
                borderRadius: "50%",
                padding: "8px", // Increased padding for better click area
              }}>
              {/* <HeartOutlined style={{ fontSize: "30px", color: "#FF6F61" }} /> */}
            </div>

            <img
              src={hotel.icon}
              alt={hotel.name}
              className="w-full h-[200px] object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold text-lg text-[#061A6E]">
              {hotel.name}
            </h4>
            <p className="text-gray-600">{hotel.description}</p>

            {/* Price and Reviews */}
            <div className="flex justify-between items-center mt-auto">
              {/* Price */}
              <p className="font-semibold text-[#061A6E]">{hotel.price}</p>

              {/* Reviews */}
              <div className="flex items-center">
                <StarOutlined style={{ color: "#FFBC00", fontSize: "16px" }} />
                <span className="ml-2 text-gray-600">
                  {hotel.reviews} reviews
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
}
