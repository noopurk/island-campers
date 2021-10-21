import React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";

const TourSection = () => {
    const data = useStaticQuery(graphql`
    {
      tours: wpCategory(name: { eq: "Tours" }) {
        slug
        posts {
          nodes {
            title
            slug
            content
            post {
              shortDescription
            }
            featuredImage {
              node {
                sourceUrl
                srcSet
              }
            }
          }
        }
      }
    }
  `);
//   console.log("data===???", data)
    return (
        <section className="tour-section" id="tours">
        <Container>
          <h2 className="text-center my-5">Tours</h2>
          {data && data.tours.posts.nodes.length && data.tours.posts.nodes.map((tour) => (
            <Row className="mt-5">
              <Col sm={12} md={6}>
                <Link to ={`${data.tours.slug}/${tour.slug}`} >
                  <img src={tour.featuredImage.node.sourceUrl} className="w-100" />
              </Link>
                  </Col>
              <Col sm={12} md={6}>
              <Link to ={`${data.tours.slug}/${tour.slug}`} className="btn-link">
                <h3>{tour.title}</h3>
                <p>{tour.post.shortDescription}</p>
                </Link>
              </Col>
            </Row>
          ))}
        </Container>
      </section>
    )
}

export default TourSection
