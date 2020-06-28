import React from 'react'

import Header from '../components/Header'

import { Container } from './styles/MainStyled'
import { Section, Card, ImageIntegration, Label, ImageCap } from './styles/HomeStyled'

export default function Home() {
    return (
        <Container>
            <Header />
            <Section>
                <Card>
                    <ImageIntegration />
                    <Label>Integração</Label>
                </Card>

                <Card>
                    <ImageCap />
                    <Label>Casa de Paz</Label>
                </Card>
            </Section>
        </Container>
    )
}