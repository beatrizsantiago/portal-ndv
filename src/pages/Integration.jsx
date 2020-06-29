import React from 'react'

import Header from '../components/Header'
import NavigationMenu from '../components/NavigationMenu'

import { Container } from './styles/MainStyled'
import { AddressCard, HandHeart, UsersCog } from './styles/IntegrationStyled'

export default function Integration() {
    return (
        <Container>
            <Header />
            <NavigationMenu
                items={[
                    { icon: <AddressCard />, title: 'Cadastrar Visitantes', link: '/' },
                    { icon: <HandHeart />, title: 'Acompanhar Vidas', link: '/' },
                    { icon: <UsersCog />, title: 'Gerenciar Integradores', link: '/' },
                ]}
            />
        </Container>
    )
}