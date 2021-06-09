import React from 'react'
import { useState, useEffect } from 'react'
import EmployerService from '../../services/employerService'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

export default function Employer() {


    const [employers, setEmployer] = useState([])

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployer().then(result => setEmployer(result.data.data))
    })

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Employer Id</Table.HeaderCell>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Company Website</Table.HeaderCell>
                        <Table.HeaderCell>Company Email</Table.HeaderCell>
                        <Table.HeaderCell>Company Phone</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employers.map(employer => (
                            <Table.Row>
                                <Table.Cell>{employer.employerId}</Table.Cell>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.companyWebsite}</Table.Cell>
                                <Table.Cell>{employer.email}</Table.Cell>
                                <Table.Cell>{employer.companyPhone}</Table.Cell>
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
