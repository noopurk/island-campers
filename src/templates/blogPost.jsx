import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Layout from '../components/Layout';

const BlogPost = ({ pageContext: { data } }) => {
    // console.log("data==>>>", data)
    return (
        <Layout>
        <Container>
            <Row>
                <Col>
                <h1 className="mt-5">{data.title}</h1>
                <img src={data.featuredImage.node.sourceUrl} height="500" className="w-75 my-5" />
                <div dangerouslySetInnerHTML={{__html: data.content}}></div>
                </Col>
                </Row>
        </Container>
        </Layout>
    )
}

export default BlogPost
