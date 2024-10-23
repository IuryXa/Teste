import styled from 'styled-components'
import BuildingImage from '../assets/building.png'

const BannerContainer = styled.div`
    background-image: url(${BuildingImage});
    height:300px;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content:center;
`
const BannerText = styled.p`
    color: #333;
    font-size:32px;
    font-weight: bold;
`

function Banner(){
    return(
        <BannerContainer>
            <BannerText>Dunder Mifflin Paper Company</BannerText>
        </BannerContainer>
    )
}

export default Banner