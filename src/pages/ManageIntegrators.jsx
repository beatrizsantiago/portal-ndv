import React, { useState, useEffect } from 'react'

import IntegrationService from '../services/IntegrationService'

import Header from '../components/Header'
import Card from '../components/Card'
import Button from '../components/Button'
import Loading from '../components/Loading'
import BoxModal from '../components/BoxModal'

import { Container, SectionWrap } from './styles/MainStyled'
import { CardAdd, IconAdd, Title } from './styles/ManageIntegratorsStyled'

export default function ManageIntegrators() {

    const [allIntegrators, setAllIntegrators] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [loading, setLoading] = useState(false)

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

    const addIntegrator = () => {
        setModalVisible(true)
    }

    return (
        <Container>
            <Header />
            {
                loading ?
                    <Loading />
                    :
                    <SectionWrap>
                        <CardAdd onClick={() => addIntegrator()}>
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
            <BoxModal isOpen={modalVisible} closedPress={() => setModalVisible(false)}>

            </BoxModal>
        </Container>
    )
}