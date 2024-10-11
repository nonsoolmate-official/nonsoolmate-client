import { DiscountHistoryItem } from "../../../types/discountHistoryType";
import { Plan } from "types/productsListType";

export function calculateStandardDiscount(plan: Plan) {
  let currentPrice = plan?.price || 0;

  const discountHistory: DiscountHistoryItem[] = [];

  if (plan?.defaultDiscounts) {
    plan.defaultDiscounts.forEach((item) => {
      const beforeDiscountPrice = currentPrice;

      currentPrice *= 1 - item.discountRate;

      discountHistory.push({
        discountId: item.discountId,
        discountTitle: item.discountName,
        beforeDiscountPrice: beforeDiscountPrice,
        discountedPrice: currentPrice,
        discountRate: item.discountRate,
      });
    });
  }

  return discountHistory;
}
