import styled from "styled-components";
import { TopPicksData } from "./TopPicksData";
import Image from "next/image";

export const TopPicksSection = styled.div`
    background-color: #ffffff;
    width: var(--max-width);
  height: 777px;
  display: grid;
  place-items: center;
  padding: 16px 100px 16px 100px ;
k
  > h1,
  p {
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;

const TopPicksHeader = styled.div`
  text-align: center;

  > h1 {
    font-size: 36px;
  }

  > p {
    font-size: 16px;
  }
`;
const TopPicksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
`;
const TopPicksDataWrapper = styled.div`
  width: 287px;
  height: 397px;
  margin-right: 30px;
`;
const TopPicksDataItem = styled.div`
`;
const TopPicksDataItemFigcaption = styled.figcaption`
  max-width: 212px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
const TopPicksDataItemValue = styled.span`
  display: flex;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin-top: 20px;
`;

const TopPickButton = styled.button` 
    width: 115px;
    height: 30px;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;

    margin-bottom: 19px;

    border: none;
    cursor: pointer;

    transition: all .5s ease;
    background-color : transparent;
    outline: none;

    &:hover {
        transform: scale(1.15);          
    }
`
const TopPickSpan = styled.span`
    display: flex;
    width: 115px;
    height: 2px;
    background-color: #000;  
`

export default function TopPicks() {
  return (
    <TopPicksSection>
      <TopPicksHeader>
        <h1>Top Picks For You</h1>
        <p>
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
      </TopPicksHeader>
      <TopPicksWrapper>
        {TopPicksData.map((item, index) => (
          <TopPicksDataWrapper key={index}>
            <TopPicksDataItem>
              <Image src={item.img} alt={item.fig} width={287} height={287} />
            </TopPicksDataItem>
            <TopPicksDataItemFigcaption>{item.fig}</TopPicksDataItemFigcaption>
            <TopPicksDataItemValue>R$ {`${Number(item.value).toLocaleString('pt')},00`}</TopPicksDataItemValue>
          </TopPicksDataWrapper>
        ))}
      </TopPicksWrapper>
      <div>
          <TopPickButton type="submit">View More</TopPickButton>
          <TopPickSpan></TopPickSpan>
      </div>
    </TopPicksSection>
  );
}
