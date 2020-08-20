import React, { useState, useEffect } from 'react'
import SweetAlert from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

import UserService from '../services/UserService'
import IntegrationService from '../services/IntegrationService'

import Header from '../components/Header'
import BoxForm from '../components/BoxForm'
import RowInputs from '../components/RowInputs'
import Input from '../components/Input'
import Button from '../components/Button'
import Select from '../components/Select'
import MessageBox from '../components/MessageBox'

import { Container, Section } from './styles/MainStyled'
import Colors from '../themes/Colors'

export default function RegisterLife() {

    const [fullName, setFullName] = useState('')
    const [typeConversion, setTypeConversion] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [baptismOtherChurch, setBaptismOtherChurch] = useState('')
    const [baptismToday, setBaptismToday] = useState('')
    const [baptismMinister, setBaptismMinister] = useState('')
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
                    .then(() => navigate('/'))
                }
            })
    })

    const sendDatas = () => {
        setLoading(true)
        IntegrationService.RegisterNewLife(fullName, phone, parseInt(typeConversion), email, parseInt(age), baptismOtherChurch === '0' ? false : true, baptismToday === '0' ? false : true, baptismMinister)
            .then(() => {
                setLoading(false)
                SweetAlert.fire({
                    icon: 'success',
                    text: 'Cadastro realizado com sucesso!',
                    confirmButtonColor: Colors.green,
                }).then(result => {
                    if (result.value) {
                        setFullName('')
                        setTypeConversion('')
                        setPhone('')
                        setEmail('')
                        setAge('')
                        setBaptismOtherChurch('')
                        setBaptismToday('')
                        setBaptismMinister('')
                        navigate('/integration/lifes')
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

        if (fullName.length < 3) {
            setMessageError('O campo Nome precisa ter mais que 3 caracteres.')
            setError(true)

        } else if (phone.length !== 15) {
            setMessageError('É necessário preencher o campo Telefone corretamente.')
            setError(true)

        } else if (typeConversion === '') {
            setMessageError('É necessário informar a conversão.')
            setError(true)

        } else if (baptismOtherChurch === '') {
            setMessageError('É necessário informar se a vida é batizada em outra igreja.')
            setError(true)

        } else if (baptismToday === '') {
            setMessageError('É necessário informar se houve o batismo.')
            setError(true)

        } else if (baptismToday === '1' && baptismMinister.length < 3) {
            setMessageError('É necessário que o nome do Ministro de Batismo tenha no mínimo 3 caracteres.')
            setError(true)

        } else {
            setError(false)
            sendDatas()
        }
    }

    const maskPhone = value => {
        return value
            .replace(/\D/g, "")
            .replace(/^(\d{2})(\d)/g, "($1) $2")
            .replace(/(\d)(\d{4})$/, "$1-$2")
    }

    return (
        <Container>
            <Header />

            <Section>
                <BoxForm
                    title="Cadastrar Vida"
                    buttons={[
                        <Button title="Voltar" to="/integration/lifes" type="link" outlined={true} />,
                        <Button title="Enviar" onClick={() => validationDatas()} loading={loading ? 1 : 0} />,
                    ]}
                >

                    {error ? <MessageBox text={messageError} /> : null}
                    <Input label="Nome" value={fullName} onChange={event => setFullName(event.target.value)} disabled={loading} maxLength="200" required />
                    <RowInputs inputs={[
                        <Input label="Telefone" value={phone} onChange={event => setPhone(maskPhone(event.target.value))} disabled={loading} maxLength="15" required />,
                        <Select
                            label="Conversão"
                            value={typeConversion}
                            onChange={event => setTypeConversion(event.target.value)}
                            disabled={loading}
                            required
                            options={[
                                { label: 'Aceitou a Jesus', value: 1 },
                                { label: 'Reconciliação', value: 2 },
                            ]}
                        />,
                    ]} />
                    <Input label="E-mail" value={email} onChange={event => setEmail(event.target.value)} disabled={loading} maxLength="200" />
                    <RowInputs inputs={[
                        <Input label="Idade" value={age} onChange={event => setAge(event.target.value)} disabled={loading} type="number" />,
                        <Select
                            label="Batizado em Outra Igreja?"
                            value={baptismOtherChurch}
                            onChange={event => setBaptismOtherChurch(event.target.value)}
                            disabled={loading}
                            required
                            options={[
                                { label: 'Não', value: 0 },
                                { label: 'Sim', value: 1 },
                            ]}
                        />,
                        <Select
                            label="Se batizou?"
                            value={baptismToday}
                            onChange={event => setBaptismToday(event.target.value)}
                            disabled={loading}
                            required
                            options={[
                                { label: 'Não', value: 0 },
                                { label: 'Sim', value: 1 },
                            ]}
                        />,
                    ]} />
                    {
                        baptismToday === '1' ?
                            <Input label="Ministro de Batismo" value={baptismMinister} onChange={event => setBaptismMinister(event.target.value)} disabled={loading} maxLength="200" required />
                            : null
                    }
                </BoxForm>
            </Section>

        </Container>
    )
}