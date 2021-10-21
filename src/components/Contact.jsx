import React,{useState} from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
      })
    
      const { name, email, message } = formData;
    
      const resetForm = () => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      };

      const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    
      const encode = (data) => {
        // console.log("datataa", data)
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    }
    
      const handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...formData })
        })
        .then((res) => {
          console.log("res=>>", res)
        })
        .catch(error => console.error(error));
        resetForm()
        e.preventDefault();
      };
    return (
    
    <section className="contact-section" id="contact">
      <Container>
        <h2 className="text-center my-5">Contact Us</h2>
        <Form 
        onSubmit={(e) => handleSubmit(e)}
        className="mt-4 text-center" 
        name="contact"
         method="POST" 
         data-netlify="true"
        >
          <Row>
            <Col>
            <input type="hidden" name="form-name" value="contact" />
              <Form.Control
               className="form-control"
               type="text"
               name="name"
               value={name}
               onChange={(e) => handleChange(e)}
               placeholder="Full name"
               required
               className="mt-2" 
               />
            </Col>
            <Col>
              <Form.Control 
              className="form-control"
              type="email"
              name="email"
              value={email}
              onChange={(e) => handleChange(e)}
              placeholder="hello@domain.com"
              required
              className="mt-2" />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <Form.Control 
              as="textarea" 
              rows={3} 
              className="form-control"
              name="message"
              value={message}
              onChange={(e) => handleChange(e)}
              rows={5}
              placeholder="Tell us what we can help you with!"
              required
              />
            </Col>
          </Row>
          <Button variant="dark" type="submit" className="mt-5">
            Submit
          </Button>
        </Form>
      </Container>
    </section>
    )
}

export default Contact
