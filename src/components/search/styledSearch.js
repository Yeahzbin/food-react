import styled from "styled-components"
import border from "../../components/styled/border"
export const SearchWrap = border({
    Comp: styled.div`
padding:.5rem;
margin:0.5rem;
display:flex;
justify-content:space-around;
align-items:center;
color:#666;
font-weight:500;
background:white;
img{
    width:20px;
    height:20px;
}
`})
