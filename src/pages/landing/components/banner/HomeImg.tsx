import HomeTestSet from "@assets/image/homeTestSet.png";
import HomeTestSetTablet from "@assets/image/HomeTestSetTablet.png";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function HomeImg() {
  const [imageSrc, setImageSrc] = useState(HomeTestSet);

  useEffect(() => {
    const updateImageSrc = () => {
      const width = window.innerWidth;

      if (width <= 1024) {
        setImageSrc(HomeTestSetTablet);
      } else {
        setImageSrc(HomeTestSet);
      }
    };

    updateImageSrc();

    window.addEventListener("resize", updateImageSrc);

    return () => window.removeEventListener("resize", updateImageSrc);
  }, []);

  return <Image src={imageSrc} alt="메인홈사진" />;
}

const Image = styled.img`
  width: 100%;
  height: calc(100vh - 6.6rem);
  padding: 0;
  object-fit: cover;
`;
