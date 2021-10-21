// import { Link } from 'gatsby'
import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo/logo.png";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby";

const initNetlifyIdentity = () => {
  const script = document.createElement("script");
  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
  script.async = true;
  document.body.appendChild(script);
  // console.log("netlifyIdentity");
};
const openNetlifyModal = () => {
  const netlifyIdentity = window.netlifyIdentity;

  if (netlifyIdentity) {
    netlifyIdentity.open();
  } else {
    console.log("netlifyIdentity is not defined");
  }
};

const Header = () => {
  const [isScroll, setScroll] = useState(false);
  const [path, setPath] = useState("");
  useEffect(() => {
    initNetlifyIdentity();

    // document.addEventListener("scroll", () => {
    //   const topScroll = window.scrollY > 10;
    //   topScroll ? setScroll(true) : setScroll(false);
    // });
    setPath(window.location.pathname);
  }, [initNetlifyIdentity]);

  const data = useStaticQuery(graphql`
    {
      logo: wpMediaItem(title: { eq: "logo" }) {
        srcSet
        sourceUrl
      }
    }
  `);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={isScroll ? "dark" : "light"}
      variant={isScroll ? "dark" : "light"}
      // sticky="top"
    >
      <div className="container">
        <Navbar.Brand>
          <GatsbyLink to="/" className="navbar-brand">
            <img
              src={data && data.logo && data.logo.sourceUrl}
              alt="logo"
              width="50"
              height="50"
            />
            {/* TypoCode */}
          </GatsbyLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ml-auto">
            {path === "/" && (
              <>
                {/* <Nav.Item>
                  <Nav.Link>
                    <Link to="home" className="nav-link">
                      Home
                    </Link>
                  </Nav.Link>
                </Nav.Item> */}
                <Nav.Item>
                  <Nav.Link>
                    <Link to="about" className="nav-link">
                      About
                    </Link>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link>
                    <Link to="rentals" className="nav-link">
                      Rentals
                    </Link>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link>
                    <Link to="tours" className="nav-link">
                      Tours
                    </Link>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link>
                    <Link to="blog" className="nav-link">
                      Blogs
                    </Link>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link>
                    <Link to="rates" className="nav-link">
                      Rates
                    </Link>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link>
                    <Link to="contact" className="nav-link">
                      Contact
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              </>
            )}

            <Button
              variant={isScroll ? "outline-light" : "outline-dark"}
              onClick={() => openNetlifyModal()}
            >
              Login / Signup
            </Button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
