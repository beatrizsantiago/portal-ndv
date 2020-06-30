import styled from 'styled-components'
import { CenterColumn } from '../../themes/StyleConstants'
import { FaAddressCard, FaHandHoldingHeart, FaUsersCog } from 'react-icons/fa'
import { Bar } from 'react-chartjs-2'

export const AddressCard = styled(FaAddressCard)`
    font-size: 38px;
`

export const HandHeart = styled(FaHandHoldingHeart)`
    font-size: 38px;
`

export const UsersCog = styled(FaUsersCog)`
    font-size: 38px;
`

export const Section = styled.section`
    ${CenterColumn}
    width: 100%;
    padding: 0px 10px;
    box-sizing: border-box;
`

export const Graph = styled.div`
    position: relative;
    width: 100%;
    /* height: 60vh; */
    padding: 30px;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: white;
`

export const BarGraph = styled(Bar).attrs(props => ({
    data: {
        labels: ['Visitantes', 'Conversões/Reconciliações', 'Batismo', 'Experiência com Deus', 'Ativação da Paternidade', 'Classe Vida Cristã', 'Classe Líder de CAP'],
        datasets: [{
            label: 'Vidas',
            data: props.data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(46, 46, 46, 0.2)'
            ],
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 159, 64, 0.4)',
                'rgba(46, 46, 46, 0.4)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(46, 46, 46, 1)'
            ],
            borderWidth: 1
        }]
    },
    width: 200,
    height: 550,
    options: { maintainAspectRatio: false },
}))``