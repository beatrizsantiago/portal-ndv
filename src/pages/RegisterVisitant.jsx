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

export default function RegisterVisitant() {

    const [fullName, setFullName] = useState('')
    const [phone, setPhone] = useState('')
    const [otherChurch, setOtherChurch] = useState('')
    const [companion, setCompanion] = useState('')
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
        IntegrationService.RegisterNewVisitant(fullName, phone, otherChurch, companion)
            .then(() => {
                setLoading(false)
                SweetAlert.fire({
                    icon: 'success',
                    text: 'Cadastro realizado com sucesso!',
                    confirmButtonColor: Colors.green,
                }).then(result => {
                    if (result.value) {
                        setFullName('')
                        setPhone('')
                        setOtherChurch('')
                        setCompanion('')
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
                    title="Cadastrar Visitante"
                    buttons={[
                        <Button title="Voltar" to="/integration" type="link" outlined={true} />,
                        <Button title="Enviar" onClick={() => validationDatas()} loading={loading ? 1 : 0} />,
                    ]}
                >

                    {error ? <MessageBox text={messageError} /> : null}
                    <Input label="Nome" value={fullName} onChange={event => setFullName(event.target.value)} disabled={loading} maxLength="200" required />
                    <RowInputs inputs={[
                        <Input label="Telefone" value={phone} onChange={event => setPhone(maskPhone(event.target.value))} disabled={loading} maxLength="15" required />,
                        <Select
                            label="Frequenta outra igreja?"
                            value={otherChurch}
                            onChange={event => setOtherChurch(event.target.value)}
                            disabled={loading}
                            options={[
                                { label: 'Não', value: 1 },
                                { label: 'Sim', value: 2 },
                            ]}
                        />,
                        <Input label="Quem trouxe?" value={companion} onChange={event => setCompanion(event.target.value)} disabled={loading} maxLength="100" />
                    ]} />
                </BoxForm>
            </Section>

        </Container>
    )
}