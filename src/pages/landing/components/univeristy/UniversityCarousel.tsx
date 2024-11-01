import uni1 from "@assets/image/uni1.png";
import uni2 from "@assets/image/uni2.png";
import uni3 from "@assets/image/uni3.png";
import uni4 from "@assets/image/uni4.png";
import uni5 from "@assets/image/uni5.png";
import uni6 from "@assets/image/uni6.png";
import uni7 from "@assets/image/uni7.png";
import uni8 from "@assets/image/uni8.png";
import uni9 from "@assets/image/uni9.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";

export default function UniversityCarousel() {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        <Image src={uni1} alt="한양대학교" />
        <Image src={uni2} alt="경희대학교" />
        <Image src={uni3} alt="성균관대학교" />
        <Image src={uni4} alt="이화여자대학교" />
        <Image src={uni5} alt="중앙대학교" />
        <Image src={uni6} alt="서강대학교" />
        <Image src={uni7} alt="세종대학교" />
        <Image src={uni8} alt="동국대학교" />
        <Image src={uni9} alt="한국외국어대학교" />
      </Slider>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  overflow: hidden;
  width: 100%;
  mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
