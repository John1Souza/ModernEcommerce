import styled from "styled-components"

const TableSection = styled.div`
    width: var(--max-width);
    height: 672px;
    background-color: var(--pinky);
    margin-top: -100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
`

const TableSectionOne = styled.div`
    width: 605px;
    height: 562px;
    margin: 50px 20px 60px 95px;
`
const TableSectionTwo = styled.div`
    width: 605px;
    height: 562px;
    
    margin: 50px 95px 60px 20px;
`

const SideTableOne = styled.figure`
    width: 1092px;
    height: 1641px;
    background: url("/HomeFigures/Granite square side table 1.png");
    background-repeat: no-repeat;
`
const SideTableTwo = styled.figure`
    width: 1585px;
    height: 1055px;
    
    background-image: url("/HomeFigures/Cloud sofa three seater + ottoman_3 1.png"); 
    background-repeat: no-repeat;
`

const TableOneText = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: -1260px;
    left: 110px;

    > h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 54px;
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
        cursor: pointer;
        text-align: center;
        line-height: 1;
        transition: all .5s ease;
        background-color : transparent;
        outline: none;

        &:hover {
            transform: scale(1.15);          
        }

    }
    
`
const TableTwoText = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: -675px;
    left: 110px;

    > h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 54px;
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

        cursor: pointer;

        text-align: center;
        line-height: 1;

        transition: all .5s ease;
        background-color : transparent;
        outline: none;

        &:hover {
            transform: scale(1.15);          
        }

    }   
`

const TableTextLine = styled.span`
  width: 121px;
  height: 2px;
  background-color: #000;
`

export default function Table() {
  return (
    <TableSection>
        <TableSectionOne>
            <SideTableOne />
            <TableOneText>
                <h1>Side table</h1>    
                <button type="submit">View More</button>
                <TableTextLine></TableTextLine>
            </TableOneText>    
        </TableSectionOne>
        <TableSectionTwo>
            <SideTableTwo />
            <TableTwoText>
                <h1>Side table</h1>     
                <button type="submit">View More</button> 
                <TableTextLine></TableTextLine>
            </TableTwoText>
        </TableSectionTwo>
    </TableSection>
  )
}
