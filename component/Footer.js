import React from "react";
import { Row, Col, Button, Input, Typography, Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

const { Title, Text } = Typography;

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        background: "linear-gradient(to right, #0F2027, #203A43, #2C5364)",
        color: "white",
        padding: "50px 24px",
        fontFamily: "'Poppins', sans-serif",
      }}>
      {/* Footer Grid */}
      <Row gutter={[24, 32]} justify="space-between">
        {/* About Us */}
        <Col xs={24} sm={12} lg={6}>
          <motion.div variants={itemVariants}>
            <Title level={4} style={{ color: "white", marginBottom: "16px" }}>
              About Us
            </Title>
            <Text style={{ fontSize: "14px", opacity: 0.9, lineHeight: "1.8" }}>
              Discover unique stays, from luxury villas to cozy cottages. We
              help you find your dream destinations effortlessly.
            </Text>
          </motion.div>
        </Col>

        {/* Quick Links */}
        <Col xs={24} sm={12} lg={6}>
          <motion.div variants={itemVariants}>
            <Title level={4} style={{ color: "white", marginBottom: "16px" }}>
              Quick Links
            </Title>
            <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
              {["Home", "About", "Services", "Contact"].map((link, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  <a
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#FFBC00")}
                    onMouseOut={(e) => (e.target.style.color = "white")}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </Col>

        {/* Social Media */}
        <Col xs={24} sm={12} lg={6}>
          <motion.div variants={itemVariants}>
            <Title level={4} style={{ color: "white", marginBottom: "16px" }}>
              Follow Us
            </Title>
            <Space size={20}>
              {[
                {
                  icon: <FacebookOutlined />,
                  color: "#3b5998",
                },
                {
                  icon: <TwitterOutlined />,
                  color: "#1DA1F2",
                },
                {
                  icon: <InstagramOutlined />,
                  color: "#C13584",
                },
                {
                  icon: <LinkedinOutlined />,
                  color: "#0077b5",
                },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}>
                  <Button
                    icon={social.icon}
                    style={{
                      backgroundColor: social.color,
                      color: "white",
                      border: "none",
                    }}
                    shape="circle"
                  />
                </motion.div>
              ))}
            </Space>
          </motion.div>
        </Col>
      </Row>

      {/* Newsletter Section */}
      <Row justify="center" style={{ marginTop: "48px" }}>
        <Col xs={24} sm={16} md={12}>
          <motion.div variants={itemVariants}>
            <Title
              level={4}
              style={{
                textAlign: "center",
                color: "white",
                marginBottom: "16px",
              }}>
              Subscribe to Our Newsletter
            </Title>
            <Text
              style={{
                textAlign: "center",
                display: "block",
                marginBottom: "24px",
                opacity: 0.9,
              }}>
              Get exclusive updates, travel tips, and special offers directly in
              your inbox.
            </Text>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Input
                placeholder="Enter your email"
                style={{
                  borderRadius: "8px",
                  padding: "12px",
                  marginBottom: "12px",
                  border: "none",
                }}
              />
              <Button
                block
                style={{
                  backgroundColor: "#FFBC00",
                  color: "black",
                  borderRadius: "8px",
                  padding: "12px",
                }}>
                Subscribe
              </Button>
            </Space>
          </motion.div>
        </Col>
      </Row>

      {/* Footer Bottom */}
      <Row justify="center" style={{ marginTop: "40px" }}>
        <motion.div variants={itemVariants}>
          <Text style={{ textAlign: "center", fontSize: "14px", opacity: 0.8 }}>
            &copy; {new Date().getFullYear()} Dream Stays. All rights reserved.
          </Text>
        </motion.div>
      </Row>
    </motion.footer>
  );
}
