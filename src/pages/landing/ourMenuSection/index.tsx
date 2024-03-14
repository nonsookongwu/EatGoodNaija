import { useState } from "react";
import { meat, rawFood, riceDishes, soups } from "../../../assets";
import FoodBox from "./FoodBox";
import {
  BottomContainer,
  CarouselButtonHolder,
  CarouselButtons,
  DishListContainer,
  DishListItem,
  FoodListIcons,
  LeftCarouselIcon,
  Menutext,
  OurMenuContainer,
  RightCarouselIcon,
  SliderContainer,
  TitleText,
  TopContainer
} from "./OurMenuSection.styles";
import { FoodMenuData, foodMenuData } from "./foodMenuData";

const OurMenuSection = () => {
  const menuData = [
    { label: "Rice Dishes", img: riceDishes },
    { label: "Soups and Stews", img: soups },
    { label: "Grilled and Roasted Foods", img: meat },
    { label: "Raw Foods", img: rawFood },
  ];

  const [activeLink, setActiveLink] = useState<number>(0);

  const defaultData = foodMenuData.filter((food) => {
    return food.category === 0;
  });
  const [filteredFood, setfilteredFood] = useState<FoodMenuData[]>(defaultData);

  const handleActiveFood = (linkNumber: number) => {
    setActiveLink(linkNumber);
    console.log(linkNumber);
    // Add logic to handle navigation or other actions
    const data = [...foodMenuData];

    const filteredData = data.filter((food) => {
      return food.category === linkNumber;
    });

    setfilteredFood(filteredData);
  };

  return (
    <OurMenuContainer>
      <TopContainer>
        <TitleText>Our Menu</TitleText>
        <CarouselButtonHolder>
          <CarouselButtons>
            <LeftCarouselIcon />
          </CarouselButtons>
          <CarouselButtons>
            <RightCarouselIcon />
          </CarouselButtons>
        </CarouselButtonHolder>
      </TopContainer>
      <BottomContainer>
        <DishListContainer>
          {menuData.map((item, index) => (
            <DishListItem
              key={item.img}
              active={activeLink === index}
              onClick={() => handleActiveFood(index)}
            >
              <FoodListIcons src={item.img} />
              <Menutext
                active={activeLink === index}
                onClick={() => handleActiveFood(index)}
              >
                {item.label}
              </Menutext>
            </DishListItem>
          ))}
        </DishListContainer>
        <SliderContainer>
            {filteredFood.map((food) => (
              <FoodBox
                key={food.img}
                foodLabel={food.name}
                foodPrice={food.price}
                img={food.img}
                weight={food.weight}
              />
            ))}
        </SliderContainer>
      </BottomContainer>
    </OurMenuContainer>
  );
};

export default OurMenuSection;
