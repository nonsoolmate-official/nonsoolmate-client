import { DiscountHistoryItem } from "../types/discountHistoryType";
import { Plan } from "../types/paymentInfoType";

export function calculateStandardDiscount(plan: Plan) {
  let currentPrice = plan?.price || 0;

  const discountHistory: DiscountHistoryItem[] = [];

  if (plan?.defaultDiscount) {
    plan.defaultDiscount.forEach((item) => {
      const beforeDiscountPrice = currentPrice;

      currentPrice *= (100 - item.rate) / 100;

      discountHistory.push({
        discount_id: item.id,
        discount_title: item.title,
        beforeDiscount_price: beforeDiscountPrice,
        discounted_price: currentPrice,
        discount_rate: item.rate,
      });
    });
  }

  return discountHistory;
}
