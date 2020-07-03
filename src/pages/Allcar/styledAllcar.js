import styled from "styled-components"
export const HeaderWrap = styled.div`
width:100%;
height:30px;
font-size:15px;
font-weight:600;
background:orange;
text-align:center;
line-height:30px;
color:white;
`
export const Swiperimg = styled.div`
width:100%;
img{
    width:100%;
}
`
export const HotCateLayout = styled.div`
header{
    text-align:left;
    font-size:15px;
    font-family:"黑体";
    background:orange;
    height:20px;
    line-height:20px;
}

.item{
   display:flex;
   flex-direction:column;
    align-items:center;
    img{
    width:60%;
    height:60%;
}
}
  
`