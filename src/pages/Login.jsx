import React from 'react'
import { GoLock, GoMail } from 'react-icons/go'

import { Container, Box, HeaderBox, Label, InputEmail, InputPassword, ImageLogin, Button, IconMail, IconPassword, Spacing } from './styles/LoginStyled'

export default function Login() {
    return (
        <Container>
            <Box>
                <HeaderBox>
                    <ImageLogin />
                </HeaderBox>

                <Spacing />

                <Label>E-mail</Label>
                <IconMail><GoMail /></IconMail>
                <InputEmail />

                <Label>Senha</Label>
                <IconPassword><GoLock /></IconPassword>
                <InputPassword />

                <Button>Entrar</Button>
            </Box>
        </Container>
    )
}