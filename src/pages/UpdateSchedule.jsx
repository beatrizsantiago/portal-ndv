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
import Button from '../components/Button'
import Select from '../components/Select'
import MessageBox from '../components/MessageBox'

import { Container, Section } from './styles/MainStyled'
import Colors from '../themes/Colors'

export default function UpdateSchedule() {

    const [title, setTitle] = useState('')
    const [banner, setBanner] = useState('')
    const [dateSchedule, setDateSchedule] = useState('')
    const [initHour, setInitHour] = useState('')
    const [endHour, setEndHour] = useState('')
    const [frequencyWeek, setFrequencyWeek] = useState('0')
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
        EventService.ScheduleUpdate(title, moment(dateSchedule).format(), initHour, endHour, parseInt(frequencyWeek))
            .then(() => {
                setLoading(false)
                SweetAlert.fire({
                    icon: 'success',
                    text: 'Atualização realizada com sucesso!',
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
                    text: 'Não foi possível realizar a atualização. Tente novamente mais tarde!',
                    confirmButtonColor: Colors.primary,
                })
            })
    }

    const validationDatas = () => {
        setError(false)
        setMessageError('')

        if (title.length < 3) {
            setMessageError('O campo Título precisa ter mais que 3 caracteres.')
            setError(true)
            
        } else if (dateSchedule === '') {
            setMessageError('Preencha corretamente o campo data.')
            setError(true)
            
        } else if (moment(dateSchedule).format('YYYY-MM-DD') < moment(new Date()).format('YYYY-MM-DD')) {
            setMessageError('A data inserida não pode ser menor que a data de hoje.')
            setError(true)
            
        } else if (initHour === '') {
            setMessageError('Preencha o campo da Hora de Início.')
            setError(true)
            
        } else if (endHour === '') {
            setMessageError('Preencha o campo da Hora de Término.')
            setError(true)
            
        } else if (frequencyWeek === '') {
            setMessageError('Selecione a periodicidade do evento.')
            setError(true)
            
        } else {
            sendDatas()
        }
    }

    return (
        <Container>
            <Header />

            <Section>
                <BoxForm
                    title="Atualizar Agenda"
                    buttons={[
                        <Button title="Voltar" to="/events" type="link" outlined={true} />,
                        <Button title="Enviar" onClick={() => validationDatas()} loading={loading ? 1 : 0} />,
                    ]}
                >
                    {error ? <MessageBox text={messageError} /> : null}
                    <Input label="Título" value={title} onChange={event => setTitle(event.target.value)} disabled={loading} maxLength="200" required />
                    <Input label="Banner" value={banner} onChange={event => setBanner(event.target.value)} disabled={loading} type="file" />
                    <RowInputs inputs={[
                        <Input label="Data" value={dateSchedule} onChange={event => setDateSchedule(event.target.value)} disabled={loading} type="date" required />,
                        <Input label="Hora de Início" value={initHour} onChange={event => setInitHour(event.target.value)} disabled={loading} type="time" required />,
                        <Input label="Hora de Término" value={endHour} onChange={event => setEndHour(event.target.value)} disabled={loading} type="time" required />,
                    ]} />
                    <Select
                        label="Selecione a peridiocidade deste evento"
                        value={frequencyWeek}
                        onChange={event => setFrequencyWeek(event.target.value)}
                        disabled={loading}
                        options={[
                            { label: 'Apenas esta data', value: '0' },
                            { label: `Em toda ${moment(dateSchedule ? dateSchedule : new Date()).format('dddd')} do mês de ${moment(dateSchedule ? dateSchedule : new Date()).format('MMMM')}`, value: '1' },
                        ]}
                        required
                    />
                </BoxForm>
            </Section>

        </Container>
    )
}