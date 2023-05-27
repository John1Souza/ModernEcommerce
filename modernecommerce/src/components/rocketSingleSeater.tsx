"use client"

import styled from "styled-components";

interface RockeSingleSeaterProps {

}

const SeaterSection = styled.section`
    display: flex;

`

const RocketSingleSeaterImage = styled.img`
    position: absolute;
    width: 853px;
    height: 1000px;
    top: 0px;

    
    filter: drop-shadow(0px 28px 30px rgba(0, 0, 0, 0.1));
`

export function RocketSingleSeater(props: RockeSingleSeaterProps) {
  return (
    <SeaterSection>
      <h1>Rocket single seater</h1>
      <p>Shop Now</p>
      <figure>
        <RocketSingleSeaterImage 
            src="/HomeFigures/Rocket single seater 1.png" 
            alt="Rocket single seater" 
        />
        <figcaption>Fig.1 - Rocket single seater.</figcaption>
      </figure>
    </SeaterSection>
  );
}
