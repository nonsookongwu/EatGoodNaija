import { bestQuality, easyToOrder, fastDelivery } from "../../../assets";
import {
  ServiceBoxContainer,
  ServiceSectionContainer,
  SmallBoxImg,
  SmallBoxSubtitleText,
  SmallBoxTitletext,
  SmallBoxes,
  SmallTextHolder,
  TitleText,
} from "./WhatWeServe.style";

const OurServices = () => {

const smallBoxData = [
  {
    img: easyToOrder,
    heading: "Easy To Order",
    text: "You only need a few steps in ordering food",
  },
  {
    img: fastDelivery,
    heading: "Fastest Delivery",
    text: "Delivery that is always ontime even faster",
  },
  {
    img: bestQuality,
    heading: "Best Quality",
    text: "Not only fast for us quality is also number one",
  },
];

  return (
    <ServiceSectionContainer>
      <TitleText>What we serve</TitleText>
      <ServiceBoxContainer>
        {smallBoxData.map((item) => (
          <SmallBoxes key={item.img}>
            <SmallBoxImg src={ item.img} />
            <SmallTextHolder>
              <SmallBoxTitletext>{ item.heading}</SmallBoxTitletext>
              <SmallBoxSubtitleText>
                {item.text}
              </SmallBoxSubtitleText>
            </SmallTextHolder>
          </SmallBoxes>
        ))}
        {/* <SmallBoxes>

        </SmallBoxes> */}
      </ServiceBoxContainer>
    </ServiceSectionContainer>
  );
};

export default OurServices;
