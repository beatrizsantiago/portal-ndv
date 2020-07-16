import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { Container, Section } from './styles/MainStyled'
import { Circle, ImageProfile, ButtonCircle, IconPen, Box } from './styles/UserProfileStyled'

export default function UserProfile() {
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