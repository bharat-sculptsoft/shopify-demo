// src/services/shippingDiscount.js

export default function calculateShippingDiscount(input) {
    const STANDARD_SHIPPING_COST = 1398;
    const TWO_DAY_SHIPPING_COST = 4000;
    const OVERNIGHT_SHIPPING_COST = 6000;
    const DISCOUNT_PERCENTAGE = 50;
  
    const discounts = [];
  
    input.shippingMethods.forEach((shippingMethod) => {
      if (shippingMethod.name === 'Standard' && shippingMethod.cost === STANDARD_SHIPPING_COST) {
        const discountValue = (shippingMethod.cost * DISCOUNT_PERCENTAGE) / 100;
        discounts.push({
          shippingMethodHandle: shippingMethod.handle,
          discountValue: discountValue,
          message: 'Shipping Adjustment'
        });
      } else if (shippingMethod.name === '2 Day' && shippingMethod.cost === TWO_DAY_SHIPPING_COST) {
        const discountValue = (shippingMethod.cost * DISCOUNT_PERCENTAGE) / 100;
        discounts.push({
          shippingMethodHandle: shippingMethod.handle,
          discountValue: discountValue,
          message: '2 Day Shipping Adjustment'
        });
      } else if (shippingMethod.name === 'Overnight' && shippingMethod.cost === OVERNIGHT_SHIPPING_COST) {
        const discountValue = (shippingMethod.cost * DISCOUNT_PERCENTAGE) / 100;
        discounts.push({
          shippingMethodHandle: shippingMethod.handle,
          discountValue: discountValue,
          message: 'Overnight Shipping Adjustment'
        });
      }
    });
  
    return {
      discounts: discounts,
    };
  }
  