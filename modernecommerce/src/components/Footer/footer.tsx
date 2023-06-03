import { FootContainer, FooterContent, FooterRights} from "./footerStyle"


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
