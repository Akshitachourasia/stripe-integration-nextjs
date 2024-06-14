import { useShoppingCart } from 'use-shopping-cart';

interface CheckoutUtils {
  handleCheckoutSingleItem: (priceId: string) => Promise<any>;
  handleCheckoutClick: () => Promise<void>;
}

export function useCheckoutSingleItem(): CheckoutUtils {
  const { checkoutSingleItem } = useShoppingCart();

  const handleCheckoutSingleItem = async (priceId: string): Promise<any> => {
    return await checkoutSingleItem(priceId);
  };

  const handleCheckoutClick = async (): Promise<void> => {
    try {
      const result = await checkoutSingleItem('price_1N7hJbL9tXeDpZDhXpJbL9t'); // Example price_id
      if (result) {
        console.log('Checkout successful');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    
    }
  };

  return {
    handleCheckoutSingleItem,
    handleCheckoutClick,
  };
}
