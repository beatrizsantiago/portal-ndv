import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import SweetAlert from 'sweetalert2'
import ReactExport from "react-export-excel"

import UserService from '../services/UserService'
import IntegrationService from '../services/IntegrationService'

import Header from '../components/Header'
import Table from '../components/Table'
import Button from '../components/Button'
import Loading from '../components/Loading'
import BoxModal from '../components/BoxModal'
import MessageBox from '../components/MessageBox'

import { Container, Section, TitleModal, LargeBox } from './styles/MainStyled'
import { LegendBox, LegendColor, Legend, OutlineFileSync, LostUser, ListDetails, RowButtons, Textarea, Div } from './styles/LifesStyled'

import Colors from '../themes/Colors'

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default function Lifes() {

    const [allLifes, setAllLifes] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [newFeedback, setNewFeedback] = useState('')
    const [lifeSelected, setLifeSelected] = useState('')
    const [loading, setLoading] = useState(false)
    const [loadingButton, setLoadingButton] = useState(false)
    const [error, setError] = useState(false)

    let navigate = useNavigate()

    const alertExpiredSession = () => {
        SweetAlert.fire({
            icon: 'warning',
            title: 'Atenção!',
            text: 'Sua sessão expirou! É necessário fazer o login novamente.',
            confirmButtonColor: Colors.yellow,
        })
        navigate('/')
    }

    useEffect(() => {
        UserService.GetSession()
            .then(isAuth => {
                if (isAuth === false) {
                    alertExpiredSession()
                }
            })
    })

    const listLifes = useCallback(() => {
        setLoading(true)
        IntegrationService.GetLifes()
            .then(resp => {
                setAllLifes(resp)
                setLoading(false)
            })
            .catch(error => {
                if (error?.status === 401) {
                    UserService.LogOut()
                    SweetAlert.fire({
                        icon: 'warning',
                        title: 'Atenção!',
                        text: 'Sua sessão expirou! É necessário fazer o login novamente.',
                        confirmButtonColor: Colors.yellow,
                    })
                        .then(() => navigate('/'))
                }
            })
    }, [navigate])

    useEffect(() => {
        listLifes()
    }, [listLifes])

    const detailsLife = data => {
        navigate(`/integration/lifes/details/${data.id}`)
    }

    const declareLifeLost = data => {
        SweetAlert.fire({
            icon: 'question',
            title: 'Atenção!',
            text: `Realmente deseja declarar ${data.name} como uma vida perdida?`,
            confirmButtonColor: Colors.red,
            confirmButtonText: 'Sim',
            showCancelButton: true,
            cancelButtonColor: Colors.green,
            cancelButtonText: 'Não',

        }).then((result) => {
            if (result.value) {
                IntegrationService.LifeLost(data.id)
                    .then(() => {
                        SweetAlert.fire({
                            icon: 'warning',
                            title: 'Vida perdida!',
                            text: `Não desanime, vamos continuar orando por ${data.name}.`,
                            confirmButtonColor: Colors.yellow,
                            confirmButtonText: 'Tamo junto',
                        }).then(() => listLifes())
                    })
                    .catch(error => {
                        if (error?.status === 401) {
                            UserService.LogOut()
                            alertExpiredSession()

                        } else {
                            SweetAlert.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Não foi possível declarar a vida como perdida. Tente novamente mais tarde!',
                                confirmButtonColor: Colors.primary,
                            })
                        }
                    })
            }
        })
    }

    const closeModal = () => {
        setModalVisible(false)
        setNewFeedback('')
        setLifeSelected('')
        setError(false)
    }

    const sendFeedback = () => {
        setLoadingButton(true)
        setError(false)

        if (newFeedback.length < 50) {
            setLoadingButton(false)
            setError(true)

        } else {
            IntegrationService.SendNewFeedback(lifeSelected.id, newFeedback)
                .then(() => {
                    setLoadingButton(false)
                    setNewFeedback('')
                    SweetAlert.fire({
                        icon: 'success',
                        text: `O feedback de ${lifeSelected.name} foi enviado!`,
                        confirmButtonColor: Colors.green,

                    }).then(() => closeModal())
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
                            text: 'Não foi possível enviar este feedback. Tente novamente mais tarde!',
                            confirmButtonColor: Colors.primary,
                        })
                    }
                })
        }
    }

    const openModal = data => {
        setLifeSelected(data)
        setModalVisible(true)
    }

    return (
        <Container>
            <Header />

            {
                loading ?
                    <Loading />
                    :
                    <Section>
                        <LargeBox type="buttons">
                            <Button title="Cadastrar Nova Vida" onClick={() => navigate('/integration/lifes/register')} width={240} />
                            <Div>
                                <Button title="Exportar em Pdf" onClick={() => openModal()} width={150} color={Colors.yellow} />
                                <ExcelFile element={<Button title="Exportar em Xls" width={150} color={Colors.green} />} filename={`lista_integracao_${Date.now()}`}>
                                    <ExcelSheet data={allLifes} name="Listagem de Vidas">
                                        <ExcelColumn label="Nome" value="name" />
                                        <ExcelColumn label="Telefone" value="phone" />
                                    </ExcelSheet>
                                </ExcelFile>
                            </Div>
                        </LargeBox>
                        <LargeBox>
                            <LegendBox>
                                <LegendColor type={0} />
                                <Legend>Sem legenda</Legend>
                            </LegendBox>
                            <LegendBox>
                                <LegendColor type={1} />
                                <Legend>Está nas classes</Legend>
                            </LegendBox>
                            <LegendBox>
                                <LegendColor type={2} />
                                <Legend>Uma criança</Legend>
                            </LegendBox>
                            <LegendBox>
                                <LegendColor type={3} />
                                <Legend>Vida Perdida</Legend>
                            </LegendBox>
                        </LargeBox>

                        <Table
                            colunsSize={['medium', 'small']}
                            alignColuns={['start', 'center']}
                            namesColumns={['Nome', 'Telefone']}
                            datas={allLifes.map(life => ({ name: life.fullName, phone: life.phone, id: life.id, legend: life.legend }))}
                            buttons={data =>
                                <RowButtons>
                                    <Button key={1} title={<OutlineFileSync />} onClick={() => openModal(data)} outlined color={Colors.green} width={38} />
                                    <Button key={2} title={<ListDetails />} onClick={() => detailsLife(data)} outlined color={Colors.blue} width={38} />
                                    <Button key={3} title={<LostUser disabled={data.legend === 3 ? true : false} />} onClick={() => declareLifeLost(data)} disabled={data.legend === 3 ? true : false} outlined color={Colors.red} width={38} />
                                </RowButtons>
                            }
                            sizeCellButton="small"
                        />
                    </Section>
            }

            <BoxModal isOpen={modalVisible} closedPress={() => closeModal()}>
                <TitleModal>{`Novo feedback para ${lifeSelected.name}`}</TitleModal>
                {error ? <MessageBox text="É necessário que o feedback possua mais de 50 caracteres." /> : null}
                <Textarea value={newFeedback} onChange={event => setNewFeedback(event.target.value)} disabled={loadingButton} maxLength={499} />
                <Button title="Enviar" onClick={() => sendFeedback()} loading={loadingButton ? 1 : 0} />
            </BoxModal>
        </Container>
    )
}