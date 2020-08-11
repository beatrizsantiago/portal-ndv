import React, { useState } from 'react'
import { GoLock, GoMail } from 'react-icons/go'
import SweetAlert from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

import UserService from '../services/UserService'

import { Container, Box, HeaderBox, Label, InputEmail, InputPassword, ImageLogin, Button, IconMail, IconPassword, Spacing } from './styles/LoginStyled'

import Colors from '../themes/Colors'

export default function Login() {

    const [email, setEmail] = useState('beatriz.santiago@ndv.com')
    const [password, setPassword] = useState('Admin@123')

    const alertError = (message) => {
        return SweetAlert.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
            confirmButtonColor: Colors.primary,
        })
    }

    let navigate = useNavigate()

    const sendDatas = () => {
        const regexEmail = /[A-Za-z0-9][\w.]+@[a-z]+\.[a-z]{2}/

        if (!email || !regexEmail.test(email)) {
            alertError('Informe um e-mail válido!')

        } else if (password.length < 6) {
            alertError('Senha incorreta! A senha precisa ter no mínimo 6 caracteres.')

        } else {
            UserService.Login(email, password)
                .then(token => {
                    console.log("T -> ", token);
                    setEmail('')
                    setPassword('')
                    navigate('/home')
                })
                .catch(error => {
                    alertError('Não foi possível realizar o login! Verifique se seus dados estão corretos.')
                })
        }
    }

    return (
        <Container>
            <Box>
                <HeaderBox>
                    <ImageLogin />
                </HeaderBox>

                <Spacing />

                <Label>E-mail</Label>
                <IconMail><GoMail /></IconMail>
                <InputEmail value={email} onChange={event => setEmail(event.target.value)} />

                <Label>Senha</Label>
                <IconPassword><GoLock /></IconPassword>
                <InputPassword value={password} onChange={event => setPassword(event.target.value)} />

                <Button onClick={() => sendDatas()}>Entrar</Button>
            </Box>
        </Container>
    )
}