import React, { useState } from "react"

import Layout from "../components/Layout"
import AOS from 'aos';
import { graphql, useStaticQuery } from "gatsby"
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import fb from '../assets/images/icon/fb.png'
import insta from '../assets/images/icon/insta.png'
import aboutImg1 from '../assets/images/about-img1.png'
import aboutImg2 from '../assets/images/about-img2.png'
import rental from '../assets/images/rental-iframe.png'
import { Link } from 'react-scroll';
import Contact from "../components/Contact";
import BlogSection from "../components/BlogSection";
import TourSection from "../components/TourSection";
import { animateScroll as scroll } from "react-scroll";
// import useInstagram from '../hooks/useInstagram'
// import "aos/dist/aos.css";

const IndexPage = () => {
  const [showButton, setShowButton] = useState(false);
  React.useEffect(() => {
    // initNetlifyIdentity()
    AOS.init({
      duration: 1000,
      delay: 50,
      once: true
    });
    AOS.refresh();

    //Wheelbase script
    var script = document.createElement("script");
    script.src = "https://d3cuf6g1arkgx6.cloudfront.net/sdk/wheelbase.min.js";
    script.async = true;
    document.body.appendChild(script)

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, [])
  const data = useStaticQuery(graphql`
  {
    wpPage(title: {eq: "Home"}) {
    about {
      aboutTitle
      aboutDescription
      fieldGroupName
    }
    rates {
      rentalRates
      fieldGroupName
      title
    }
  }
  allInstagramContent {
      nodes {
        media_url
    }
  }
  }
  `)
  //  const instaPics = useInstagram();
  // console.log("instaPics", data)

  return (
    <Layout>
      {/* <div dangerouslySetInnerHTML={{__html: data.wpPage.content}}></div> */}
      {/*===============================================
        					Start Hero Content Area Design
                ================================================ */}
      <section className="hero-section" id="home">
        <div className="overlay"></div>
        <Container fluid>
          <div className="hero-content">
            <Link to="contact"><Button variant="outline-light" className="contact-btn">Contact</Button></Link>
            <div className="text-center my-2">
              <span className="mr-3">
                <a href="#"><img src={fb} alt="fb-icon" width="40" height="40" /></a></span>
              <span>
                <a href="#"><img src={insta} alt="insta-icon" width="40" height="40" /></a>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* About, Rentals, Tours, Rates, Blog, Contact */}
      {/*===============================================
                    Start About Content Area Design
            ================================================ */}

      <section className="about-section" id="about">
        <Container>
          <Row>
            <h2 className="text-center w-100 my-5">About</h2>
            <Col className="left-col" xs={12} sm={6} md={6} lg={6} >
              <div className="about-img-1"> <img src={aboutImg1} /></div>
              <div className="about-img-2"><img src={aboutImg2} /></div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} className="p-5">
              <h2>{data && data.wpPage.about && data.wpPage.about.aboutTitle}</h2>
              <p>{data && data.wpPage.about && data.wpPage.about.aboutDescription}</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/*===============================================
                    Start Rentals Content Area Design
            ================================================ */}

      <section className="rental-section" id="rentals">
        <Container>
          <h2 className="text-center my-3">Rentals</h2>
          <div id="outdoorsy-book-now-container" data-owner="2008693" data-newfilters="true" data-calendar="false" data-color="000000"></div>
          {/* <div className="iframe-wrapper">
            <img src={rental} alt="rental iframe" className="h-100 w-100" />
          </div> */}
        </Container>
      </section>

      <TourSection />

      {/*===============================================
                 Start Rates Content Area Design
            ================================================ */}

      <section className="rates-section" id="rates">
        <Container>
          <h2 className="text-center my-5">Rates</h2>
          <div className="p-3 w-75 p-sm-1">
            <h3>{data && data.wpPage.rates && data.wpPage.rates.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: data && data.wpPage.rates && data.wpPage.rates.rentalRates }}></div>

          </div>
        </Container>
      </section>

      <BlogSection />
      <Contact />
      <section className="insta-section">
        <Container>
          <h2 className="text-center my-5">Follow Us On INSTAGRAM</h2>
          <Row>
            {data.allInstagramContent.nodes.map(post => (
              <Col xs={12} sm={6} md={4} lg={4} >
                <img src={post.media_url} alt="insta post" className="w-100" />
              </Col>

            ))}
          </Row>
        </Container>
      </section>
      {showButton && (
        <Button variant="dark" onClick={ ()=> scroll.scrollToTop()} className="back-to-top rounded-circle">
          &#8679;
        </Button>
      )}
    </Layout>
  )
}

export default IndexPage
