import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className="footer pt-4 mt-5">
        <Container>
          <Row>

            <Col md={3}>
              <div className="footer-brand">
                <div className="footer-brand-icon">🧭</div>
                <span className="footer-brand-name">Travel Explorer</span>
              </div>
              <p>
                Discover amazing tourist destinations, book packages, and enjoy
                unforgettable travel experiences with us.
              </p>
            </Col>

            <Col md={3}>
              <h5>Quick Links</h5>
              <ul>
                <li>Home</li>
                <li>Tour Packages</li>
                <li>Destinations</li>
                <li>Contact</li>
              </ul>
            </Col>

            <Col md={3}>
              <h5>Popular Destinations</h5>
              <ul>
                <li>📍 Kerala</li>
                <li>📍 Goa</li>
                <li>📍 Manali</li>
                <li>📍 Dubai</li>
              </ul>
            </Col>

            <Col md={3}>
              <h5>Contact</h5>
              <p>✉️ info@travelexplorer.com</p>
              <p>📞 +91 9876543210</p>
              <p>📌 Kerala, India</p>
            </Col>

          </Row>

          <hr />

          <Row>
            <Col className="text-center">
              <p>© 2026 Travel Explorer. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>

      <style>{`
        .footer {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: rgba(255, 255, 255, 0.85);
          padding-top: 40px;
          font-family: Segoe UI, sans-serif;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .footer-brand-icon {
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }

        .footer-brand-name {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.3px;
        }

        .footer h5 {
          font-weight: 700;
          margin-bottom: 15px;
          color: #fff;
          font-size: 15px;
          letter-spacing: 0.3px;
        }

        .footer p {
          font-size: 13.5px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.75);
          margin-bottom: 6px;
        }

        .footer ul {
          padding: 0;
        }

        .footer ul li {
          list-style: none;
          margin-bottom: 9px;
          font-size: 13.5px;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.75);
          transition: color 0.2s, padding-left 0.2s;
        }

        .footer ul li:hover {
          color: #fff;
          padding-left: 4px;
        }

        .footer hr {
          border-color: rgba(255, 255, 255, 0.2);
          margin-top: 24px;
          margin-bottom: 14px;
        }

        .footer .text-center p {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
          padding-bottom: 10px;
        }
      `}</style>
    </>
  );
};

export default Footer;