"use client"

import { RocketSingleSeater } from "@/components/rocketSingleSeater"

import styles from './page.module.css'

import styled from "styled-components"
import Table from "@/components/table"
import TopPicks from "@/components/TopPicks"

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
    </MainWrapper>
  )
}
