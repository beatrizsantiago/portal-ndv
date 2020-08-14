import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import UserService from '../services/UserService'

import { setCurrentNavigation } from '../redux/navigation/navigation.actions'

import Header from '../components/Header'

import { Container, SectionWrap, Section } from './styles/MainStyled'
import { Card, ImageIntegration, ImageProfile, Label } from './styles/HomeStyled'

function Home({ setCurrentNavigation }) {

    useEffect(() => {
        setCurrentNavigation('home')
    }, [setCurrentNavigation])

    let navigate = useNavigate()

    useEffect(() => {
        UserService.GetSession()
            .then(isAuth => {
                if (isAuth === false) {
                    navigate('/')
                }
            })
    })

    const handlePress = param => {
        setCurrentNavigation(param)
        navigate(`/${param}`)
    }

    return (
        <Container>
            <Header />
            <Section>
                <SectionWrap type={1}>
                    <Card onClick={() => handlePress('integration')}>
                        <ImageIntegration />
                        <Label>Integração</Label>
                    </Card>

                    {/* <Card>
                        <ImageCap />
                        <Label>Casa de Paz</Label>
                    </Card>

                    <Card>
                        <ImageEvent />
                        <Label>Eventos</Label>
                    </Card>

                    <Card>
                        <ImageClass />
                        <Label>Classes</Label>
                    </Card> */}

                    <Card onClick={() => handlePress('profile')}>
                        <ImageProfile />
                        <Label>Meu Perfil</Label>
                    </Card>
                </SectionWrap>
            </Section>
        </Container>
    )
}

const mapDispatchToProps = dispatch => ({
    setCurrentNavigation: navigation => dispatch(setCurrentNavigation(navigation))
})

export default connect(null, mapDispatchToProps)(Home)