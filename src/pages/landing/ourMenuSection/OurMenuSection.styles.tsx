import styled from "styled-components";
import { color } from "../../../theme/color";
import { fonts } from "../../../theme/fonts";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export const OurMenuContainer = styled.div`
  /* border: 2px solid red; */
  width: 100%;
  height: 861px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 80px 0;
  box-sizing: border-box;

  @media screen and (max-width: 2560px) {
    height: 936px;
  }

  @media screen and (max-width: 1440px) {
    /* height: 736px; */
    height: 700px;
    padding: 30px 0;
  }

  @media screen and (max-width: 1024px) {
    height: 736px;
  }

  @media screen and (max-width: 768px) {
    height: 600px;
  }

  @media screen and (max-width: 430px) {
    padding: 20px 0;
  }

  @media screen and (max-width: 375px) {
    padding: 20px 0;
  }
  @media screen and (max-width: 320px) {
    padding: 20px 0;
  }
`;

export const TopContainer = styled.div`
  /* border: 2px solid blue; */
  /* width: 594px; */
  width: 100%;
  height: 10.43%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 32px; */

  @media screen and (max-width: 1440px) {
    height: 8.43%;
    /* height: 346px; */
  }

  @media screen and (max-width: 1024px) {
    height: 8.92%;
  }

  @media screen and (max-width: 768px) {
    /* width: 100%;
    justify-content: center;
    align-items: flex-start;
    gap: 15px; */
    /* display: none; */
    /* flex-direction: column; */
  }

  @media screen and (max-width: 430px) {
  }

  @media screen and (max-width: 375px) {
    height: 6.92%;
  }
`;

export const CarouselButtonHolder = styled.div`
  /* border: 2px solid green; */
  height: 100%;
  width: 164px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  @media screen and (max-width: 430px) {
    justify-content: space-around;
    width: 124px;
  }

  @media screen and (max-width: 375px) {
    width: 104px;
  }
`;

export const CarouselButtons = styled.button`
  background-color: ${color.primary.bleuDeFrance};
  /* width: 367px; */
  width: 64px;
  height: 64px;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1440px) {
    width: 32%;
    height: 100%;
  }

  @media screen and (max-width: 1024px) {
    width: 33%;
    height: 100%;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 768px) {
    width: 27%;
    /* height: 276px; */
    background-position: center;
  }

  @media screen and (max-width: 430px) {
    width: 40%;
  }

  @media screen and (max-width: 375px) {
    width: 38%;
  }
  @media screen and (max-width: 320px) {
    width: 37%;
  }
`;

export const LeftCarouselIcon = styled(MdOutlineKeyboardArrowLeft)`
  color: ${color.white.white};
  font-size: 30px;
`;

export const RightCarouselIcon = styled(MdOutlineKeyboardArrowRight)`
  color: ${color.white.white};
  font-size: 30px;
`;

export const BottomContainer = styled.div`
  /* border: 2px solid green; */
  width: 100%;
  height: 80.5%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;

  @media screen and (max-width: 1440px) {
    width: 100%;
    height: 85.5%;
    /* box-sizing: border-box; */
  }
  @media screen and (max-width: 1024px) {
    /* width: 78.48%;
    height: 54.19%; */
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 430px) {
    width: 100%;
    /* height: 74.19%; */
  }

  @media screen and (max-width: 375px) {
    /* width: 55.48%;
    height: 74.19%; */
  }
  @media screen and (max-width: 320px) {
    /* width: 65.48%;
    height: 74.19%; */
  }
`;

