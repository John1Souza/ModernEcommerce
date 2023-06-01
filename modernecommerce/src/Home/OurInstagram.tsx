import styled  from "styled-components"

const InstaDiv = styled.div`
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

export function OurInstagram() {
  return (
    <InstaDiv>
      <h2>Our Instagram</h2>
      <p>Follow our store on Instagram</p>
      <button>Follow Us</button>        
    </InstaDiv>
  )
}
