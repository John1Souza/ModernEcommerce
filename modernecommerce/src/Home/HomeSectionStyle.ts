import styled from "styled-components";


export const SeaterSection = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    
    max-width: var(--max-width);
    max-height: 1000px;

    background-color: var(--bc-yellow);

    

`

export const RocketSingleSeaterImage = styled.div`
  position: relative;
  width: 853px;
  height: 900px;

  background: url("/HomeFigures/Rocket single seater 1.png");
  filter: drop-shadow(0px 28px 30px rgba(0, 0, 0, 0.1));
`

export const RocketText = styled.div`
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
export const RocketTextLine = styled.span`
  width: 121px;
  height: 2px;
  background-color: #000;
`
export const AsgaardSection = styled.div`
  width: var(--max-width);
  max-height: 639px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  place-items: center;
  background-color: var(--bc-yellow-light);
`

export const AsgaardFigure = styled.figure`
  position: relative;  
  top: -80px;
`

export const AsgaardText = styled.text`
  position: relative;
  width: 331px;
  height: 205px;
  display: flex;
  flex-direction: column;
  text-align: center;

  place-items: center;

  margin-bottom: 160px;


  > h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
  }

  > p {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }

  > button { 
    width: 255px;
    height: 64px;
    margin-top: 33px;
    cursor: pointer;

    font-weight: 400;
    font-size: 20px;
    line-height: 30px;

    background-color: transparent;
    outline: none;
    transition: all 0.25s ease;

    &:hover{ 
      transform: scale(1.15);
    }
  }
`

export const TableSection = styled.div`
    width: var(--max-width);
    height: 672px;
    background-color: var(--pinky);
    margin-top: -100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;

    
`

export const TableSectionOne = styled.div`
    width: 605px;
    height: 562px;
    margin: 50px 20px 60px 95px;
`
export const TableSectionTwo = styled.div`
    width: 605px;
    height: 562px;
    
    margin: 50px 95px 60px 20px;
`

export const SideTableOne = styled.figure`
    width: 1092px;
    height: 1641px;
    background: url("/HomeFigures/Granite square side table 1.png");
    background-repeat: no-repeat;
`
export const SideTableTwo = styled.figure`
    width: 1585px;
    height: 1055px;
    
    background-image: url("/HomeFigures/Cloud sofa three seater + ottoman_3 1.png"); 
    background-repeat: no-repeat;
`

export const TableOneText = styled.div`
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
export const TableTwoText = styled.div`
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

export const TableTextLine = styled.span`
  width: 121px;
  height: 2px;
  background-color: #000;
`
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

export const TopPicksHeader = styled.div`
  text-align: center;

  > h1 {
    font-size: 36px;
  }

  > p {
    font-size: 16px;
  }
`;
export const TopPicksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
`;
export const TopPicksDataWrapper = styled.div`
  width: 287px;
  height: 397px;
  margin-right: 30px;
`;
export const TopPicksDataItem = styled.div`
`;
export const TopPicksDataItemFigcaption = styled.figcaption`
  max-width: 212px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
export const TopPicksDataItemValue = styled.span`
  display: flex;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin-top: 20px;
`;

export const TopPickButton = styled.button` 
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
export const TopPickSpan = styled.span`
    display: flex;
    width: 115px;
    height: 2px;
    background-color: #000;  
`
export const InstagramDiv = styled.div`
    width: var(--max-width);
    height: 450px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 18px;

    

    background: url('/InstaImage/Rectangle 17.png');

    h2 {
      font-weight: 700;
      font-size: 60px;
      line-height: 90px;
    }

    p { 
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
    }

    button {
      width: 255px;
      height: 64px;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;

      border: none;

      background: #FAF4F4;
      border-radius: 50px;  
      
      margin-top: 10px;
      cursor: pointer;
      
      filter: drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.1));
      
      transition: all .3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
`

export const OurBlogsSection = styled.div`
    width: var(--max-width);
    height: 944px;
    display: flex; 
    flex-direction: column;    
    place-items: center;
    text-align: center;

    

    padding: 54px 100px 55px 100px;
    

    > button {
        width: 126px;
        height: 49px;
        align-items: center;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;


        margin-top: 10px;
        border: none;
        border-bottom: 2px solid black;
        outline: none;
        background-color: transparent !important;
        transition: all 0.3s ease;

        &:hover{ 
            cursor: pointer;
            transform: scale(1.15);
        }
    }
`

export const BlogCards = styled.div`  
    width: 1240px;
    height: 679px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
`
export const BlogCardsItems = styled.div`
    width: 393px;
    height: 555px;
    text-align: center;    

    >p {
        margin-top: 33px;
    }
    
`
export const OurBlogsImage = styled.figure`
    width: 393px; /* Set the desired width of the parent div */
    height: 393px; /* Set the desired height of the parent div */
    overflow: hidden; /* Hide any overflow from scaled image */
    position: relative;


    > img {
        width: 100%; /* Set the image width to fill the parent div */
        height: 100%; /* Set the image height to fill the parent div */
        transition: transform 0.2s ease; /* Add a smooth transition effect */
        position: absolute; /* Position the image absolutely within the parent div */
        top: 0; /* Position the image at the top left corner */
        left: 0;
        right: 0;
        bottom: 0;
        transform-origin: top left right bottom; /* Set the transform origin to the top left corner */

        &:hover{
            transform: scale(.95);
        }
    }
`

export const BlogCardTime = styled.div`
    width: 223px;
    height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 15px;

    margin: 0 auto;

    margin-top: 19px;

    font-weight: 300;
    font-size: 16px;
    line-height: 24px;

    
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    margin-top: 10px;
    > button {
        width: 130px;
        height: 46px;

        font-weight: 500;
        font-size: 24px;
        line-height: 36px;

        border: none;
        /* border-bottom: 2px solid #000; */
        outline: none;

        background-color: transparent !important;

        transition: all 0.3s ease;

        &:hover{ 
            cursor: pointer;
            transform: scale(1.15);
        }

    }

    > span {
        display: block;
        width: 115px;
        height: 2px;
        background-color: #000;

    }
`
export const OurBlogsHead = styled.div`
    > h1 {
        font-weight: 500;
        font-size: 36px;
        line-height: 54px;  
    }

    > p {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;

        margin-top: 13px;
    }
`

