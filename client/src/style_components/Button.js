import styled from 'styled-components'
import { FONT, INV_TEXT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR } from './styles'


const Button = styled.button `
background: ${PRIMARY_COLOR};
color: ${INV_TEXT_COLOR};
font-size: ${FONT.medium};
margin: 10px;
padding: .25em 1.5em;
border: 2px solid ${PRIMARY_COLOR} !important;
border-radius: 3px;

&:hover {
    color: ${TEXT_COLOR};
    background: ${INV_TEXT_COLOR};
    cursor: pointer;
    transition-duration: 1s;
}
`

export default Button