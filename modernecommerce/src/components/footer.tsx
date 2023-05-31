import styled from "styled-components"

const FootContainer = styled.footer`
    height: 555px;
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center;    

    padding: 100px;


    hr { 
        width: 1240px;
        margin-bottom: 35px;         
    }

    
`
const FooterContent = styled.div`
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

            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
        }
    }
`

const FooterRights = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    
    position: relative;
    left: -470px;
    top: 0;
`

export function Footer() {
  return (
    <FootContainer>
        <FooterContent>
          
            <p>
                400 University Drive Suite 200 Coral Gables,
                <br></br>                   
                FL 33134 USA
            </p>
            
            <ul>
                <p>Links</p>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <ul>
                <p>Help</p>
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
            </ul>
            <div>
                <p>Newsletter</p>
                <input type="text" placeholder="Enter Your Email Address"/>
                <button type="submit">SUBSCRIBE</button>
            </div>
        </FooterContent>
        <hr></hr>
        <FooterRights>2022 Meubel House. All rights reverved</FooterRights>  
    </FootContainer>
  )
}
