import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import phone from "../assets/images/icon/phone.png";
import skype from "../assets/images/icon/skype.png";
import fb from "../assets/images/icon/fb-footer.png";
import insta from "../assets/images/icon/insta-footer.png";
import {Link, graphql, useStaticQuery} from 'gatsby'

const Footer = () => {
//   const data = useStaticQuery(graphql`
//   {
//     footerLogo: wpMediaItem(title: { eq: "footer-logo" }) {
//       srcSet
//       sourceUrl
//     }
//     logo: wpMediaItem(title: { eq: "logo" }) {
//         srcSet
//         sourceUrl
//       }
//   }
// `);
  return (
    <footer className="mt-5 border-top">
      <Container>
        <Row className="justify-content-center">
          
          <Col xs={12} sm={6} md={4} lg={4} className="mt-3 pl-5">
            <h5>Legal</h5>
            <div className="mt-3">
            {/* <p>
              Home Tow <br />
              634 Halvarn Estates Suit 039
            </p> */}
            <p>
              <span>
                <Link to="/terms-services" className="btn-link">Terms Of Services</Link>
              </span>
            </p>
            <p>
              <span>
                <Link to="/privacy-policy" className="btn-link">Privacy Policy</Link>
                </span>
            </p>
            <p>
              <span>
                <Link to="/faqs" className="btn-link">FAQs</Link>
                </span>
            </p>
            
            </div>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4} className="mt-5 pl-5">
            <h5>Follow Us</h5>
            <div className="mt-3">
            <span className="mr-2">
                <a href="https://www.facebook.com/Maui-4x4-Campers-101081179035044/"><img src={fb} alt="fb-icon" width="40" height="40" /></a>
                </span>
            <span>
                <a href="https://www.instagram.com/maui4x4campers/"><img src={insta} alt="insta-icon" width="40" height="40"/></a>
                </span>
            </div>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4} className="mt-3 pl-5">
          <h5>Contact</h5>
            <div className="mt-3">
            <p>
              Home Tow <br />
              634 Halvarn Estates Suit 039
            </p>
            <p>
              <span>
                <img src={phone} />
              </span>{" "}
              <strong>8 800 888 80 80</strong>
            </p>
            <p>
              <span>
                <img src={skype} />
              </span>{" "}
              <strong>Logo.Skype</strong>
            </p>
            {/* <div>
              <span>.LOGO</span>
              <span>&copy; 2021 All Rights Reserved</span>
            </div> */}
            </div>
          </Col>
        </Row>
        <div className="my-5 text-center">
              <span className="mr-2">.LOGO
                {/* <img src={data && data.footerLogo.sourceUrl} alt="logo" width="30" height="30" /> */}
                </span>
              <span>&copy; 2021 All Rights Reserved</span>
            </div>
      </Container>
    </footer>
  );
};

export default Footer;
