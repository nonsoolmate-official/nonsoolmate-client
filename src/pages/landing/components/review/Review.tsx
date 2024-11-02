import GuideLayout from "../common/GuideLayout";
import ReviewSlider from "./ReviewSlider";

export default function Review() {
  return (
    <>
      <GuideLayout
        icType="review"
        badge="이용후기"
        mainTitle="학생 만족도 100%의 기적"
        subTitle="수많은 합격생의 목소리로 만들었으니까
        학생들에게 무엇이 가장 중요한지 누구보다 잘 알아요"
      />

      <ReviewSlider />
    </>
  );
}
