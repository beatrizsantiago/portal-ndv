import React from 'react'

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