export const DishListContainer = styled.div`
  /* border: 2px solid blue; */
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 5px;

  @media screen and (max-width: 1440px) {
    padding-top: 20px;
    justify-content: center;
    gap: 25px;
  }

  // @media screen and (max-width: 1024px) {

  // }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    height: 20%;
    align-items: center;
    padding: 0 5px 0 5px;
  }

  @media screen and (max-width: 430px) {
    gap: 0;
  }

  // @media screen and (max-width: 375px) {
  // }
`;
export const SliderContainer = styled.div`
  /* border: 2px solid red; */
  width: 70%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  overflow: scroll;
  padding: 40px 40px 40px 600px;
  /* box-sizing: border-box; */

  @media screen and (max-width: 1440px) {
    padding: 40px 40px 40px 800px;
  }

  @media screen and (max-width: 1024px) {
    width: 70%;
    padding: 20px 20px 20px 620px;
    box-sizing: border-box;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 430px) {
    width: 100%;
    padding: 20px 20px 20px 55px;
    box-sizing: border-box;
  }

  @media screen and (max-width: 375px) {
    padding: 20px 20px 20px 110px;
  }
  @media screen and (max-width: 320px) {
    padding: 20px 20px 20px 150px;
  }
`;
// export const InnerSliderContainer = styled.div`
//   border: 2px solid green;
//   width: 100%;
//   height: 100%;

//   @media screen and (max-width: 1440px) {
//   }

//   // @media screen and (max-width: 1024px) {

//   // }

//   // @media screen and (max-width: 768px) {

//   // }

//   // @media screen and (max-width: 430px) {
//   // }

//   // @media screen and (max-width: 375px) {
//   // }
// `;

interface DishListProps {
  $active: boolean;
}
export const DishListItem = styled.div<DishListProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  background-color: ${(props) =>
    props.$active ? `${color.primary.bleuDeFrance}` : "none"};
  height: 89px;
  width: auto;
  padding-left: 20px;
  padding-right: 30px;
  box-sizing: border-box;
  border-radius: 50px;
  cursor: pointer;

  @media screen and (max-width: 1440px) {
    height: 59px;
  }

  // @media screen and (max-width: 1024px) {

  // }

  @media screen and (max-width: 768px) {
    gap: 15px;
  }

  @media screen and (max-width: 430px) {
    flex-direction: column;
    gap: 5px;
    height: 80px;
    border-radius: 10px;
    padding: 0 10px 0 10px;
  }

  // @media screen and (max-width: 375px) {
  // }
`;

export const FoodListIcons = styled.img`
  width: 40px;
  height: 40px;

  @media screen and (max-width: 1024px) {
    width: 30px;
    height: 30px;
  }

  // @media screen and (max-width: 768px) {

  // }

  // @media screen and (max-width: 430px) {
  // }

  // @media screen and (max-width: 375px) {
  // }
