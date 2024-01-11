import Title from "./Title";
import Icons from "./Icons";
import Price from "./Price";
import PurchaseButton from "./PurchaseButton";
import Sales from "./sales/Sales";
import Summary from "./Summary";
import { ContentListType } from "membership/types/contentlisttpye";

interface ContentsProps extends ContentListType {}

export default function Subscribe(props: ContentsProps) {
  const { id, title, summary, sales, price } = props;
  return (
    <>
      <Icons id={id} />
      <Title title={title} />
      <Summary summary={summary} />
      <Sales sales={sales} />
      <Price price={price} />
      <PurchaseButton />
    </>
  );
}
