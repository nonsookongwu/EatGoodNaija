import {
  FoodSlide,
  RightCarouselIcon,
  SlideTextholder1,
  SlideTextholder2,
  SlideTextholder3,
  SliderLabelText,
  SliderSmallText,
} from "./OurMenuSection.styles";

interface Props {
  foodLabel: string;
  foodPrice: string;
  img: string;
  weight: string;
}

const FoodBox = ({foodLabel,foodPrice, img, weight}:Props) => {
  return (
    <FoodSlide imgUrl={img}>
      
        <SlideTextholder1>
          <SliderLabelText>{foodLabel}</SliderLabelText>
          <SlideTextholder2>
            <SliderLabelText>{foodPrice}</SliderLabelText>
            <SliderSmallText>/{weight}</SliderSmallText>
          </SlideTextholder2>
        </SlideTextholder1>
        <SlideTextholder3>
          <SliderSmallText>Order Now</SliderSmallText>
          <RightCarouselIcon />
        </SlideTextholder3>
     
    </FoodSlide>
  );
}

export default FoodBox