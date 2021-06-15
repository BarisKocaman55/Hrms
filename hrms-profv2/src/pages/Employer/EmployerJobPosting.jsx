import React, { useState, useEffect } from 'react'
import { Row, Col, Container, Button, Dropdown, DropdownButton, Form, ListGroup } from 'react-bootstrap';
import CityService from '../../services/cityService.js';

export default function EmployerJobPosting() {

    

    const [cities, setCity] = useState([]);

    useEffect(() => {
        let cityService = new CityService();
        cityService.getCity().then(result => setCity(result.data.data));
    })

    return (
        <div>

            <Container style={{ marginTop: "7%" }}>
                <Row>
                    <Col xs={6} md={4}>
                        <ListGroup>
                            <ListGroup.Item>Added Jobs</ListGroup.Item>
                            <ListGroup.Item>Employers</ListGroup.Item>
                            <ListGroup.Item>Employees</ListGroup.Item>
                            <ListGroup.Item>Cv Details</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={12} md={8} style={{ border: "solid" }}>
                        <Form>
                            <h2>Add Job</h2>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridJob">
                                    <Form.Label>Job Position</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Job"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control as="select" defaultValue="Chose City..." >
                                        {
                                            cities.map(city => (
                                                <option>{city.name}</option>
                                            ))
                                        }
                                        
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridWorkPlace">
                                    <Form.Label>Work Place</Form.Label>
                                    <Form.Control as="select" defaultValue="Ankara">
                                        <option>Chose Work Place...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridWorkType">
                                    <Form.Label>Work Type</Form.Label>
                                    <Form.Control as="select" defaultValue="Chose Work Type..." required>
                                        <option>Chose Work Type...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridMinSallary">
                                    <Form.Label>Minimum Sallary</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridMaxSallary">
                                    <Form.Label>Maximum Sallary</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridOpenPosition">
                                    <Form.Label>Open Position</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridDate">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="date" name='date' />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridDescription">
                                    <Form.Label>Job Description</Form.Label>
                                    <Form.Control size="lg" type="text" style={{ height: "100px" }} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
