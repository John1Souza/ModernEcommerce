"use client"

import styled from "styled-components"
import { HomeSection } from "@/Home/HomeSection"

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: var(--max-width);

  position: relative;
  top: -100px;


  @media screen and (max-width: 320px) {

    
    div {
      display: grid;
      grid-template-columns: 1fr;
      place-items: center;

    }
  }
  
`

export default function Home() {
  return (
    <MainWrapper>
      <HomeSection />
    </MainWrapper>
  )
}
