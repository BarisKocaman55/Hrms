import React, { useEffect, useState } from 'react'
import JobPostingService from '../../services/jobPostingService'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

export default function JobPosting() {

    const [jobPostings, setJobPostings] = useState([])

    useEffect(() => {
        let jobPostingService = new JobPostingService();
        jobPostingService.getJobPosting().then(result => setJobPostings(result.data.data));
    })

    
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Job Posting Id</Table.HeaderCell>
                        <Table.HeaderCell>JobDescription</Table.HeaderCell>
                        <Table.HeaderCell>Min Sallary</Table.HeaderCell>
                        <Table.HeaderCell>Max Sallary</Table.HeaderCell>
                        <Table.HeaderCell>Available Position</Table.HeaderCell>
                        <Table.HeaderCell>Publish Date</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobPostings.map(jobPosting => (
                            <Table.Row>
                                <Table.Cell>{jobPosting.id}</Table.Cell>
                                <Table.Cell>{jobPosting.jobDescription}</Table.Cell>
                                <Table.Cell>{jobPosting.minSallary}</Table.Cell>
                                <Table.Cell>{jobPosting.maxSallary}</Table.Cell>
                                <Table.Cell>{jobPosting.availablePos}</Table.Cell>
                                <Table.Cell>{jobPosting.publishDate}</Table.Cell>
                                <Table.Cell>
                                    <Button animated>
                                        <Button.Content visible>Show Details</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='arrow right' />
                                        </Button.Content>
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
