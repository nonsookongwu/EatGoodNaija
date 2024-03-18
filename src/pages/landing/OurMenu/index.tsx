import { ScrollButton, StyledOurMenu } from "./ourMenu.styles"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { StyledFlex } from "../../../components/styles";
import { menuData, slideData } from "./data";
import { useEffect, useState } from "react";
import styles from './authcarousel.module.scss'
import classNames from "classnames";

const OurMenu = () => {
    const [activeMenu, setActiveMenu] = useState(1)
    const [activeButton, setActiveButton] = useState(1)

    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        // let slideInterval = 5
        // slideInterval = setInterval(() => {
        //     setCurrentSlide(
        //         currentSlide === slideData.length - 1 ? 0 : currentSlide + 1
        //     )
        // }, 5000)
        // return () => clearInterval(slideInterval)
    }, [currentSlide])

    return (
        <StyledOurMenu>
            <StyledFlex>
                <h2>Our Menu</h2>
                <StyledFlex>
                    <ScrollButton style={{ background: `${activeButton === 0 ? '#2F80ED' : ''}`, color: `${activeButton === 0 ? '#fff' : '#000'}` }} onClick={() => {
                        setCurrentSlide(
                            currentSlide === 0 ? slideData.length - 1 : currentSlide - 1
                        );
                        setActiveButton(0);
                    }}>
                        <IoIosArrowBack />
                    </ScrollButton>
                    <ScrollButton style={{ background: `${activeButton === 1 ? '#2F80ED' : ''}`, color: `${activeButton === 1 ? '#fff' : '#000'}` }} onClick={() => {
                        setCurrentSlide(
                            currentSlide === slideData.length - 1 ? 0 : currentSlide + 1
                        );
                        setActiveButton(1);

                    }}>
                        <IoIosArrowForward />
                    </ScrollButton>

                </StyledFlex>
            </StyledFlex>
            <div>
                {menuData.map((menu, index) => {
                    return (
                        <section key={index}
                            onClick={() => setActiveMenu(index)}
                            style={{ background: `${index == activeMenu ? '#2f80ed' : ''}`, color: `${index == activeMenu ? '#fff' : ''}` }}>
                            <img src={menu.image} alt={menu.image} />
                            <p>{menu.menu}</p>
                        </section>
                    )
                })}
            </div>
            <div className={styles.carousel}>
                <div
                    className={styles.carouselImages}
                >
                    {slideData.map(({ img, id }, idx) => (
                        <img
                            key={id}
                            src={img}
                            alt={`slide image ${idx + 1}`}
                            className={classNames(styles.carouselImagesImage, {
                                [styles.carouselImagesActive]: currentSlide === idx,
                            })}
                        />
                    ))}

                    <div
                        className={styles.carouselDescription}
                    >
                        <p>
                            {slideData[currentSlide].type}

                        </p>
                        <p>
                            {slideData[currentSlide].price} <sub style={{ fontSize: '15px', }}>/ {slideData[currentSlide].quantity}
                            </sub>
                        </p>
                        <StyledFlex style={{
                            justifyContent: 'left', fontSize: '15px',
                        }}>
                            <p>Order Now</p>
                            <IoIosArrowForward />
                        </StyledFlex>
                    </div>
                </div>
            </div>


        </StyledOurMenu >
    )
}

export default OurMenu