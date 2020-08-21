import React, { useState, useEffect, useCallback } from 'react'
import moment from 'moment'
import SweetAlert from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

import UserService from '../services/UserService'
import IntegrationService from '../services/IntegrationService'

import Header from '../components/Header'
import Loading from '../components/Loading'
import BoxModal from '../components/BoxModal'
import MessageBox from '../components/MessageBox'
import Button from '../components/Button'
import InputDate from '../components/InputDate'
import Input from '../components/Input'
import RowInputs from '../components/RowInputs'
import Select from '../components/Select'

import { Container, SectionWrap, TitleModal, TextEmpty } from './styles/MainStyled'
import {
    BoxColumn, InfoProfile, Row, Name, BigLabel, SmallLabel, Bold, Title, Feedbacks, ListFeedback, Item, Feedback, NameIntegrator, Timeline,
    ColumnWidth, StepBox, Circle, Triangle, Box, SpacingBox, Line, DateStep, Body, IconVisitor, IconWelcome, IconBaptism, IconExperience,
    IconActivation, IconClass, IconCap, ButtonEdit, IconEdit, BoxDate
} from './styles/DetailsLifeStyled'

import Colors from '../themes/Colors'

export default function DetailsLife(props) {

    const [currentLife, setCurrentLife] = useState('')
    const [details, setDetails] = useState({})
    const [loading, setLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    const [selectedStep, setSelectedStep] = useState({})
    const [errorDate, setErrorDate] = useState(false)
    const [messageErrorDate, setMessageErrorDate] = useState('')
    const [loadingButton, setLoadingButton] = useState(false)
    const [showModalEdit, setShowModalEdit] = useState(false)
    const [newName, setNewName] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newAge, setNewAge] = useState('')
    const [newIntegrator, setNewIntegrator] = useState('')
    const [messageError, setMessageError] = useState('')
    const [error, setError] = useState('')
    const [allIntegrators, setAllIntegrators] = useState([])

    let navigate = useNavigate()

    const alertExpiredSession = () => {
        SweetAlert.fire({
            icon: 'warning',
            title: 'Atenção!',
            text: 'Sua sessão expirou! É necessário fazer o login novamente.',
            confirmButtonColor: Colors.green,
        })
            .then(() => navigate('/'))
    }

    useEffect(() => {
        UserService.GetSession()
            .then(isAuth => {
                if (isAuth === false) {
                    alertExpiredSession()
                }
            })
    })

    const listDetails = useCallback(() => {
        let url_string = window.location.href
        let splitUrl = url_string.split('/')
        let id = splitUrl[splitUrl.length - 1]
        setCurrentLife(id)

        setLoading(true)
        IntegrationService.GetDetailsLife(id)
            .then(resp => {
                setDetails(resp)
                setLoading(false)
            })
            .catch(error => {
                if (error?.status === 401) {
                    UserService.LogOut()
                    SweetAlert.fire({
                        icon: 'warning',
                        title: 'Atenção!',
                        text: 'Sua sessão expirou! É necessário fazer o login novamente.',
                        confirmButtonColor: Colors.green,
                    })
                        .then(() => navigate('/'))
                }
            })
    }, [navigate])

    useEffect(() => {
        listDetails()
    }, [listDetails])

    const closeModalEdit = () => {
        setShowModalEdit(false)
        setError('')
    }

    const sendDatas = () => {
        IntegrationService.AlterLife(parseInt(currentLife), newName, newEmail, newPhone, newAge ? parseInt(newAge) : 0, newIntegrator)
            .then(() => {
                setLoadingButton(false)
                SweetAlert.fire({
                    icon: 'success',
                    text: `Os dados de ${details.name} foram alterados.`,
                    confirmButtonColor: Colors.green,
                }).then((result) => {
                    if (result.value) {
                        listDetails()
                        closeModalEdit()
                    }
                })
            })
            .catch(error => {
                setLoadingButton(false)
                if (error?.status === 401) {
                    UserService.LogOut()
                    alertExpiredSession()

                } else {
                    SweetAlert.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Não foi possível realizar a alteração. Tente novamente mais tarde!',
                        confirmButtonColor: Colors.primary,
                    })
                }
            })
    }

    const maskPhone = value => {
        return value
            .replace(/\D/g, "")
            .replace(/^(\d{2})(\d)/g, "($1) $2")
            .replace(/(\d)(\d{4})$/, "$1-$2")
    }

    const alterDatas = () => {
        setLoadingButton(true)
        setError('')

        if (newName.length < 3) {
            setMessageError('O campo Nome precisa ter mais que 3 caracteres.')
            setError('name')
            setLoadingButton(false)

        } else if (!newPhone) {
            setMessageError('Insira um telefone válido.')
            setError('phone')
            setLoadingButton(false)

        } else if (!newIntegrator) {
            setMessageError('Insira um integrador.')
            setError('integrator')
            setLoadingButton(false)

        } else {
            sendDatas()
        }
    }

    const openModalEdit = () => {
        IntegrationService.GetIntegrators()
            .then(resp => {
                setAllIntegrators(resp)
                setNewName(details.fullName)
                setNewEmail(details.email)
                setNewPhone(details.phone)
                setNewAge(moment(details.age))
                setNewIntegrator(details.integrator.id)
                setShowModalEdit(true)
            })
    }

    const closeModal = () => {
        setModalVisible(false)
        setErrorDate(false)
        setMessageErrorDate('')
    }

    const sendNewStep = () => {
        IntegrationService.NewStepLife(parseInt(currentLife), selectedStep.step, moment(startDate).format())
            .then(() => {
                setLoadingButton(false)
                SweetAlert.fire({
                    icon: 'success',
                    text: `${details.fullName} agora está em ${getDatasStep(selectedStep.step).nameStep}.`,
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
                if (error?.status === 401) {
                    UserService.LogOut()
                    alertExpiredSession()

                } else {
                    SweetAlert.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Não foi possível inserir um novo passo. Tente novamente mais tarde!',
                        confirmButtonColor: Colors.primary,
                    })
                }
            })
    }

    const insertStep = () => {
        let today = moment(new Date()).format()
        let past = moment(new Date()).subtract(30, 'days').format()
        let selectDate = moment(startDate).format()

        let lastStep = details.historicPropheticWay[selectedStep.step - 2]
        console.log(moment(lastStep.date).format(), selectDate);

        setErrorDate(false)
        if (selectDate < past || selectDate > today) {
            setMessageErrorDate(`Selecione uma data entre ${past} e ${today}`)
            setErrorDate(true)

        } else if (lastStep.date == null) {
            setMessageErrorDate(`É necessário primeiro concluir ${getDatasStep(lastStep.step).nameStep}.`)
            setErrorDate(true)

        } else if (selectDate <= moment(lastStep.date).format()) {
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
                return
        }
    }

    const findError = (label) => {
        let isError = error.indexOf(label)
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
                        <BoxColumn>
                            <InfoProfile>
                                <ButtonEdit onClick={() => openModalEdit()}>
                                    <IconEdit />
                                </ButtonEdit>
                                <Name>{details.fullName}</Name>
                                <Row>
                                    <BigLabel>E-mail: <Bold>{details.email || 'Não informado'}</Bold></BigLabel>
                                    <SmallLabel>Telefone: <Bold>{details.phone}</Bold></SmallLabel>
                                </Row>
                                <Row>
                                    <BigLabel>Integrador: <Bold>{details.integrator?.name}</Bold></BigLabel>
                                    <SmallLabel>Idade: <Bold>{details.age || 'Não informada'}</Bold></SmallLabel>
                                </Row>
                            </InfoProfile>

                            <Feedbacks>
                                <Title>Últimos Feedbacks</Title>
                                <ListFeedback>
                                    {
                                        details.feedbacks?.length === 0 ?
                                            <TextEmpty>Não há feedbacks para listar.</TextEmpty>
                                            :
                                            details.feedbacks?.map((feedback, index) => (
                                                <Item key={index}>
                                                    <Feedback>{feedback.content}</Feedback>
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
                        labelCenter={true}
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        minDate={new Date().setDate(new Date().getDate() - 30)}
                        maxDate={new Date()}
                        inline={true}
                    />
                </BoxDate>
                <Button title="Inserir Passo" onClick={() => insertStep()} loading={loadingButton ? 1 : 0} />
            </BoxModal>

            <BoxModal isOpen={showModalEdit} closedPress={() => closeModalEdit()}>
                <TitleModal>Editar informações de {details.name}</TitleModal>
                {error.length > 0 ? <MessageBox text={messageError} /> : null}

                <Input label="Nome" value={newName} onChange={event => setNewName(event.target.value)} disabled={loadingButton} error={findError('name')} maxLength="300" required />
                <Input label="E-mail" value={newEmail} onChange={event => setNewEmail(event.target.value)} disabled={loadingButton} error={findError('email')} maxLength="200" />
                <RowInputs inputs={[
                    <Input label="Telefone" value={newPhone} onChange={event => setNewPhone(maskPhone(event.target.value))} disabled={loadingButton} error={findError('phone')} maxLength="15" required />,
                    <Input label="Idade" value={newAge} onChange={event => setNewAge(event.target.value)} type="number" disabled={loadingButton} error={findError('age')} />
                ]} />
                <Select
                    label="Integrador"
                    value={newIntegrator}
                    onChange={event => setNewIntegrator(event.target.value)}
                    disabled={loadingButton}
                    options={allIntegrators.map(integrator => ({ label: integrator.name, value: integrator.id }))}
                    error={findError('integrator')}
                    required
                />

                <Button title="Alterar" onClick={() => alterDatas()} loading={loadingButton ? 1 : 0} />
            </BoxModal>
        </Container>
    )
}
