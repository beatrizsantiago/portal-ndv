import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setCurrentNavigation } from '../redux/navigation/navigation.actions'

import Header from '../components/Header'

import { Container, SectionWrap } from './styles/MainStyled'
import { Card, ImageIntegration, Label, ImageCap } from './styles/HomeStyled'

function Home({ setCurrentNavigation }) {

    useEffect(() => {
        setCurrentNavigation('home')
    }, [setCurrentNavigation])

    let navigate = useNavigate()

    const handlePress = param => {
        setCurrentNavigation(param)
        navigate(`/${param}`)
    }

    return (
        <Container>
            <Header />
            <SectionWrap>
                <Card onClick={() => handlePress('integration')}>
                    <ImageIntegration />
                    <Label>Integração</Label>
                </Card>

                <Card to="/">
                    <ImageCap />
                    <Label>Casa de Paz</Label>
                </Card>
            </SectionWrap>
        </Container>
    )
}

const mapDispatchToProps = dispatch => ({
    setCurrentNavigation: navigation => dispatch(setCurrentNavigation(navigation))
})

export default connect(null, mapDispatchToProps)(Home)