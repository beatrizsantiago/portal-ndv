import React from 'react'

import Header from '../components/Header'
import NavigationMenu from '../components/NavigationMenu'

import { Container } from './styles/MainStyled'
import { AddressCard, HandHeart, UsersCog, Section, Graph, BarGraph } from './styles/IntegrationStyled'

export default function Integration() {
    return (
        <Container>
            <Header />

            <NavigationMenu
                items={[
                    { icon: <AddressCard />, title: 'Cadastrar Visitantes', link: '/' },
                    { icon: <UsersCog />, title: 'Gerenciar Integradores', link: '/' },
                    { icon: <HandHeart />, title: 'Acompanhar Vidas', link: '/' },
                ]}
            />

            <Section>
                <Graph>
                    <BarGraph data={[12, 19, 5, 10, 30, 20, 2]} />
                </Graph>
            </Section>
        </Container>
    )
}