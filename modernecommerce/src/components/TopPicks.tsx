import styled from "styled-components"
import { TopPicksData } from "./TopPicksData"
import Image from "next/image"

export const TopPicksSection = styled.section`
    width: 1440px;
    height: 777px;

    display: grid;
    place-items: center;

    padding: 1rem;

    > h1, p {
        display: flex;
        justify-content: center;
        align-items: center;
    } 
    
`

const TopPicksDataItem = styled.div`
    max-width: 287px;
    max-height: 287px;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* place-items: center; */

    border: 1px solid blue;
`

export default function TopPicks() {
  return (
    <TopPicksSection>
        <h1>Top Picks For You</h1>
        <p>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        <TopPicksDataItem >
            {TopPicksData.map((item, index) => (
                    <Image src={item.img} alt={item.name} width={287} height={287} key={index} />            
                ))
            }
        </TopPicksDataItem>   
        <button type="submit">View More</button>
    </TopPicksSection>
  )
}
