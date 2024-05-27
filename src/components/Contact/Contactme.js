import { Container, Row, Col ,Form,Button } from "react-bootstrap";

import { Last } from 'react-bootstrap/esm/PageItem';
const Contactme =()=>{
    return (
        <section>
            <Container>
                <div><h2>Contact me </h2></div>
                <Row>
                    <Col md={2}></Col>
                    <Col md={4}>
                        <div>
                            <Form className="contact_form mr-5">
                                <Form.Group className="contact-form-group mt-3">
                                    <Form.Label className="contact-form-label">E-mail</Form.Label>
                                    <Form.Control className="contact-form-control" alt='email' type='email' placeholder='Enter your email' />
                                </Form.Group>
                                <Form.Group className="mt-3" >
                                    <Form.Label className="contact-form-label">Name</Form.Label>
                                    <Form.Control alt='Name' type='text' placeholder='Enter your email' />
                                </Form.Group>
                                <Form.Group  className="mt-3">
                                    <Form.Label className="contact-form-label">Message</Form.Label>
                                    <Form.Control as={'textarea'} placeholder='Enter your Message' />
                                </Form.Group>
                                <Button className="m-4" variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col md={6}>
                    </Col >
                </Row>
            </Container>
        </section>
    )
}
export default Contactme;