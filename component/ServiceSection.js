import React from "react";
import { Tabs, Carousel } from "antd";
import { motion } from "framer-motion";

const deals = [
  {
    id: 1,
    title: "Up to 11% Discount*",
    description: "On International Flight Booking",
    details: "On base fare, for bKash payment. Till 28 Feb’25.",
    tag: "INTB0125",
    icon: "/images/campaign_1.jpg", // Demo image
  },
  {
    id: 2,
    title: "Up to BDT 5,000 Discount*",
    description: "On Int’l Flight Bookings",
    details:
      "On total fare, for EBL Visa and Mastercard debit & credit cards. Min. purchase value has to be BDT 25,000. Till 31 Jan’25.",
    tag: "EINT0125",
    icon: "/images/campaign_2.jpg", // Demo image
  },
  {
    id: 3,
    title: "Up to 10% Discount*",
    description: "On Mobile App Booking",
    details: "Catch exclusive deals when booking via the mobile app.",
    tag: "FLYINTO125",
    icon: "/images/campaign_3.jpg", // Demo image
  },
  {
    id: 4,
    title: "Up to 10% Discount*",
    description: "On Mobile App Booking",
    details: "Catch exclusive deals when booking via the mobile app.",
    tag: "FLYINTO125",
    icon: "/images/campaign_1.jpg", // Demo image
  },
];

const bannerImage = "https://via.placeholder.com/800x200"; // Demo banner image

// Custom Arrows for Carousel
const CustomArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#061A6E",
      borderRadius: "50%",
      padding: "8px",
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
    }}
    onClick={onClick}>
    <span style={{ color: "white", fontSize: "16px" }}>&gt;</span>
  </div>
);

export default function ServiceSection() {
  return (
    <div className="bg-gray-50 py-10 px-6 mt-4">
      {/* Section Title */}
      <h2 className="text-[18px] font-bold  my-6" style={{ color: "#061A6E" }}>
        Hot Deals
      </h2>

      {/* Tabs for Filter */}
      <Tabs
        defaultActiveKey="1"
        className="mb-6"
        items={[
          { key: "1", label: "All" },
          { key: "2", label: "Flight" },
          { key: "3", label: "Hotel" },
          { key: "4", label: "Others" },
          { key: "5", label: "Tour" },
        ]}
      />

      {/* Service Slider */}
      <h3 className="text-lg font-semibold text-[#061A6E] mt-8">
        Our Services
      </h3>
      <Carousel
        autoplay
        dots={false}
        slidesToShow={3} // Show multiple items in a row
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2, // Show 2 items on medium screens
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1, // Show 1 item on small screens
            },
          },
        ]}
        nextArrow={<CustomArrow />}
        prevArrow={<CustomArrow />}>
        {deals.map((deal) => (
          <motion.div
            key={deal.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="service-card p-4 rounded-lg shadow-lg bg-white"
            style={{ maxWidth: "300px", margin: "0 auto" }}>
            <img
              src={deal.icon}
              alt={deal.title}
              className="w-full h-[180px] object-cover rounded-lg mb-4" // Adjusted height
            />
            <h4 className="font-semibold text-lg text-[#061A6E]">
              {deal.title}
            </h4>
            {/* <p className="text-gray-600">{deal.description}</p>
            <p className="text-sm text-gray-500">{deal.details}</p> */}
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
}
