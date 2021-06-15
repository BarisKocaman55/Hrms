import React, { useEffect, useState } from 'react'
import { Table, Button, Container, Row, Col, ListGroup } from 'react-bootstrap';
import EmployeeService from '../../services/employeeService.js';
import JobPostingService from '../../services/jobPostingService';
import { useHistory } from 'react-router-dom';
import JobDetails from '../Jobs/JobDetails.jsx';

export default function EmployerPage() {

    let history = useHistory();

    const routeChange = () => {
        let path = '/employerJobPosting';
        history.push(path);
    }

    const [employees, setEmployees] = useState([]);
    const [jobDetails, setJobDetails] = useState([]);

    useEffect(() => {
        let employeeService = new EmployeeService();
        employeeService.getEmployee().then(result => setEmployees(result.data.data))
    })

    useEffect(() => {
        let jobService = new JobPostingService();
        jobService.getJobDetails().then(result1 => setJobDetails(result1.data.data))
    })

    return (
        <div >
            <Container style={{ marginTop: '8%' }}>
                <Row>
                    <Col xs={4} md={3}>
                        <ListGroup style={{ marginTop: '19%', marginRight: '4%' }}>
                            <ListGroup.Item>Home</ListGroup.Item>
                            <ListGroup.Item>Employees</ListGroup.Item>
                            <ListGroup.Item>Job Postings</ListGroup.Item>
                            <ListGroup.Item>Candidates</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={14} md={9}>
                        <h2>Employees</h2>
                        <Table striped bordered hover variant="dark" style={{ width: '800px' }}>
                            <thead>
                                <tr>
                                    <th>Employee Id</th>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map(employee => (
                                        <tr>
                                            <td>{employee.employeeId}</td>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.email}</td>
                                            <td><Button variant="outline-info">Info</Button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>

                        <JobDetails />

                    </Col>
                </Row>
            </Container >

            <Container>
                <Row>
                    <Col sm></Col>
                    <Col sm><Button variant="outline-success" onClick={() => {
                            history.push('/employerJobPostsing');
                        }}>Add Jobs</Button></Col>
                    <Col sm></Col>
                </Row>
            </Container>
        </div>

    )
}