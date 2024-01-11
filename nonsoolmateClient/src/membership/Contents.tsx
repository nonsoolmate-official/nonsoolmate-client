import Subscribe from "./components/subscribe/Subscribe";
import { CONTENT_LIST } from "./core/contentlist";

export default function Contents() {
  return (
    <>
      {CONTENT_LIST.map((ele) => {
        const { id, title, summary, sales, price } = ele;
        return <Subscribe key={id} id={id} title={title} summary={summary} sales={sales} price={price} />;
      })}
    </>
  );
}
