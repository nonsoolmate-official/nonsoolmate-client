import styled from "styled-components";
import Subscribe from "./subscribe/Subscribe";
import Advantage from "./advantage/Advantage";
import { media } from "style/responsiveStyle";
import useGetProductsList from "../hooks/useGetProductsList";
import { calculateStandardDiscount } from "@pages/payment/utils/calculateStandardDiscount";

export default function Contents() {
  const response = useGetProductsList();
  if (!response || !Array.isArray(response.data)) {
    return <></>;
  }
  const planInfo = response.data;
  return (
    <ContentsContainer>
      <Container>
        {planInfo?.map(({ productId, productName, productDescriptions, price, defaultDiscounts }) => {
          const discountHistory = calculateStandardDiscount({
            productId,
            productName,
            productDescriptions,
            price,
            defaultDiscounts,
          });
          return (
            <Subscribe
              key={productId}
              productId={productId}
              productDescriptions={productDescriptions}
              productName={productName}
              price={price}
              defaultDiscounts={defaultDiscounts}
              discountHistory={discountHistory}
              plan={planInfo}
            />
          );
        })}
        <Advantage />
      </Container>
    </ContentsContainer>
  );
}

const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 2rem;
`;

const Container = styled.section`
  display: grid;
  gap: 2.4rem;
  margin: 5.6rem 8.4rem 8.4rem;
  grid-template-columns: repeat(4, 1fr);

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2.4rem;
    margin: 5.6rem 7.5rem 8.4rem;
  }

  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
