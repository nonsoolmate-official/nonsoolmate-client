import Title from "./Title";
import Icons from "./Icons";
import Price from "./Price";
import PurchaseButton from "./PurchaseButton";
import Sales from "./Sales";
import Summary from "./Summary";

export default function Contents() {
  return (
    <>
      <Icons />
      <Title />
      <Summary />
      <Sales />
      <Price />
      <PurchaseButton />
    </>
  );
}
