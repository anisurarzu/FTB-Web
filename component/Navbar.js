"use client";
import { useState } from "react";
import Link from "next/link";
import { MenuOutlined, CloseOutlined, HomeOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { Button } from "antd";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        backgroundColor: "transparent", // Transparent background
        color: "white",
        padding: "0.5rem 1rem",
        fontFamily: "'Roboto', sans-serif",
        position: "fixed", // Fixed position to stay at the top
        width: "100%",
        zIndex: 10,
        top: 0,
        transition: "background-color 0.3s ease",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
        {/* Logo Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          <Link href="/" legacyBehavior>
            <Button
              type="primary"
              icon={<HomeOutlined />}
              style={{
                backgroundColor: "white", // White background for contrast
                color: "#003B95",
                fontSize: "1.1rem",
                padding: "1rem 1.5rem",
                borderRadius: "5px",
                fontWeight: "bold",
                border: "none",
              }}>
              FTB
            </Button>
          </Link>
        </motion.div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Sign In Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            <Link href="/signin" legacyBehavior>
              <Button
                type="default"
                style={{
                  backgroundColor: "white",
                  color: "#003B95",
                  fontSize: "0.9rem",
                  padding: "1rem 1.5rem",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  border: "none",
                }}>
                Sign In
              </Button>
            </Link>
          </motion.div>

          {/* Hamburger Icon */}
          <button
            style={{
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              display: "block",
            }}
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <CloseOutlined style={{ fontSize: "1.5rem" }} />
            ) : (
              <MenuOutlined style={{ fontSize: "1.5rem" }} />
            )}
          </button>
        </div>
      </div>

      {/* Navbar Links */}
      <motion.ul
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          listStyle: "none",
          margin: 0,
          padding: isOpen ? "1rem 0" : 0,
          overflow: "hidden",
          backgroundColor: isOpen ? "rgba(0, 59, 149, 0.9)" : "transparent", // Semi-transparent background for dropdown
          textAlign: "center",
        }}
        className="menu-list">
        {[
          { href: "/", label: "Home" },
          { href: "/rooms", label: "Rooms" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
          { href: "/book", label: "Book Now" },
        ].map((link) => (
          <motion.li
            key={link.href}
            whileHover={{ scale: 1.1 }}
            style={{
              margin: "0.5rem 0",
              fontSize: "1.2rem",
            }}>
            <Link href={link.href} legacyBehavior>
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                  display: "block",
                  padding: "0.5rem",
                }}>
                {link.label}
              </a>
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      <style jsx>{`
        @media (min-width: 768px) {
          .menu-toggle {
            display: none !important;
          }
          .menu-list {
            display: flex !important;
            height: auto !important;
            opacity: 1 !important;
            margin: 0;
            padding: 0;
            justify-content: center;
            gap: 1rem;
          }
          li {
            margin: 0;
          }
        }

        @media (max-width: 767px) {
          .menu-list {
            position: absolute;
            top: 4rem;
            left: 0;
            width: 100%;
            z-index: 10;
          }
        }
      `}</style>
    </nav>
  );
}
