import React from 'react'
import { Grid, Icon, Menu, Segment } from 'semantic-ui-react'

export default function Categories() {
    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item name="user">
                    <Icon name="user" />
                    Employers
                </Menu.Item>

                <Menu.Item name="user circle">
                    <Icon name="user circle" />
                    Employees
                </Menu.Item>

                <Menu.Item name="user">
                    <Icon name="user" />
                    Candidates
                </Menu.Item>

                <Menu.Item name="archive">
                    <Icon name="archive" />
                    Job Posting
                </Menu.Item>
            </Menu>
        </div>
    )
}
