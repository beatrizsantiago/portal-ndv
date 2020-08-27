import React, { useState, useEffect } from 'react'
import SweetAlert from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

import UserService from '../services/UserService'
import EventService from '../services/EventService'

import Header from '../components/Header'
import Card from '../components/Card'
import Button from '../components/Button'
import Loading from '../components/Loading'
import BoxModal from '../components/BoxModal'

import { Container, SectionWrap } from './styles/MainStyled'

import Colors from '../themes/Colors'

export default function ListEvent() {

    const [allEvents, setAllEvents] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
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

    useEffect(() => {
        listEvents()
    }, [])

    const listEvents = () => {
        setLoading(true)
        EventService.ListEventsMonth()
            .then(resp => {
                setAllEvents(resp)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
            })
    }

    const closeModal = () => {
        setModalVisible(false)
    }

    return (
        <Container>
            <Header />
            {
                loading ?
                    <Loading />
                    :
                    <SectionWrap>
                        {
                            allEvents.map((event, index) => (
                                <Card
                                    key={index}
                                    direction="column"
                                    withPhoto={true}
                                    source={event.banner}
                                    buttons={[
                                        <Button title="Cancelar" width={100} height={28} color={Colors.red} />,
                                        <Button title="Alterar" width={100} height={28} color={Colors.yellow} />,
                                        <Button title="Detalhes" width={100} height={28} color={Colors.primary} />,
                                    ]}
                                />
                            ))
                        }
                    </SectionWrap>
            }
            <BoxModal isOpen={modalVisible} closedPress={() => closeModal()}>

            </BoxModal>
        </Container>
    )
}