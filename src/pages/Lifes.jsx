import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SweetAlert from 'sweetalert2'

import IntegrationService from '../services/IntegrationService'

import { setCurrentLife } from '../redux/life/life.actions'

import Header from '../components/Header'
import Table from '../components/Table'
import Button from '../components/Button'
import Loading from '../components/Loading'
import BoxModal from '../components/BoxModal'
import MessageBox from '../components/MessageBox'

import { Container, Section, TitleModal, LargeBox } from './styles/MainStyled'
import { LegendBox, LegendColor, Legend, OutlineFileSync, LostUser, ListDetails, RowButtons, Textarea } from './styles/LifesStyled'

import Colors from '../themes/Colors'

function Lifes({ setCurrentLife }) {

    const [allLifes, setAllLifes] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [newFeedback, setNewFeedback] = useState('')
    const [lifeSelected, setLifeSelected] = useState('')
    const [loading, setLoading] = useState(false)
    const [loadingButton, setLoadingButton] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        listLifes()
    }, [])

    const listLifes = () => {
        setLoading(true)
        IntegrationService.GetLifes()
            .then(resp => {
                setAllLifes(resp)

                setTimeout(() => {
                    setLoading(false)
                }, 1000);
            })
    }

    let navigate = useNavigate()

    const detailsLife = data => {
        setCurrentLife(data.id)
        navigate('/integration/lifes/details')
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
                        })
                    })
                    .catch(error => {
                        SweetAlert.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Não foi possível declarar a vida como perdida. Tente novamente mais tarde!',
                            confirmButtonColor: Colors.primary,
                        })
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
                    SweetAlert.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Não foi possível enviar este feedback. Tente novamente mais tarde!',
                        confirmButtonColor: Colors.primary,
                    })
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
                            datas={allLifes.map(life => ({ name: life.name, phone: life.phone, id: life.id, legend: life.legend }))}
                            buttons={data =>
                                <RowButtons>
                                    <Button key={1} title={<OutlineFileSync />} onClick={() => openModal(data)} outlined color={Colors.green} width={38} />
                                    <Button key={2} title={<ListDetails />} onClick={() => detailsLife(data)} outlined color={Colors.blue} width={38} />
                                    <Button key={3} title={<LostUser />} onClick={() => declareLifeLost(data)} outlined color={Colors.red} width={38} />
                                </RowButtons>
                            }
                            sizeCellButton="small"
                        />
                    </Section>
            }

            <BoxModal isOpen={modalVisible} closedPress={() => closeModal()}>
                <TitleModal>{`Novo feedback para ${lifeSelected.name}`}</TitleModal>
                {error ? <MessageBox text="É necessário que o feedback possua mais de 50 caracteres." /> : null}
                <Textarea value={newFeedback} onChange={event => setNewFeedback(event.target.value)} disabled={loadingButton} />
                <Button title="Enviar" onClick={() => sendFeedback()} loading={loadingButton ? 1 : 0} />
            </BoxModal>
        </Container>
    )
}


const mapDispatchToProps = dispatch => ({
    setCurrentLife: life => dispatch(setCurrentLife(life))
})

export default connect(null, mapDispatchToProps)(Lifes)