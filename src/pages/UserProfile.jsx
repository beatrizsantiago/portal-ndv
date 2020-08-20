import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SweetAlert from 'sweetalert2'

import UserService from '../services/UserService'

import Colors from '../themes/Colors'

import { Container, Section } from './styles/MainStyled'
import { Circle, ImageProfile, ButtonCircle, IconPen, Box } from './styles/UserProfileStyled'

export default function UserProfile() {

    let navigate = useNavigate()

    useEffect(() => {
        UserService.GetSession()
            .then(isAuth => {
                if (isAuth === false) {
                    SweetAlert.fire({
                        icon: 'warning',
                        title: 'Atenção!',
                        text: 'Sua sessão expirou! É necessário fazer o login novamente.',
                        confirmButtonColor: Colors.yellow,
                    })
                    .then(() => navigate('/'))
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