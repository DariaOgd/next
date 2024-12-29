'use client';

import { useCart } from '@/app/context/cartContext';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CheckoutPage() {
  const { cart } = useCart(); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  });

  const shippingFee = 5; 

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const total = subtotal + shippingFee; 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', {
      products: cart,
      subtotal,
      shippingFee,
      total,
      customerDetails: formData,
    });
    alert('Order submitted successfully!');
   
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-lg text-gray-600">Your cart is empty. Add some products first!</p>
      </div>
    );
  }

  return (
    <div className="">
      <Navigation />
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-green-900 mb-8 text-center">Checkout</h1>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Order Summary</h2>
            <ul className="divide-y divide-gray-200">
              {cart.map((item) => (
                <li key={item.id} className="py-4 flex justify-between">
                  <span className="text-lg text-green-900">{item.name}</span>
                  <span className="text-lg text-green-700">${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between text-lg">
              <span>Subtotal:</span>
              <span className="text-green-800">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Shipping:</span>
              <span className="text-green-800">${shippingFee.toFixed(2)}</span>
            </div>
            <div className="mt-4 flex justify-between font-bold text-xl">
              <span>Total:</span>
              <span className="text-green-900">${total.toFixed(2)}</span>
            </div>
          </div>

 
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Customer Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition text-lg font-medium"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
