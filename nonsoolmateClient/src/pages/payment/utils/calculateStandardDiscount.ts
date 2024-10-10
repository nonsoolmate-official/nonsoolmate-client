import { DiscountHistoryItem } from "../types/discountHistoryType";
import { Plan } from "@pages/membership/api/getProductsList";

export function calculateStandardDiscount(plan: Plan) {
  let currentPrice = plan?.price || 0;

  const discountHistory: DiscountHistoryItem[] = [];

  if (plan?.defaultDiscounts) {
    plan.defaultDiscounts.forEach((item) => {
      const beforeDiscountPrice = currentPrice;

      currentPrice *= 1 - item.discountRate;

      discountHistory.push({
        discount_id: item.discountId,
        discount_title: item.discountName,
        beforeDiscount_price: beforeDiscountPrice,
        discounted_price: currentPrice,
        discount_rate: item.discountRate,
      });
    });
  }

  return discountHistory;
}
