import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import { People } from 'bootstrap-icons-react';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router'

export default function MainPage() {

    let history = useHistory();

    const routeChange = () => {
        let path = '/employerlogin';
        history.push(path);
    }

    return (
        <div>
            <Container style={{ marginTop: "4%" }}>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        <People height={96} width={96} />
                        <h2>Employer</h2>
                        <Button variant="outline-primary" size="lg" onClick={() => {
                            history.push('/employerlogin');
                        }}>Login</Button>
                    </Col>
                    <Col md="auto"></Col>
                    <Col xs lg="2">
                        <People height={96} width={96} />
                        <h2>Employee</h2>
                        <Button variant="outline-primary" size="lg">Login</Button>
                    </Col>
                </Row>
            </Container>


            <Container style={{ marginTop: "10%" }}>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        <People height={96} width={96} />
                        <h2>Candidate</h2>
                        <Button variant="outline-primary" size="lg">Login</Button>
                    </Col>
                    <Col md="auto"></Col>
                    <Col xs lg="2">
                        <People height={96} width={96} />
                        <h2>Personal</h2>
                        <Button variant="outline-primary" size="lg">Login</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
