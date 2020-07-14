import React, { useState, useEffect } from 'react'
import SweetAlert from 'sweetalert2'

import IntegrationService from '../services/IntegrationService'

import Header from '../components/Header'
import Card from '../components/Card'
import Button from '../components/Button'
import Loading from '../components/Loading'
import BoxModal from '../components/BoxModal'
import Input from '../components/Input'
import MessageBox from '../components/MessageBox'

import { Container, SectionWrap, TitleModal } from './styles/MainStyled'
import { CardAdd, IconAdd, Title } from './styles/ManageIntegratorsStyled'

import Colors from '../themes/Colors'

export default function ManageIntegrators() {

    const [allIntegrators, setAllIntegrators] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [loadingButton, setLoadingButton] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        listIntegrators()
    }, [])

    const listIntegrators = () => {
        setLoading(true)
        IntegrationService.GetIntegrators()
            .then(resp => {
                setAllIntegrators(resp)

                setTimeout(() => {
                    setLoading(false)
                }, 2000);
            })
    }

    const pressAddIntegrator = () => {
        setError(false)
        setLoadingButton(true)

        const regexEmail = /[A-Za-z0-9][\w.]+@[a-z]+\.[a-z]{2}/

        if (!email || !regexEmail.test(email)) {
            setError(true)
            setLoadingButton(false)

        } else {
            IntegrationService.AddIntegrator(email)
                .then(() => {
                    setLoadingButton(false)
                    setEmail('')
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
                <MessageBox text={error ? 'Insira um E-mail válido!' : 'É necessário que o usuário esteja cadastrado no sistema.'} type={error ? 'error' : 'info'} />
                <Input label="Insira um e-mail" value={email} onChange={event => setEmail(event.target.value)} disabled={loadingButton} error={error} maxLength="200" required />
                <Button title="Adicionar" onClick={() => pressAddIntegrator()} loading={loadingButton ? 1 : 0} />
            </BoxModal>
        </Container>
    )
}