import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SweetAlert from 'sweetalert2'

import UserService from '../services/UserService'
import EventService from '../services/EventService'

import Header from '../components/Header'
import NavigationMenu from '../components/NavigationMenu'
import Loading from '../components/Loading'

import Colors from '../themes/Colors'

import { Container, Section } from './styles/MainStyled'
import { AddEvent, ListEvent, UpdateSchedule, CalendarEvent } from './styles/EventsStyled'

export default function Events() {

    const [allEvents, setAllEvents] = useState([])
    const [loading, setLoading] = useState(false)

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
                    navigate('/')
                }
            })
    })

    const getEvents = () => {
        setLoading(true)
        EventService.ListEventsMonth()
            .then(resp => {
                setAllEvents(resp)
                setLoading(false)
            })
            .catch(error => {

            })
    }

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <Container>
            <Header />

            <NavigationMenu
                items={[
                    { icon: <UpdateSchedule />, title: 'Atualizar Agenda', link: '/events/schedule' },
                    { icon: <ListEvent />, title: 'Listar Eventos', link: '/events/list' },
                    { icon: <AddEvent />, title: 'Criar Evento', link: '/events/register' },
                ]}
            />

            <Section>
                {
                    loading ?
                        <Loading />
                        :
                        <CalendarEvent events={allEvents} onSelectEvent={(props) => console.log(props)} />
                }
            </Section>
        </Container>
    )
}