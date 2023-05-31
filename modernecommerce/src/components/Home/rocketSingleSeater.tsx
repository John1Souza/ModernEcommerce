"use client"

import styled from "styled-components";

interface RockeSingleSeaterProps {

}

const SeaterSection = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    position: relative;
    top: -100px;
    width: var(--max-width);
    height: 1000px;

    background-color: var(--bc-yellow);

    

`

const RocketSingleSeaterImage = styled.div`
  position: relative;
  width: 853px;
  height: 900px;
  /* top: -100px; */
  /* bottom: 100px; */

  background: url("/HomeFigures/Rocket single seater 1.png");
  filter: drop-shadow(0px 28px 30px rgba(0, 0, 0, 0.1));
  /* transform: matrix(-1, 0, 0, 1, 0, 0); */
`

const RocketText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 900px;  

  position: relative;
  top: 100px;

  > h1 {
    position: relative;
    left: 140px;
    justify-content: flex-end;
    width: 27.5rem;
    height: 12rem;
    font-size: 4rem;
    line-height: 6rem;
  }

  > p {
    width: 125px;
    height: 50px;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;

    margin-top: 46px;
    margin-right: 36px;

    border-bottom: 2px solid #000000;

  }
  > button {
      width: 125px;
      height: 49px;
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;

      margin-top: 26px;
      padding-bottom: 13px;
      border: none;
      /* border-bottom: 3px solid black; */

      cursor: pointer;

      transition: all .5s ease;
      background-color : transparent;
      outline: none;

      &:hover {
        transform: scale(1.15);          
      }

  } 
`
const RocketTextLine = styled.span`
  width: 121px;
  height: 2px;
  background-color: #000;
`

export default function RocketSingleSeater(props: RockeSingleSeaterProps) {
  return (
    <SeaterSection>
      <RocketText>
        <h1>Rocket single seater</h1>
        <button type="submit">Shop Now</button>
        <RocketTextLine></RocketTextLine>
      </RocketText>
      <figure>
        <RocketSingleSeaterImage />
      </figure>
    </SeaterSection>
  );
}
