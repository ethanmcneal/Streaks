import styled from "styled-components";
import { BOX_SHADOW_COLOR, CARD_COLOR, INV_TEXT_COLOR } from "./styles";

const CardContainer = styled.div`
background: ${CARD_COLOR};
color: ${INV_TEXT_COLOR};
margin: 40px;
box-shadow: 12px 12px 2px 1px ${BOX_SHADOW_COLOR};
padding: 15px;

h1 {
    text-align: center;
}
`

export default CardContainer
