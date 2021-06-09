import React from 'react'
import { Container, Menu, Icon } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'


export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item name='Home' />

                    <Menu.Item name='Employers' />

                    <Menu.Item name='Employees' />

                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button.Group>
                                <Button>Sign In</Button>
                                <Button.Or />
                                <Button positive>Sıgn Up</Button>
                            </Button.Group>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
