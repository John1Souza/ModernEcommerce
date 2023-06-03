import styled from "styled-components"

export const FootContainer = styled.footer`
    height: 555px;
    display: grid; 
    place-items: center;   

    padding: 100px;


    hr { 
        width: 1240px;
        margin-bottom: 35px;         
    }


    @media screen and (max-width: 767px) {
                
    }
    
`
export const FooterContent = styled.div`
    width: 1240px;
    display: grid; 
    grid-template-columns: 2fr 1fr 1fr 2fr;

    margin-bottom: 48px;
    > p {
        width: 285px;
        position: relative;

        top: 50%;

        transform: translateY(-15%);
    }

    p { 
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        color: #9F9F9F;
    }

    ul { 
        max-width: 172px;
        display: flex;
        flex-direction: column;
        gap: 45px;

        list-style: none;

        li {
            font-weight: 500;
            cursor: pointer;
        }
    }

    div {
        

        p{ 
            margin-bottom: 45px;
        }

        input { 
            outline: none;
            margin-right: 5px;
            border: none;
            border-bottom: 1px solid black;

            padding: 5px;

            color: #9F9F9F;
        }

        button {
            padding: 2px;
            border: none;
            border-bottom: 1px solid black;  
            background-color: transparent !important;
            cursor: pointer;
            

            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
        }
    }
`

export const FooterRights = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    
    position: relative;
    left: -470px;
    top: 0;
`
