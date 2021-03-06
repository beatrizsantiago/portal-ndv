import styled from 'styled-components'
import { FaAddressCard, FaHandHoldingHeart, FaUsersCog } from 'react-icons/fa'
import { Bar } from 'react-chartjs-2'

import Colors from '../../themes/Colors'

export const AddressCard = styled(FaAddressCard)`
    font-size: 38px;
`

export const HandHeart = styled(FaHandHoldingHeart)`
    font-size: 38px;
`

export const UsersCog = styled(FaUsersCog)`
    font-size: 38px;
`

export const Graph = styled.div`
    position: relative;
    width: 100%;
    min-width: 300px;
    /* height: 60vh; */
    padding: 30px;
    margin-top: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: ${Colors.white};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
`

export const BarGraph = styled(Bar).attrs(props => ({
    data: {
        labels: props.labels,
        datasets: [{
            label: 'Vidas',
            data: props.data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 79, 220, 0.2)',
                'rgba(255, 133, 13, 0.2)',
                'rgba(46, 46, 46, 0.2)',
            ],
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 79, 220, 0.4)',
                'rgba(255, 133, 13, 0.4)',
                'rgba(46, 46, 46, 0.4)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 79, 220, 1)',
                'rgba(255, 133, 13, 1)',
                'rgba(46, 46, 46, 1)',
            ],
            borderWidth: 1
        }]
    },
    width: 200,
    height: 500,
    options: { maintainAspectRatio: false },
}))``