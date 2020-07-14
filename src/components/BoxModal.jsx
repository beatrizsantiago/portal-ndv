import React from 'react'
import styled from 'styled-components'
import ReactModal from 'react-modal'
import { MdClose } from 'react-icons/md'

import Colors from '../themes/Colors'

export default function BoxModal({ isOpen = false, width, closedPress, padding = true, children }) {
    return (
        <Modal isOpen={isOpen} width={width} padding={padding}>
            <ButtonClose onClick={closedPress}><Close /></ButtonClose>
            {children}
        </Modal>
    )
}

const Modal = styled(ReactModal).attrs(props => ({
    style: {
        overlay: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 999
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'absolute',
            width: `${props.width || 60}%`,
            minWidth: '300px',
            padding: props.padding ? 20 : 0,
            backgroundColor: Colors.white,
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: 10,
            outline: 'none',
            boxSizing: 'border-box',
        }
    }
}))``

const ButtonClose = styled.button`
    position: absolute;
    top: 4px;
    right: 0px;
    background-color: transparent;
    border: none;
`

const Close = styled(MdClose)`
    font-size: 25px;
    color: ${Colors.primary};
`