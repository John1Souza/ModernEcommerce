import styled from "styled-components"

export const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: var(--max-width);

    /* padding: 61px 0px 102px 0px; */
`


export const ShopDashboardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    gap: .5rem;
    width: 1440px;
    height: 316px;    
    background: url("/ShopDashboard/Rectangle 1.png");
    background-size: cover;
    background-position: center;
    /* background-repeat: no-repeat; */
    h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 48px;
        line-height: 72px;
    }

    p{ 
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;  
    }

    div {
        display: flex;
        place-items: center;
        gap: .5rem;

        svg {
            width: 10px;
            height: 10px;
            font-weight: 500;
        }
    }
`

export const ProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`

export const Products = styled.div`
    width: 287px;
    height: 397px;

`