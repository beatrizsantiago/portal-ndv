import React, { useState, useEffect } from 'react'
import SweetAlert from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

import UserService from '../services/UserService'
import EventService from '../services/EventService'

import Header from '../components/Header'
import BoxForm from '../components/BoxForm'
import RowInputs from '../components/RowInputs'
import Input from '../components/Input'
import InputTextArea from '../components/InputTextArea'
import Button from '../components/Button'
import Select from '../components/Select'
import MessageBox from '../components/MessageBox'

import { Container, Section } from './styles/MainStyled'
import { Title, Row, SmallRow, RemoveIcon, RemoveDay } from './styles/EventsStyled'
import Colors from '../themes/Colors'

export default function RegisterLife() {

    const [title, setTitle] = useState('')
    const [organizer, setOrganizer] = useState('')
    const [typeTicket, setTypeTicket] = useState('0')
    const [valueTicket, setValueTicket] = useState('')
    const [daysEvent, setDaysEvent] = useState([{ date: '', initTime: '', endTime: '', preacher: '' }])
    const [description, setDescription] = useState('')
    const [messageError, setMessageError] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loadingNewDay, setLoadingNewDay] = useState(false)

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

    const sendDatas = () => {
        setLoading(true)
        EventService.RegisterNewEvent(title, organizer, parseInt(typeTicket), valueTicket ? parseFloat(valueTicket) : 0.0, daysEvent, description)
            .then(() => {
                setLoading(false)
                SweetAlert.fire({
                    icon: 'success',
                    text: 'Cadastro realizado com sucesso!',
                    confirmButtonColor: Colors.green,
                }).then(result => {
                    if (result.value) {
                        navigate('/events')
                    }
                })
            })
            .catch(error => {
                setLoading(false)
                SweetAlert.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Não foi possível realizar o cadastro. Tente novamente mais tarde!',
                    confirmButtonColor: Colors.primary,
                })
            })
    }

    const validationDatas = () => {
        setError(false)
        setMessageError('')

        let nullDatas = daysEvent.filter(day => day.date === '' || day.initTime === '' || day.endTime === '')

        if (title.length < 3) {
            setMessageError('O campo Título precisa ter mais que 3 caracteres.')
            setError(true)

        } else if (typeTicket === '') {
            setMessageError('É necessário escolher o tipo de ingresso.')
            setError(true)

        } else if (typeTicket === '1' && valueTicket === '') {
            setMessageError('Para a opção de ingresso pago, é necessário inserir o valor.')
            setError(true)

        } else if (nullDatas.length > 0) {
            setMessageError('É necessário preencher a data, a hora de início e a hora final de toda a programação.')
            setError(true)

        } else {
            sendDatas()
        }
    }

    const onChangeDaysEvent = (index, label) => event => {
        const newDay = daysEvent.map((day, idx) => {
            if (index !== idx) return day
            return { ...day, [label]: event.target.value }
        })
        setDaysEvent(newDay)
    }

    const removeDayEvent = (index) => {
        setError(false)
        setMessageError('')

        if (daysEvent.length === 1) {
            setError(true)
            setMessageError('Não é possível remover este dia, é necessário que o evento tenha no mínimo um dia na programação.')

        } else {
            setLoadingNewDay(true)
            let allDays = daysEvent
            allDays.splice(index, 1)

            setTimeout(() => {
                setDaysEvent(allDays)
                setLoadingNewDay(false)
            }, 100);
        }
    }

    const addDay = () => {
        setLoadingNewDay(true)
        let oldDays = daysEvent
        oldDays.push({ date: '', initTime: '', endTime: '', preacher: '' })

        setTimeout(() => {
            setDaysEvent(oldDays)
            setLoadingNewDay(false)
        }, 100);
    }

    return (
        <Container>
            <Header />

            <Section>
                <BoxForm
                    title="Cadastrar Evento"
                    buttons={[
                        <Button title="Voltar" to="/events" type="link" outlined={true} />,
                        <Button title="Enviar" onClick={() => validationDatas()} loading={loading ? 1 : 0} />,
                    ]}
                >
                    {error ? <MessageBox text={messageError} /> : null}
                    <Input label="Título" value={title} onChange={event => setTitle(event.target.value)} disabled={loading} maxLength="200" required />
                    <Input label="Organizador" value={organizer} onChange={event => setOrganizer(event.target.value)} disabled={loading} maxLength="200" />
                    <RowInputs inputs={[
                        <Select
                            label="Tipo de ingresso"
                            value={typeTicket}
                            onChange={event => setTypeTicket(event.target.value)}
                            disabled={loading}
                            options={[
                                { label: 'Gratuito', value: '0' },
                                { label: 'Pago', value: '1' },
                            ]}
                            required
                        />,
                        <Input label="Valor" value={valueTicket} onChange={event => setValueTicket(event.target.value)} type="number" disabled={loading ? true : typeTicket === '1' ? false : true} maxLength="200" required />
                    ]} />
                    <Title>Programação</Title>
                    {
                        loadingNewDay === false ?
                            daysEvent.map((day, index) => (
                                <RowInputs key={index} inputs={[
                                    <Input label="Data" value={daysEvent[index].date} onChange={onChangeDaysEvent(index, 'date')} disabled={loading} type="date" required />,
                                    <Input label="Hora de Início" value={daysEvent[index].initTime} onChange={onChangeDaysEvent(index, 'initTime')} disabled={loading} type="time" required />,
                                    <Input label="Hora de Término" value={daysEvent[index].endTime} onChange={onChangeDaysEvent(index, 'endTime')} disabled={loading} type="time" required />,
                                    <Row>
                                        <SmallRow>
                                            <Input label="Preletor" value={daysEvent[index].preacher} onChange={onChangeDaysEvent(index, 'preacher')} disabled={loading} maxLength="200" />
                                        </SmallRow>
                                        <RemoveDay onClick={() => removeDayEvent(index)}>
                                            <RemoveIcon />
                                        </RemoveDay>
                                    </Row>
                                ]} />
                            )) : null
                    }
                    <Button title="Adicionar dia" onClick={() => addDay()} />
                    <InputTextArea label="Descrição" value={description} onChange={event => setDescription(event.target.value)} />
                </BoxForm>
            </Section>

        </Container>
    )
}