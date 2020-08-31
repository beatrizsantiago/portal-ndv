import React, { useState, useEffect } from 'react'
import SweetAlert from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

import UserService from '../services/UserService'
import EventService from '../services/EventService'

import Header from '../components/Header'
import Card from '../components/Card'
import Button from '../components/Button'
import Loading from '../components/Loading'
import BoxModal from '../components/BoxModal'

import { Container, SectionWrap } from './styles/MainStyled'
import { ImageBanner, BodyModal, Title, Description, Row, RowWrap, Label, Text, Subtitle, Column } from './styles/ListEventStyled'

import Colors from '../themes/Colors'

export default function ListEvent() {

    const [allEvents, setAllEvents] = useState([])
    const [eventSelected, setEventSelected] = useState({})
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

    const handlePressCancel = (event) => {
        SweetAlert.fire({
            icon: 'warning',
            title: 'Atenção!',
            text: `Deseja cancelar o evento ${event.title}.`,
            confirmButtonColor: Colors.red,
            confirmButtonText: 'Sim',
            showCancelButton: true,
            cancelButtonColor: Colors.green,
            cancelButtonText: 'Não',
        })
            .then(result => {
                if (result.value) {
                    EventService.CancelEvent(event.id)
                        .then(() => {
                            SweetAlert.fire({
                                icon: 'success',
                                text: `${event.title} foi cancelado!`,
                                confirmButtonColor: Colors.green,
                            })
                            listEvents()
                        })
                        .catch(error => {
                            SweetAlert.fire({
                                icon: 'error',
                                text: `Não foi possível cancelar o evento ${event.title}.`,
                                confirmButtonColor: Colors.red,
                            })
                        })
                }
            })
    }

    const openModalDetails = (event) => {
        EventService.DetailsEvent(event.id)
            .then(resp => {
                setEventSelected(resp)
                setModalVisible(true)
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
                                    title={event.title}
                                    values={[
                                        { label: 'Organizador', text: event.organizer || 'Não informado' },
                                        { label: 'Tipo de ingresso', text: event.typeTicket === 0 ? 'Gratuito' : 'Pago' },
                                    ]}
                                    buttons={[
                                        <Button title="Cancelar" onClick={() => handlePressCancel(event)} width={100} height={28} color={Colors.red} />,
                                        <Button title="Alterar" width={100} height={28} color={Colors.yellow} />,
                                        <Button title="Detalhes" onClick={() => openModalDetails(event)} width={100} height={28} color={Colors.primary} />,
                                    ]}
                                />
                            ))
                        }
                    </SectionWrap>
            }
            <BoxModal isOpen={modalVisible} closedPress={() => closeModal()} padding={false}>
                <ImageBanner source={eventSelected?.banner} />
                <BodyModal>
                    <Title>{eventSelected?.title}</Title>
                    <Description>{eventSelected?.description || ''}</Description>
                    <Row>
                        <Label>Organizador: </Label>
                        <Text>{eventSelected?.organizer || 'Não informado'}</Text>
                    </Row>
                    <RowWrap>
                        <Row type={1}>
                            <Label>Tipo de Ingresso: </Label>
                            <Text>{eventSelected?.typeTicket === 0 ? 'Gratuito' : 'Pago'}</Text>
                        </Row>
                        <Row type={1}>
                            <Label>Valor: </Label>
                            <Text>{eventSelected.valueTicket !== undefined ? `R$${eventSelected.valueTicket.toFixed(2).replace('.', ',')}` : ''}</Text>
                        </Row>
                    </RowWrap>
                    <Subtitle>Programação</Subtitle>
                    <RowWrap>
                        {
                            eventSelected.schedule !== undefined ?
                                eventSelected.schedule.map((day, index) => (
                                    <Column key={index} index={index} quantity={eventSelected.schedule.length}>
                                        <Row>
                                            <Label>Dia: </Label>
                                            <Text>{moment(day.date).format('DD/MM/YYYY')}</Text>
                                        </Row>
                                        <Row>
                                            <Label>Hora de Início: </Label>
                                            <Text>{day.initTime}h</Text>
                                        </Row>
                                        <Row>
                                            <Label>Hora de Término: </Label>
                                            <Text>{day.endTime}h</Text>
                                        </Row>
                                        <Row>
                                            <Label>Preletor: </Label>
                                            <Text>{day.preacher}</Text>
                                        </Row>
                                    </Column>
                                )) : null
                        }
                    </RowWrap>
                </BodyModal>
            </BoxModal>
        </Container>
    )
}