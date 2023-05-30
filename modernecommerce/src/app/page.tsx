"use client"

import styled from "styled-components"
import RocketSingleSeater  from "@/components/Home/rocketSingleSeater"
import Table from "@/components/Home/table"
import TopPicks from "@/components/Home/TopPicks"
import AsgaardSofa from "@/components/Home/AsgaardSofa"
import OurBlogs from "@/components/Home/OurBlogs"

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1440px;
  
`

export default function Home() {
  return (
    <MainWrapper>
      <RocketSingleSeater />
      <Table />
      <TopPicks />
      <AsgaardSofa />
      <OurBlogs />
    </MainWrapper>
  )
}
