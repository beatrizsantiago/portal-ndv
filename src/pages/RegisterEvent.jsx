import React, { useState, useEffect } from 'react'
import SweetAlert from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

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
import Colors from '../themes/Colors'

export default function RegisterLife() {

    const [title, setTitle] = useState('')
    const [organizer, setOrganizer] = useState('')
    const [typeTicket, setTypeTicket] = useState('0')
    const [valueTicket, setValueTicket] = useState('')
    const [daysEvent, setDaysEvent] = useState([{ date: '', initTime: '', endTime: '', preacher: '' }])
    const [messageError, setMessageError] = useState('')
    const [error, setError] = useState(false)
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

    const sendDatas = () => {
        setLoading(true)
        EventService.RegisterNewEvent()
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
        if (title.length < 3) {
            setMessageError('O campo Título precisa ter mais que 3 caracteres.')
            setError(true)
        }
        sendDatas()
    }

    const onChangeDaysEvent = (index, label) => event => {
		const newDay = daysEvent.map((day, idx) => {
			if (index !== idx) return day
			return { ...day, [label]: event.target.value }
        })
        setDaysEvent(newDay)
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
                    <Input label="Organizador" value={organizer} onChange={event => setOrganizer(event.target.value)} disabled={loading} maxLength="200" required />
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
                        <Input label="Valor" value={valueTicket} onChange={event => setValueTicket(event.target.value)} disabled={loading ? true : typeTicket === '1' ? false : true} maxLength="200" required />
                    ]} />
                    {
                        daysEvent.map((day, index) => (
                            <RowInputs key={index} inputs={[
                                <Input label="Data" value={daysEvent[index].date} onChange={onChangeDaysEvent(index, 'date')} disabled={loading} type="date" required />,
                                <Input label="Hora de Início" value={daysEvent[index].initTime} onChange={onChangeDaysEvent(index, 'initTime')} disabled={loading} type="time" required />,
                                <Input label="Hora de Término" value={daysEvent[index].endTime} onChange={onChangeDaysEvent(index, 'endTime')} disabled={loading} type="time" required />,
                                <Input label="Preletor" value={daysEvent[index].preacher} onChange={onChangeDaysEvent(index, 'preacher')} disabled={loading} maxLength="200" />
                            ]} />
                        ))
                    }
                    <InputTextArea label="Descrição" />
                </BoxForm>
            </Section>

        </Container>
    )
}