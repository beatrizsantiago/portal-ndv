import React from 'react'

import Header from '../components/Header'
import NavigationMenu from '../components/NavigationMenu'

import { Container, Section } from './styles/MainStyled'
import { AddressCard, HandHeart, UsersCog, Graph, BarGraph } from './styles/IntegrationStyled'

export default function Integration() {
    return (
        <Container>
            <Header />

            <NavigationMenu
                items={[
                    { icon: <AddressCard />, title: 'Cadastrar Visitantes', link: '/integration/register' },
                    { icon: <UsersCog />, title: 'Gerenciar Integradores', link: '/integration/integrators' },
                    { icon: <HandHeart />, title: 'Acompanhar Vidas', link: '/integration/lifes' },
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