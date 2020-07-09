import React from 'react'

import Header from '../components/Header'
import BoxForm from '../components/BoxForm'
import RowInputs from '../components/RowInputs'
import Input from '../components/Input'
import Button from '../components/Button'

import { Container, Section } from './styles/MainStyled'

export default function RegisterVisitant() {

    return (
        <Container>
            <Header />

            <Section>
                <BoxForm
                    title="Cadastrar Visitante"
                    buttons={[
                        <Button title="Voltar" to="/integration" type="link" outlined={true} />,
                        <Button title="Enviar" />,
                    ]}
                >
                    <Input label="Nome" required />
                    <RowInputs inputs={[
                        <Input label="Telefone" required />,
                        <Input label="Frequenta outra igreja?" />,
                        <Input label="Quem trouxe?" />
                    ]} />
                </BoxForm>
            </Section>

        </Container>
    )
}