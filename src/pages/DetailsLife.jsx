import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import SweetAlert from 'sweetalert2'

import IntegrationService from '../services/IntegrationService'

import Header from '../components/Header'
import Loading from '../components/Loading'
import BoxModal from '../components/BoxModal'
import MessageBox from '../components/MessageBox'
import Button from '../components/Button'
import InputDate from '../components/InputDate'

import { Container, SectionWrap } from './styles/MainStyled'
import {
    BoxColumn, InfoProfile, Row, Name, BigLabel, SmallLabel, Bold, Title, Feedbacks, ListFeedback, Item, Feedback, NameIntegrator, Timeline,
    ColumnWidth, StepBox, Circle, Triangle, Box, SpacingBox, Line, DateStep, Body, IconVisitor, IconWelcome, IconBaptism, IconExperience,
    IconActivation, IconClass, IconCap, ButtonEdit, IconEdit, BoxDate
} from './styles/DetailsLifeStyled'

import Colors from '../themes/Colors'

function DetailsLife({ currentLife }) {

    const [details, setDetails] = useState({})
    const [loading, setLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    const [selectedStep, setSelectedStep] = useState({})
    const [errorDate, setErrorDate] = useState(false)
    const [messageErrorDate, setMessageErrorDate] = useState('')
    const [loadingButton, setLoadingButton] = useState(false)

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
        setErrorDate(false)
        setMessageErrorDate('')
    }

    const sendNewStep = () => {
        IntegrationService.NewStepLife(currentLife, selectedStep.step, startDate)
        .then(() => {
            setLoadingButton(false)
            SweetAlert.fire({
                icon: 'success',
                text: `${details.name} agora está em ${getDatasStep(selectedStep.step).nameStep}.`,
                confirmButtonColor: Colors.green,
            }).then((result) => {
                if (result.value) {
                    listDetails()
                    closeModal()
                }
            })
        })
        .catch(error => {
            setLoadingButton(false)
            SweetAlert.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Não foi possível adicionar este integrador. Tente novamente mais tarde!',
                confirmButtonColor: Colors.primary,
            })
        })
    }

    const insertStep = () => {
        let today = moment(new Date()).format('DD/MM/YYYY')
        let past = moment(new Date()).subtract(30, 'days').format('DD/MM/YYYY')
        let selectDate = moment(startDate).format('DD/MM/YYYY')

        let lastStep = details.historicPropheticWay[selectedStep.step - 2]
        console.log(lastStep);

        setErrorDate(false)
        if (selectDate < past || selectDate > today) {
            setMessageErrorDate(`Selecione uma data entre ${past} e ${today}`)
            setErrorDate(true)
            
        } else if (lastStep.date == null) {
            setMessageErrorDate(`É necessário primeiro concluir ${getDatasStep(lastStep.step).nameStep}.`)
            setErrorDate(true)
            
        } else if (selectDate <= moment(lastStep.date).format('DD/MM/YYYY')) {
            setMessageErrorDate(`A data deste passo deve ser maior que do passo ${getDatasStep(lastStep.step).nameStep}.`)
            setErrorDate(true)
            
        } else {
            sendNewStep()
        }
    }

    const newStep = data => {
        if (data.date === null) {
            setSelectedStep(data)
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
                                <ButtonEdit>
                                    <IconEdit />
                                </ButtonEdit>
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
                                            <Circle stepDone={historic.date} onClick={() => newStep(historic)}>
                                                {getDatasStep(historic.step).icon}
                                            </Circle>
                                            <Triangle index={index} stepDone={historic.date} />
                                            {
                                                historic.date == null ?
                                                    <SpacingBox />
                                                    :
                                                    <Box>
                                                        <DateStep>{moment(historic.date).format('L')}</DateStep>
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

            <BoxModal isOpen={modalVisible} closedPress={() => closeModal()} width={280} widthWithPixel={true}>
                {errorDate ? <MessageBox text={messageErrorDate} /> : null}
                <BoxDate>
                    <InputDate
                        label={`Selecione a data para o passo ${getDatasStep(selectedStep.step)?.nameStep}`}
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        inline={true}
                    />
                </BoxDate>
                <Button title="Inserir Passo" onClick={() => insertStep()} loading={loadingButton ? 1 : 0} />
            </BoxModal>
        </Container>
    )
}

const mapStateToProps = state => ({
    currentLife: state.life.currentLife
})

export default connect(mapStateToProps)(DetailsLife)