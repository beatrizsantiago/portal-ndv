import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

import IntegrationService from '../services/IntegrationService'

import Header from '../components/Header'
import Loading from '../components/Loading'
import BoxModal from '../components/BoxModal'
import MessageBox from '../components/MessageBox'
import Button from '../components/Button'

import { Container, SectionWrap } from './styles/MainStyled'
import {
    BoxColumn, InfoProfile, Row, Name, BigLabel, SmallLabel, Bold, Title, Feedbacks, ListFeedback, Item, Feedback, NameIntegrator, Timeline,
    ColumnWidth, StepBox, Circle, Triangle, Box, SpacingBox, Line, Date, Body, IconVisitor, IconWelcome, IconBaptism, IconExperience,
    IconActivation, IconClass, IconCap
} from './styles/DetailsLifeStyled'

function DetailsLife({ currentLife }) {

    const [details, setDetails] = useState({})
    const [loading, setLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        listDetails(currentLife)
    }, [currentLife])

    const listDetails = (lifeId) => {
        setLoading(true)
        IntegrationService.GetDetailsLife(lifeId)
            .then(resp => {
                setDetails(resp)

                setTimeout(() => {
                    setLoading(false)
                }, 1000);
            })
    }

    const closeModal = () => {
        setModalVisible(false)
    }

    const newStep = date => {
        if (date === null) {
            setModalVisible(true)
        }
    }

    const getDatasStep = step => {
        switch (step) {
            case 0:
                return { icon: <IconVisitor />, nameStep: 'Visitou a igreja' }
            case 1:
                return { icon: <IconWelcome />, nameStep: 'Boas Vindas (conversão)' }
            case 2:
                return { icon: <IconWelcome />, nameStep: 'Boas Vindas (reconciliação)' }
            case 3:
                return { icon: <IconBaptism />, nameStep: 'Batismo' }
            case 4:
                return { icon: <IconExperience />, nameStep: 'Experiência com Deus' }
            case 5:
                return { icon: <IconActivation />, nameStep: 'Ativação da Paternidade' }
            case 6:
                return { icon: <IconClass />, nameStep: 'Classe Vida Cristã' }
            case 7:
                return { icon: <IconCap />, nameStep: 'Classe Líderes de Casa de Paz' }

            default:
                break
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
                        <BoxColumn>
                            <InfoProfile>
                                <Name>{details.name}</Name>
                                <Row>
                                    <BigLabel>E-mail: <Bold>{details.email}</Bold></BigLabel>
                                    <SmallLabel>Telefone: <Bold>{details.phone}</Bold></SmallLabel>
                                </Row>
                                <Row>
                                    <BigLabel>Integrador: <Bold>{details.integrator}</Bold></BigLabel>
                                    <SmallLabel>Idade: <Bold>{moment(details.birthday, "YYYY-MM-DD").fromNow().replace('há ', '')}</Bold></SmallLabel>
                                </Row>
                            </InfoProfile>

                            <Feedbacks>
                                <Title>Últimos Feedbacks</Title>
                                <ListFeedback>
                                    {
                                        details.feedbacks?.map((feedback, index) => (
                                            <Item key={index}>
                                                <Feedback>{feedback.description}</Feedback>
                                                <NameIntegrator>- {feedback.integrator}</NameIntegrator>
                                            </Item>
                                        ))
                                    }
                                </ListFeedback>
                            </Feedbacks>
                        </BoxColumn>

                        <Timeline>
                            <Title>Caminho Profético</Title>
                            <ColumnWidth>
                                <Line />
                                {
                                    details.historicPropheticWay?.map((historic, index) => (
                                        <StepBox key={index} index={index}>
                                            <Circle stepDone={historic.date} onClick={() => newStep(historic.date)}>
                                                {getDatasStep(historic.step).icon}
                                            </Circle>
                                            <Triangle index={index} stepDone={historic.date} />
                                            {
                                                historic.date == null ?
                                                    <SpacingBox />
                                                    :
                                                    <Box>
                                                        <Date>{moment(historic.date).format('L')}</Date>
                                                        <Body>{getDatasStep(historic.step).nameStep}</Body>
                                                    </Box>
                                            }
                                        </StepBox>
                                    ))
                                }
                            </ColumnWidth>
                        </Timeline>
                    </SectionWrap>
            }

            <BoxModal isOpen={modalVisible} closedPress={() => closeModal()} width={40}>
                {/* <TitleModal>{`Novo feedback para ${lifeSelected.name}`}</TitleModal>
                {error ? <MessageBox text="É necessário que o feedback possua mais de 50 caracteres." /> : null}
                <Textarea value={newFeedback} onChange={event => setNewFeedback(event.target.value)} disabled={loadingButton} />
                <Button title="Enviar" onClick={() => sendFeedback()} loading={loadingButton ? 1 : 0} /> */}
            </BoxModal>
        </Container>
    )
}

const mapStateToProps = state => ({
    currentLife: state.life.currentLife
})

export default connect(mapStateToProps)(DetailsLife)