"use client"

import styled from "styled-components"
import { HomeSection } from "@/Home/HomeSection"

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: var(--max-width);
  
`

export default function Home() {
  return (
    <MainWrapper>
      <HomeSection />
    </MainWrapper>
  )
}
