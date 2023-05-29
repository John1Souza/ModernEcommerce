import Image from "next/image"
import styled from "styled-components"

const TableSection = styled.section`
    width: 1440px;
    height: 672px;

    background-color: #FAF4F4;

    margin-top: -100px;

    /* border: 2px solid black;  */

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
`

const TableSectionOne = styled.div`
    width: 605px;
    height: 562px;

    /* border: 2px solid black; */

    margin: 50px 20px 60px 95px;
`
const TableSectionTwo = styled.div`
    width: 605px;
    height: 562px;

    /* border: 2px solid black; */
    
    margin: 50px 95px 60px 20px;
`

const SideTableOne = styled.figure`
    width: 1092px;
    height: 1641px;
    
    /* position: relative; */

    background: url("/HomeFigures/Granite square side table 1.png");
    background-repeat: no-repeat;
`
const SideTableTwo = styled.figure`
    width: 1585px;
    height: 1055px;
    
    /* position: relative; */
    
    background-image: url("/HomeFigures/Cloud sofa three seater + ottoman_3 1.png"); 
    background-repeat: no-repeat;
`

const TableOneText = styled.div`
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
        background-color: #fff;
        border-bottom: 3px solid black;

        cursor: pointer;

        transition: all .5s ease;
        text-align: center;
        line-height: 1;
        background-color : transparent;
        outline: none;

        &:hover {
            color: #001F3F;
            background-color: #dedede3a;
            border-radius: 4px;

            opacity: 0.9;
        }

    }
    
`
const TableTwoText = styled.div`
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
        background-color: #fff;
        border-bottom: 3px solid black;

        cursor: pointer;

        transition: all .5s ease;
        text-align: center;
        line-height: 1;
        background-color : transparent;
        outline: none;

        &:hover {
            color: #001F3F;
            background-color: #dedede3a;
            border-radius: 4px;

            opacity: 0.9;
        }

    }   
`

export default function Table() {
  return (
    <TableSection>
        <TableSectionOne>
            <SideTableOne />
            <TableOneText>
                <h1>Side table</h1>    
                <button type="submit">View More</button>        
            </TableOneText>    
        </TableSectionOne>
        <TableSectionTwo>
            <SideTableTwo />
            <TableTwoText>
                <h1>Side table</h1>     
                <button type="submit">View More</button>        
            </TableTwoText>
        </TableSectionTwo>
    </TableSection>
  )
}
