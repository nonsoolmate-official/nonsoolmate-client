import styled from "styled-components";
import Subscribe from "./subscribe/Subscribe";
import { columnFlex, commonFlex } from "style/commonStyle";
import Advantage from "./advantage/Advantage";
import { media } from "style/responsiveStyle";
import useGetProductsList from "../hooks/useGetProductsList";

export default function Contents() {
  const response = useGetProductsList();
  if (!response || !Array.isArray(response.data)) {
    return <></>;
  }
  const planInfo = response.data;
  return (
    <Container>
      <SubscribeWrapper>
        {planInfo?.map(({ productId, productName, productDescriptions, price, defaultDiscounts }) => {
          return (
            <Subscribe
              key={productId}
              productId={productId}
              productDescriptions={productDescriptions}
              productName={productName}
              price={price}
              defaultDiscounts={defaultDiscounts}
            />
          );
        })}
      </SubscribeWrapper>
      <Ipad>
        <AdvantageContainer>
          <Advantage />
        </AdvantageContainer>
      </Ipad>
    </Container>
  );
}

const Container = styled.section`
  ${commonFlex}

  gap: 2.4rem;
  margin-top: 8.1rem;
  margin-bottom: 8.4rem;

  ${media.tablet} {
    flex-direction: column;
    margin-top: 5.6rem;
    margin-bottom: 0;
  }
`;

const SubscribeWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
`;

const Ipad = styled.div`
  ${media.tablet} {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 8.4rem;
  }
`;

const AdvantageContainer = styled.article`
  ${columnFlex}

  gap: 3rem;
  align-items: flex-start;

  ${media.tablet} {
    gap: 9.6rem;
    align-items: center;
    width: 100%;
  }
`;
