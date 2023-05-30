import styled from 'styled-components'
import { OurBlogsData } from './OurBlogsData'
import Image from 'next/image'
import * as AiIcons from "react-icons/ai"

const OurBlogsSection = styled.section`
    width: 1440px;
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

const BlogCards = styled.div`  
    width: 1240px;
    height: 679px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
`
const BlogCardsItems = styled.div`
    width: 393px;
    height: 555px;
    text-align: center;    

    >p {
        margin-top: 33px;
    }
    
`
const OurBlogsImage = styled.figure`
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

const BlogCardTime = styled.div`
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

const ButtonWrapper = styled.div`
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
const OurBlogsHead = styled.div`
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
export default function OurBlogs() {
  return (
    <OurBlogsSection>
        <OurBlogsHead>
            <h1>Our Blogs</h1>
            <p>Find a bright ideal to suit your taste with our great selection</p>
        </OurBlogsHead>
        <BlogCards >
            {OurBlogsData.map((item, index) => (
                        <BlogCardsItems key={index}>
                            <OurBlogsImage>
                                <Image src={item.img} alt="Blogs images" width={393} height={393}/>
                            </OurBlogsImage>
                            <p>{item.text}</p>
                            <ButtonWrapper>
                                <button>Read More</button>
                                <span></span>
                            </ButtonWrapper>
                            <BlogCardTime>
                                <small><AiIcons.AiOutlineClockCircle />5 min</small>
                                <small><AiIcons.AiOutlineCalendar />12th Oct 2022</small>
                            </BlogCardTime>
                        </BlogCardsItems>              
                ))}
        </BlogCards>
        <button>View All Posts</button>
    </OurBlogsSection>
  )
}
