import React from 'react'
import Employee from '../pages/User/Employee'
import Employer from '../pages/User/Employer'
import { Grid, GridColumn } from "semantic-ui-react";
import Candidate from '../pages/User/Candidate';
import JobPosting from '../pages/Jobs/JobPosting';
import { Header } from 'semantic-ui-react'

export default function Section() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn size={14}>
                        <Header size='large'>Employees</Header>
                        <Employee />
                    </GridColumn>
                </Grid.Row>
                
                <Grid.Row>
                    <GridColumn size={14}>
                        <Header size='large'>Employers</Header>
                        <Employer />
                    </GridColumn>
                </Grid.Row>

                <Grid.Row>
                    <GridColumn size={14}>
                        <Header size='large'>Candidates</Header>
                        <Candidate />
                    </GridColumn>
                </Grid.Row>

                <Grid.Row>
                    <GridColumn size={14}>
                        <Header size='large'>Job Postings</Header>
                        <JobPosting />
                    </GridColumn>
                </Grid.Row>
            </Grid>
        </div>
    )
}
