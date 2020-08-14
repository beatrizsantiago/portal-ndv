import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import UserService from '../services/UserService'

import { Container, Section } from './styles/MainStyled'
import { Circle, ImageProfile, ButtonCircle, IconPen, Box } from './styles/UserProfileStyled'

export default function UserProfile() {

    let navigate = useNavigate()

    useEffect(() => {
        UserService.GetSession()
            .then(isAuth => {
                if (isAuth === false) {
                    navigate('/')
                }
            })
    })
    
    return (
        <Container>
            <Section>
                <Box>
                    <Circle>
                        <ImageProfile />
                        <ButtonCircle><IconPen /></ButtonCircle>
                    </Circle>
                    
                </Box>
            </Section>
        </Container>
    )
}