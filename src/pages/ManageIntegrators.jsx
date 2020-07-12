import React from 'react'

import Header from '../components/Header'
import Card from '../components/Card'

import { Container, SectionWrap } from './styles/MainStyled'

export default function ManageIntegrators() {
    return (
        <Container>
            <Header />
            <SectionWrap>
                <Card
                    withPhoto={true}
                    source="https://i.pinimg.com/originals/6f/07/81/6f0781401d0b431db79925756db27adb.jpg"
                    title="Annabeth Chase"
                    values={[
                        { label: 'Mentor', text: 'Atena Chase' },
                        { label: 'Rede', text: '2' },
                        { label: 'N° de feedbacks', text: '20' },
                        { label: 'Acompanha', text: '5 vidas' },
                    ]}
                />
            </SectionWrap>
        </Container>
    )
}