import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Layout from '../components/Layout';

const CustomPage = ({ pageContext: { data } }) => {
    return (
        <Layout>
        <Container className="my-5">
            <Row>
                <Col>
                <h1 className="mb-5">{data.title}</h1>
                <div dangerouslySetInnerHTML={{__html: data.content}}></div>
                </Col>
                </Row>
        </Container>
        </Layout>
    )
}

export default CustomPage
