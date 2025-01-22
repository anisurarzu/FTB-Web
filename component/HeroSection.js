"use client";
import React, { useState } from "react";
import { DatePicker, Select, Button } from "antd";
import { motion } from "framer-motion"; // Import motion here
import Head from "next/head"; // Import Head from next/head

const { Option } = Select;

export default function HeroSection() {
  const [hotelList, setHotelList] = useState(""); // Using useState to manage the state

  const sharedStyles = {
    padding: "0.8rem 1rem",
    fontSize: "1rem",
    borderRadius: "10px",
    border: "1px solid #ddd",
    outline: "none",
    width: "150px",
    height: "40px", // Ensuring uniform height for inputs and select fields
  };

  return (
    <div style={{ position: "relative", height: "80vh", overflow: "hidden" }}>
      {/* Adding Google Fonts (Poppins) */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}>
        <source src="/images/video2.mp4" type="video/mp4" />
        {/* Fallback content */}
        <img
          src="/images/fallback-image.jpg" // Provide a fallback image in case video is not supported
          alt="Fallback Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        Your browser does not support the video tag.
      </video>

      {/* Welcome Message */}
      <motion.h1
        style={{
          fontSize: "3rem",
          color: "white",
          textAlign: "center",
          marginTop: "20vh",
          fontFamily: "'Poppins', sans-serif", // Apply Poppins font
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        Welcome to Fast Track Booking
      </motion.h1>

      {/* Search Form */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          alignItems: "center",
        }}>
        {/* Check-in Date */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <DatePicker
            style={{
              ...sharedStyles,
              backgroundColor: "white", // Ensuring white background
            }}
            placeholder="Check-in"
          />
        </motion.div>

        {/* Check-out Date */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}>
          <DatePicker
            style={{
              ...sharedStyles,
              backgroundColor: "white", // Ensuring white background
            }}
            placeholder="Check-out"
          />
        </motion.div>

        {/* Hotel List Dropdown */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <Select
            className="no-border-select"
            value={hotelList || undefined}
            onChange={(value) => setHotelList(value)}
            style={{
              ...sharedStyles,
              backgroundColor: "white", // Ensuring white background
            }}
            placeholder="Select Hotel">
            <Option value="Hotel1">Hotel 1</Option>
            <Option value="Hotel2">Hotel 2</Option>
            <Option value="Hotel3">Hotel 3</Option>
          </Select>
        </motion.div>

        {/* Search Button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          <Button
            type="primary"
            style={{
              fontSize: "1rem",
              padding: "0.6rem 1.2rem",
              borderRadius: "20px",
              background: "linear-gradient(145deg, #003B95, #0056b3)", // Gradient effect
              color: "white",
              border: "none",
              boxShadow:
                "4px 4px 10px rgba(0, 0, 0, 0.2), -4px -4px 10px rgba(255, 255, 255, 0.3)", // Subtle shadow
              transition: "all 0.3s ease", // Smooth transition on hover
              marginTop: "",
              height: "40px", // Set the height to match other inputs
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)"; // Slight scale-up effect on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)"; // Reset scale on mouse leave
            }}>
            Search
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
