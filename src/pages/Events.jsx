import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SweetAlert from 'sweetalert2'

import UserService from '../services/UserService'

import Header from '../components/Header'
import NavigationMenu from '../components/NavigationMenu'

import Colors from '../themes/Colors'

import { Container, Section } from './styles/MainStyled'
import { AddEvent, ListEvent, LastEvent } from './styles/EventsStyled'

export default function Events() {

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

    useEffect(() => {
        
    }, [])

    return (
        <Container>
            <Header />

            <NavigationMenu
                items={[
                    { icon: <AddEvent />, title: 'Cadastrar Eventos', link: '/' },
                    { icon: <ListEvent />, title: 'Listar Eventos', link: '/' },
                    { icon: <LastEvent />, title: 'Último Culto', link: '/' },
                ]}
            />

            <Section>
            </Section>
        </Container>
    )
}