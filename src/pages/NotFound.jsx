import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import UserService from '../services/UserService'

import Button from '../components/Button'

import { CenterColumn } from '../themes/StyleConstants'
import Colors from '../themes/Colors'

import ImgNotFound from '../assets/img/bg-not-found.png'

export default function UserProfile() {

    let navigate = useNavigate()

    useEffect(() => {
        UserService.GetSession()
            .then(isAuth => {
                if (isAuth === false) {
                    navigate('/')
                }
            })
    })

    return (
        <Container>
            <Background />
            <Title>Página Não Encontrada</Title>
            <Subtitle>Desculpe, não conseguimos encontrar a página solicitada.</Subtitle>
            <Button title="Voltar ao Início" width={150} onClick={() => navigate('/home')} />
        </Container>
    )
}

const Container = styled.section`
    ${CenterColumn}
    width: 100%;
    height: 100vh;
    background-color: ${Colors.backgroundGray};
`

const Background = styled.img.attrs({ src: ImgNotFound })`
    width: 80%;
    max-width: 900px;
    min-width: 300px;
`

const Title = styled.h1`
    color: ${Colors.secondary};
    font-size: 30px;
    margin: 10px 0px;

    @media (max-width: 670px) {
        font-size: 22px;
    }
`

const Subtitle = styled.h2`
    text-align: center;
    color: ${Colors.primary};
    font-size: 15px;
    width: 80%;
    max-width: 900px;
    margin-bottom: 40px;

    @media (max-width: 670px) {
        width: 60%;
    }
`