`;

interface FoodSlideProps {
  $imgUrl: string;
}

export const FoodSlide = styled.div<FoodSlideProps>`
  /* border: 2px solid indigo; */
  min-width: 536px;
  height: 100%;
  border-radius: 30px;
  background-image: url(${(props) => props.$imgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding-left: 40px;
  padding-bottom: 10px;

  @media screen and (max-width: 1440px) {
    min-width: 400px;
  }

  @media screen and (max-width: 1024px) {
    min-width: 300px;
    padding-left: 20px;
    padding-bottom: 15px;
  }

  // @media screen and (max-width: 768px) {

  // }

  @media screen and (max-width: 430px) {
    min-width: 200px;
  }

  // @media screen and (max-width: 375px) {
  // }
`;

// export const Overlay = styled.div`
//   min-width: 436px;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
// `;

export const SlideTextholder1 = styled.div`
  /* border: 2px solid indigo; */
  width: 282px;
  height: 81px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 10px 0 10px;

  @media screen and (max-width: 1440px) {
    width: 200px;
    height: 61px;
    /* justify-content: space-between; */
    padding: 5px 5px 0 5px;
  }

  // @media screen and (max-width: 1024px) {

  // }

  // @media screen and (max-width: 768px) {

  // }

  @media screen and (max-width: 430px) {
    width: 150px;
    height: 61px;
  }

  // @media screen and (max-width: 375px) {
  // }
`;
export const SlideTextholder2 = styled.div`
  /* border: 2px solid indigo; */
  width: 272px;
  height: 41px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  @media screen and (max-width: 430px) {
    width: 150px;
    height: 31px;
    align-items: flex-end;
  }

  // @media screen and (max-width: 375px) {
  // }
`;
export const SlideTextholder3 = styled.div`
  /* border: 2px solid indigo; */
  width: 282px;
  height: 61px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  @media screen and (max-width: 1440px) {
    width: 200px;
    height: 41px;
  }

  @media screen and (max-width: 1024px) {
  }

  // @media screen and (max-width: 768px) {

  // }

  @media screen and (max-width: 430px) {
    width: 150px;
    height: 31px;
    padding-left: 5px;
  }

  // @media screen and (max-width: 375px) {
  // }
`;

export const TitleText = styled.span`
  /* display: inline; */
  font-family: ${fonts.fontFamily.rubik};
  font-size: ${fonts.fontSize.display2};
  font-weight: ${fonts.fontWeight.bold};
  line-height: ${fonts.lineHeight.heading1};
  letter-spacing: ${fonts.letterSpacing.heading};
  color: ${color.black.richBlack};
  /* border-bottom: 2px solid green; */
  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.heading3};
    line-height: ${fonts.lineHeight.heading3};
  }

  @media screen and (max-width: 1024px) {
    font-size: ${fonts.fontSize.heading1};
    line-height: ${fonts.lineHeight.heading1};
  }

  @media screen and (max-width: 768px) {
    font-size: ${fonts.fontSize.heading2};
    line-height: ${fonts.lineHeight.heading1};
  }

  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.heading3};
    line-height: ${fonts.lineHeight.heading1};
  }

  @media screen and (max-width: 375px) {
    font-size: ${fonts.fontSize.heading3};
    line-height: ${fonts.lineHeight.heading2};
  }
  @media screen and (max-width: 320px) {
    font-size: ${fonts.fontSize.heading3};
    line-height: ${fonts.lineHeight.heading2};
  }
`;

export const Menutext = styled.span<DishListProps>`
  font-size: ${fonts.fontSize.heading1};
  font-weight: ${fonts.fontWeight.medium};
  line-height: ${fonts.lineHeight.body3};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${(props) =>
    props.$active ? `${color.white.white}` : `${color.black.richBlack}`};

  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.body1};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 1024px) {
    font-size: ${fonts.fontSize.body1};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 768px) {
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.footer1};
  }

  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.footer2};
    line-height: ${fonts.lineHeight.footer2};
    text-align: center;
  }

  @media screen and (max-width: 375px) {
    font-size: ${fonts.fontSize.footer2};
    line-height: ${fonts.lineHeight.footer2};
  }
  @media screen and (max-width: 320px) {
    font-size: ${fonts.fontSize.footer2};
    line-height: ${fonts.lineHeight.footer2};
  }
`;

export const SliderLabelText = styled.span`
  font-size: ${fonts.fontSize.heading3};
  font-weight: ${fonts.fontWeight.medium};
  line-height: ${fonts.lineHeight.body3};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.white.white};

  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.body1};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 1024px) {
    /* width: 100%; */
    font-size: ${fonts.fontSize.body2};
    line-height: ${fonts.lineHeight.body3};
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    /* width: 55%; */
    font-size: ${fonts.fontSize.body2};
    line-height: ${fonts.lineHeight.body3};
    text-align: center;
  }

  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 375px) {
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }
`;
export const SliderSmallText = styled.span`
  font-size: ${fonts.fontSize.body1};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.body3};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.black.darkCharcoal};
  color: ${color.white.white};
  /* width: 80%;
  height: 60px; */
  /* border: 2px solid blue; */

  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.body4};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 1024px) {
    /* width: 100%; */
    font-size: ${fonts.fontSize.body4};
    line-height: ${fonts.lineHeight.body3};
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    /* width: 55%; */
    font-size: ${fonts.fontSize.body4};
    line-height: ${fonts.lineHeight.body3};
    text-align: center;
  }

  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.footer1};
    line-height: ${fonts.lineHeight.footer1};
  }

  @media screen and (max-width: 375px) {
    font-size: ${fonts.fontSize.footer1};
    line-height: ${fonts.lineHeight.footer1};
  }
`;

// @media screen and (max-width: 1440px) {

//   }

// @media screen and (max-width: 1024px) {

// }

// @media screen and (max-width: 768px) {

// }

// @media screen and (max-width: 430px) {
// }

// @media screen and (max-width: 375px) {
// }
