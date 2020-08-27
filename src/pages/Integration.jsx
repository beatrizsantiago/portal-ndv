import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SweetAlert from 'sweetalert2'

import UserService from '../services/UserService'
import IntegrationService from '../services/IntegrationService'

import Header from '../components/Header'
import NavigationMenu from '../components/NavigationMenu'

import Colors from '../themes/Colors'

import { Container, Section } from './styles/MainStyled'
import { AddressCard, HandHeart, UsersCog, Graph, BarGraph } from './styles/IntegrationStyled'

export default function Integration() {

    const [amountsReport, setAmountsReport] = useState([])
    const [labelsReport, setLabelsReport] = useState([])

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
        IntegrationService.GetReport()
            .then(datas => {
                let amounts = datas.map(data => data.amoutStep)
                let labels = datas.map(data => data.stepName)
                setAmountsReport(amounts)
                setLabelsReport(labels)
            })
    }, [])

    return (
        <Container>
            <Header />

            <NavigationMenu
                items={[
                    { icon: <AddressCard />, title: 'Cadastrar Visitantes', link: '/integration/register' },
                    { icon: <UsersCog />, title: 'Gerenciar Integradores', link: '/integration/integrators' },
                    { icon: <HandHeart />, title: 'Acompanhar Vidas', link: '/integration/lifes' },
                ]}
            />

            <Section>
                <Graph>
                    <BarGraph labels={labelsReport} data={amountsReport} />
                </Graph>
            </Section>
        </Container>
    )
}