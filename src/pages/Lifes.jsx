import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Header from '../components/Header'
import Table from '../components/Table'

import { Container, Section } from './styles/MainStyled'

function Lifes() {
    return (
        <Container>
            <Header />

            <Section>
                <Table
                    colunsSize={['medium', 'small', 'small']}
                    alignColuns={['start', 'center', 'center']}
                    namesColumns={['Nome', 'Telefone', '']}
                    datas={[
                        {name: 'asd', phone: 'asd', day: 'asd'},
                        {name: 'asd', phone: 'asd', day: 'asd'},
                    ]}
                />
            </Section>
        </Container>
    )
}

export default Lifes