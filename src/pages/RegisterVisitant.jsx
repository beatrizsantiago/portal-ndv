import React, { useState } from 'react'

import Header from '../components/Header'
import BoxForm from '../components/BoxForm'
import RowInputs from '../components/RowInputs'
import Input from '../components/Input'
import Button from '../components/Button'
import Select from '../components/Select'

import { Container, Section } from './styles/MainStyled'

export default function RegisterVisitant() {

    const [fullName, setFullName] = useState('')
    const [phone, setPhone] = useState('')
    const [otherChurch, setOtherChurch] = useState('')
    const [companion, setCompanion] = useState('')

    const validationDatas = () => {
        if (fullName.length < 3) {

        } else if (phone) {

        }
    }

    const maskPhone = value => {
        // return value.replace(/\D/g,"")
        return value.replace(/^(\D{2})(\D{5})(\D{4}).*/,"($1) $2-$3");
    }

    return (
        <Container>
            <Header />

            <Section>
                <BoxForm
                    title="Cadastrar Visitante"
                    buttons={[
                        <Button title="Voltar" to="/integration" type="link" outlined={true} />,
                        <Button title="Enviar" onClick={() => validationDatas()} />,
                    ]}
                >
                    <Input label="Nome" value={fullName} onChange={event => setFullName(event.target.value)} required />
                    <RowInputs inputs={[
                        <Input label="Telefone" value={phone} onChange={event => setPhone(maskPhone(event.target.value))} required />,
                        <Select
                            label="Frequenta outra igreja?"
                            value={otherChurch}
                            onChange={event => setOtherChurch(event.target.value)}
                            options={[
                                { label: 'Não', value: 1 },
                                { label: 'Sim', value: 2 },
                            ]}
                        />,
                        <Input label="Quem trouxe?" value={companion} onChange={event => setCompanion(event.target.value)} />
                    ]} />
                </BoxForm>
            </Section>

        </Container>
    )
}