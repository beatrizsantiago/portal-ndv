import { css } from 'styled-components'

const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CenterColumn = css`
    ${Center}
    flex-direction: column;
`

export const CenterRow = css`
    ${Center}
    flex-direction: row;
`

export const PropsCard = css`
    border-radius: 10px;
`