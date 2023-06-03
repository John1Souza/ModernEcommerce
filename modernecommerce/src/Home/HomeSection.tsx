import Image from 'next/image';
import * as AiIcons from 'react-icons/ai';
import {AsgaardFigure,AsgaardSection,AsgaardText,BlogCardTime,BlogCards,BlogCardsItems,ButtonWrapper,InstagramDiv,OurBlogsHead,OurBlogsImage,OurBlogsSection,RocketSingleSeaterImage,RocketText,RocketTextLine,SeaterSection,SideTableOne,SideTableTwo,TableOneText,TableSection,TableSectionOne,TableSectionTwo,TableTextLine,TableTwoText,TopPickButton,TopPickSpan,TopPicksDataItem,TopPicksDataItemFigcaption,TopPicksDataItemValue,TopPicksDataWrapper,TopPicksHeader,TopPicksSection,TopPicksWrapper,} from './HomeSectionStyle'
import { OurBlogsData } from './OurBlogsData';
import { TopPicksData } from './TopPicksData';



export function HomeSection() {
  return (
    <section>      
        <SeaterSection>
          <RocketText>
            <h1>Rocket single seater</h1>
            <button type="submit">Shop Now</button>
            <RocketTextLine></RocketTextLine>
          </RocketText>
          <figure>
            <RocketSingleSeaterImage />
          </figure>
        </SeaterSection>
      <section>
        <AsgaardSection>
          <AsgaardFigure>
            <Image
              src={"/AsgaardSofa/Asgaard sofa 1.png"}
              alt="Asgaard sofa 1"
              width={983}
              height={799}
            />
          </AsgaardFigure>
          <AsgaardText>
            <p>New Arrivals</p>
            <h2>Asgaard Sofa</h2>
            <button>Order Now</button>
          </AsgaardText>
        </AsgaardSection>
      </section>
      <section>
        <OurBlogsSection>
          <OurBlogsHead>
            <h1>Our Blogs</h1>
            <p>Find a bright ideal to suit your taste with our great selection</p>
          </OurBlogsHead>
          <BlogCards>
            {OurBlogsData.map((item, index) => (
              <BlogCardsItems key={index}>
                <OurBlogsImage>
                  <Image
                    src={item.img}
                    alt="Blogs images"
                    width={393}
                    height={393}
                  />
                </OurBlogsImage>
                <p>{item.text}</p>
                <ButtonWrapper>
                  <button>Read More</button>
                  <span></span>
                </ButtonWrapper>
                <BlogCardTime>
                  <small>
                    <AiIcons.AiOutlineClockCircle />5 min
                  </small>
                  <small>
                    <AiIcons.AiOutlineCalendar />
                    12th Oct 2022
                  </small>
                </BlogCardTime>
              </BlogCardsItems>
            ))}
          </BlogCards>
          <button>View All Posts</button>
        </OurBlogsSection>
      </section>
      <section>
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
                <TopPicksDataItemFigcaption>
                  {item.fig}
                </TopPicksDataItemFigcaption>
                <TopPicksDataItemValue>
                  R$ {`${Number(item.value).toLocaleString("pt")},00`}
                </TopPicksDataItemValue>
              </TopPicksDataWrapper>
            ))}
          </TopPicksWrapper>
          <div>
            <TopPickButton type="submit">View More</TopPickButton>
            <TopPickSpan></TopPickSpan>
          </div>
        </TopPicksSection>
      </section>
      <section>
        <InstagramDiv>
          <h2>Our Instagram</h2>
          <p>Follow our store on Instagram</p>
          <button>Follow Us</button>
        </InstagramDiv>
      </section>
    </section>
  );
}
