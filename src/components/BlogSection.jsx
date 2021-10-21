import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const BlogSection = () => {
  const data = useStaticQuery(graphql`
    {
      blogs: wpCategory(name: { eq: "Blog" }) {
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
  const totalBlogs = data.blogs.posts.nodes;
  const [list, setList] = useState([...totalBlogs.slice(0, 10)]);

  const [loadMore, setLoadMore] = useState(false);

  const [hasMore, setHasMore] = useState(totalBlogs.length > 10);

  const handleLoadMore = () => {
    setLoadMore(true);
  };
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length;
      const isMore = currentLength < totalBlogs.length;
      const nextResults = isMore
        ? totalBlogs.slice(currentLength, currentLength + 10)
        : [];
      setList([...list, ...nextResults]);
      setLoadMore(false);
    }
  }, [loadMore, hasMore]);

  useEffect(() => {
    const isMore = list.length < totalBlogs.length;
    setHasMore(isMore);
  }, [list]);
  return (
    <section className="blog-section" id="blog">
      <Container className="text-center">
        <h2 className="text-center my-5">Blog</h2>
        <Row xs={1} md={2} className="g-4 mt-3">
          {list.map((blog) => (
              <Col xs={12} sm={12} md={6} lg={6} className="my-3">
                <Link
                  to={`/${data.blogs.slug}/${blog.slug}`}
                  className="btn-link"
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src={blog.featuredImage.node.sourceUrl}
                      height="400"
                    />
                    <Card.Body>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.post.shortDescription}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
        </Row>
        {hasMore ? (
        //      <button onClick={handleLoadMore} className="btn btn-block btn-outline-gray-300 d-flex align-items-center">
        //      <span className="mx-auto">Load more</span> <i className="fe fe-arrow-right"></i>
        //    </button>
           <Button onClick={handleLoadMore} variant="dark" className="my-5">
           Load More
         </Button>
        
      ) : (
        <Button variant="dark" className="my-5">
        No More BLogs
      </Button>
      )}
        {/* <Button variant="dark" className="my-5">
          Load More
        </Button> */}
      </Container>
    </section>
  );
};

export default BlogSection;
