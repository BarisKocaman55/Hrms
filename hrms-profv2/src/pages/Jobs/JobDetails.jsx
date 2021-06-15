import React, { useEffect, useState } from 'react'
import { Table, Button, Container, Row, Col, ListGroup } from 'react-bootstrap';
import JobService from '../../services/jobService.js';

export default function JobDetails() {

    const [jobDetails, setJobDetails] = useState([]);
    useEffect(() => {
        let jobService = new JobService();
        jobService.getJobDetails().then(result1 => setJobDetails(result1.data.data))
    })

    return (
        <div>
            <h2>Posted Jobs</h2>
            <Table striped bordered hover variant="dark" style={{ width: '800px' }}>
                <thead>
                    <tr>
                        <th>Jobs Id</th>
                        <th>Job Title</th>
                        <th>Minimum Sallary</th>
                        <th>Maximum Sallary</th>
                        <th>Available Position</th>
                        <th>Job Description</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobDetails.map(jobDetail => (
                            <tr>
                                <td>{jobDetail.id}</td>
                                <td>{jobDetail.jobTitle}</td>
                                <td>{jobDetail.minSallary}</td>
                                <td>{jobDetail.maxSallary}</td>
                                <td>{jobDetail.availablePos}</td>
                                <td>{jobDetail.jobDescription}</td>
                                <td><Button variant="outline-info">Info</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
