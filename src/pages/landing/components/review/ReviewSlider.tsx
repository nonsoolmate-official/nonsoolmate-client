import { USER_REVIEW } from "@pages/landing/constants/review";
import Slider from "react-slick";
import styled from "styled-components";
import ReviewCard from "./reviewCard/ReviewCard";

export default function ReviewSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    centerMode: true,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {USER_REVIEW.map((user, index) => (
          <SlideWrapper key={index}>
            <ReviewCard gender={user.gender} univ={user.univ} category={user.category} content={user.content} />
          </SlideWrapper>
        ))}
      </Slider>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  width: 100%;
  padding: 2rem 0;

  .slick-list {
    width: 174rem;
  }

  .slick-slide {
    margin-right: 2.6rem;
  }
`;

const SlideWrapper = styled.div`
  overflow: hidden;
`;
