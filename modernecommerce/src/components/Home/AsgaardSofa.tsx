import Image from "next/image"
import styled from "styled-components"

const AsgaardSection = styled.section`
    width: 1440px;
    height: 639px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    place-items: center;
    background-color: #FFF9E6;
`

const AsgaardFigure = styled.figure`
  position: relative;  
  top: -80px;
`

const AsgaardText = styled.text`
  position: relative;
  width: 331px;
  height: 205px;
  display: flex;
  flex-direction: column;
  text-align: center;

  place-items: center;

  margin-bottom: 160px;


  > h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
  }

  > p {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }

  > button { 
    width: 255px;
    height: 64px;
    margin-top: 33px;
    cursor: pointer;

    font-weight: 400;
    font-size: 20px;
    line-height: 30px;

    background-color: transparent;
    outline: none;
    transition: all 0.25s ease;

    &:hover{ 
      transform: scale(1.15);
    }
  }
`

export default function AsgaardSofa() {
  return (
    <AsgaardSection>
        <AsgaardFigure>
          <Image src={'/AsgaardSofa/Asgaard sofa 1.png'} alt="Asgaard sofa 1" width={983} height={799}/>
        </AsgaardFigure>
        <AsgaardText>
          <p>New Arrivals</p>
          <h2>Asgaard Sofa</h2>
          <button>Order Now</button>
        </AsgaardText>
    </AsgaardSection>
  )
}
