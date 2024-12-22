'use client';

import { useCart } from '@/app/context/cartContext';
import Navigation from "@/app/components/Navigation";
import { useRouter } from 'next/navigation';
import { FaShoppingCart } from 'react-icons/fa';

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const router = useRouter(); 

  if (cart.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col">
        <Navigation />
        <div className="flex flex-col items-center justify-center px-6 py-12">
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-bold text-green-900 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-gray-600 mb-6">
              Add some delicious matcha products to your cart and come back here to review your order.
            </p>
            <a
              href="/AllProducts"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-300"
            >
              Browse Products
            </a>
          </div>
        </div>
      </div>
    );
  }

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleProceedToCheckout = () => {
    router.push('/Checkout');
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-green-900 text-center mb-12">
          Your Cart
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 mb-6"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover border border-green-200"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-bold text-green-800">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                    <p className="text-green-700 font-medium mt-2">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-green-800">Order Summary</h2>
            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Subtotal:</span>
                <span className="text-green-800 font-medium">
                  ${total.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Shipping:</span>
                <span className="text-green-800 font-medium">$5.00</span>
              </div>
              <div className="flex justify-between border-t pt-4 text-lg font-bold">
                <span>Total:</span>
                <span className="text-green-900">
                  ${(total + 5).toFixed(2)}
                </span>
              </div>
            </div>
            <button
              onClick={handleProceedToCheckout}
              className="mt-6 w-full py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300 text-lg font-medium"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
