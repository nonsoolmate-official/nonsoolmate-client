import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import uni1 from "@assets/image/uni1.png";
import uni2 from "@assets/image/uni2.png";
import uni3 from "@assets/image/uni3.png";
import uni4 from "@assets/image/uni4.png";
import uni5 from "@assets/image/uni5.png";
import uni6 from "@assets/image/uni6.png";
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
        <Image src={uni1} alt="대학교 1" />
        <Image src={uni2} alt="대학교 2" />
        <Image src={uni3} alt="대학교 3" />
        <Image src={uni4} alt="대학교 4" />
        <Image src={uni5} alt="대학교 5" />
        <Image src={uni6} alt="대학교 6" />
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
