import React, { useState, useEffect } from 'react'
import SweetAlert from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

import UserService from '../services/UserService'
import IntegrationService from '../services/IntegrationService'

import Header from '../components/Header'
import Card from '../components/Card'
import Button from '../components/Button'
import Loading from '../components/Loading'
import BoxModal from '../components/BoxModal'
import Input from '../components/Input'
import RowInputs from '../components/RowInputs'
import MessageBox from '../components/MessageBox'

import { Container, SectionWrap, TitleModal } from './styles/MainStyled'
import { CardAdd, IconAdd, Title } from './styles/ManageIntegratorsStyled'

import Colors from '../themes/Colors'

export default function ManageIntegrators() {

    const [allIntegrators, setAllIntegrators] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [email, setEmail] = useState('')
    const [mentor, setMentor] = useState('')
    const [numberNet, setNumberNet] = useState()
    const [loading, setLoading] = useState(false)
    const [loadingButton, setLoadingButton] = useState(false)
    const [error, setError] = useState(false)
    const [labelError, setLabelError] = useState('')
    const [messageError, setMessageError] = useState('')

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
        listIntegrators()
    }, [])

    const listIntegrators = () => {
        setLoading(true)
        IntegrationService.GetIntegrators()
            .then(resp => {
                setAllIntegrators(resp)
                setLoading(false)
            })
    }

    const pressAddIntegrator = () => {
        setError(false)
        setMessageError('')
        setLabelError('')
        setLoadingButton(true)

        const regexEmail = /[A-Za-z0-9][\w.]+@[a-z]+\.[a-z]{2}/

        if (!email || !regexEmail.test(email)) {
            setLabelError('email')
            setMessageError("Insira um e-mail válido.")
            setError(true)
            setLoadingButton(false)

        } else if (mentor.length < 3) {
            setLabelError('mentor')
            setMessageError("O nome do mentor deve ter no mínimo 3 caracteres.")
            setError(true)
            setLoadingButton(false)

        } else if (!numberNet || numberNet > 4) {
            setLabelError('numberNet')
            setMessageError("Insira um número válido para a Rede.")
            setError(true)
            setLoadingButton(false)

        } else {
            IntegrationService.AddIntegrator(email, mentor, numberNet)
                .then(() => {
                    setLoadingButton(false)
                    setEmail('')
                    setMentor('')
                    setNumberNet('')
                    return SweetAlert.fire({
                        icon: 'success',
                        text: 'Novo integrador adicionado!',
                        confirmButtonColor: Colors.green,
                    })
                })
                .catch(error => {
                    setLoadingButton(false)
                    return SweetAlert.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Não foi possível adicionar este integrador. Tente novamente mais tarde!',
                        confirmButtonColor: Colors.primary,
                    })
                })
        }
    }

    const closeModal = () => {
        setError(false)
        setEmail('')
        setMentor('')
        setNumberNet('')
        setModalVisible(false)
    }

    const findError = label => {
        let isError = labelError.indexOf(label)
        if (isError > -1) {
            return true
        } else {
            return false
        }
    }

    return (
        <Container>
            <Header />
            {
                loading ?
                    <Loading />
                    :
                    <SectionWrap>
                        <CardAdd onClick={() => setModalVisible(true)}>
                            <IconAdd />
                            <Title>Adicionar Integrador</Title>
                        </CardAdd>
                        {
                            allIntegrators.map((integrator, index) => (
                                <Card
                                    key={index}
                                    withPhoto={true}
                                    source={integrator.profile}
                                    title={integrator.name}
                                    values={[
                                        { label: 'Mentor', text: integrator.mentor },
                                        { label: 'Rede', text: integrator.numberNet },
                                        { label: 'N° de feedbacks', text: integrator.quantityFeedbacks },
                                        { label: 'Acompanha', text: `${integrator.accompanyLifes} vidas` },
                                    ]}
                                    buttons={[
                                        integrator.isActive ? <Button title="Desativar" width={100} height={28} outlined /> : <Button title="Ativar" width={100} height={28} />
                                    ]}
                                />
                            ))
                        }
                    </SectionWrap>
            }

            <BoxModal isOpen={modalVisible} closedPress={() => closeModal()}>
                <TitleModal>Novo integrador</TitleModal>
                {
                    error ?
                        <MessageBox text={messageError} type="error" />
                        :
                        <MessageBox text="É necessário que o usuário esteja cadastrado no sistema." type="info" />
                }
                <Input label="Insira um e-mail" value={email} onChange={event => setEmail(event.target.value)} disabled={loadingButton} error={findError('email')} maxLength="200" required />
                <RowInputs inputs={[
                    <Input label="Mentor" value={mentor} onChange={event => setMentor(event.target.value)} disabled={loadingButton} error={findError('mentor')} maxLength="200" required />,
                    <Input label="Rede" value={numberNet} onChange={event => setNumberNet(event.target.value)} disabled={loadingButton} error={findError('numberNet')} maxLength="1" type="number" required />
                ]} />
                <Button title="Adicionar" onClick={() => pressAddIntegrator()} loading={loadingButton ? 1 : 0} />
            </BoxModal>
        </Container>
    )
}