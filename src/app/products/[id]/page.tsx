'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '@/app/context/cartContext';
import Navigation from '@/app/components/Navigation';

interface Review {
  username: string;
  rating: number;
  comment: string;
}

interface Product {
  id: number;
  name: string;
  desc: string;
  category: string;
  subcategory: string;
  price: number;
  image: string;
}

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newRating, setNewRating] = useState(0); 
  const [hoverRating, setHoverRating] = useState(0);
  const [newComment, setNewComment] = useState(''); 
  const [newUsername, setNewUsername] = useState(''); 
  const [selectedWeight, setSelectedWeight] = useState('50'); 

  useEffect(() => {
    const resolveParams = async () => {
      const result = await params;
      setResolvedParams(result);
    };
    resolveParams();
  }, [params]);

  useEffect(() => {
    if (!resolvedParams?.id) return;

    const fetchProduct = async () => {
      const res = await fetch('/data/products.json');
      const products: Product[] = await res.json();
      const foundProduct = products.find((p) => p.id === parseInt(resolvedParams.id));
      setProduct(foundProduct || null);
    };

    const fetchReviews = async () => {
      const res = await fetch('/data/reviews.json');
      const data = await res.json();
      const productReviews = data.find((r: { productId: number }) => r.productId === parseInt(resolvedParams.id));
      setReviews(productReviews?.reviews || []);
    };

    fetchProduct();
    fetchReviews();
  }, [resolvedParams]);

  const handleAddToCart = () => {
    if (product) {
      const weightPriceMultiplier = {
        '50': 1,
        '100': 1.8,
        '150': 2.5,
      };

      const finalPrice = product.price * weightPriceMultiplier[selectedWeight];

      addToCart({
        id: product.id,
        name: `${product.name} - ${selectedWeight}g`,
        price: finalPrice,
        image: product.image,
        category: product.category,
      });
    }
  };

  const handleAddReview = () => {
    if (newRating > 0 && newComment.trim() !== '' && newUsername.trim() !== '') {
      setReviews((prev) => [
        ...prev,
        {
          username: newUsername,
          rating: newRating,
          comment: newComment,
        },
      ]);
      setNewRating(0);
      setNewComment('');
      setNewUsername('');
    }
  };

  if (!product) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-green-900">{product.name}</h1>
            <p className="text-lg text-gray-700 mt-4">{product.desc}</p>
            <p className="text-2xl font-bold text-green-900 mt-6">
              ${(product.price * parseFloat(selectedWeight) / 50).toFixed(2)} ({selectedWeight}g)
            </p>

            {(product.category === 'Matcha' || product.category === 'Hojicha') && (
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">Select Weight:</label>
                <select
                  value={selectedWeight}
                  onChange={(e) => setSelectedWeight(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                >
                  <option value="50">50g</option>
                  <option value="100">100g</option>
                  <option value="150">150g</option>
                </select>
              </div>
            )}

            <button
              onClick={handleAddToCart}
              className="mt-8 px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        </div>


        <div className="mt-12">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Reviews</h2>
          {reviews.length > 0 ? (
            <ul className="space-y-4">
              {reviews.map((review, index) => (
                <li key={index} className="p-4 bg-white shadow rounded-lg">
                  <p className="text-lg font-medium text-green-800">{review.username}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={i < review.rating ? 'text-yellow-500' : 'text-gray-300'}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 text-gray-700">{review.comment}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
          )}
        </div>

     
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Add Your Review</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
              placeholder="Enter your name..."
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Your Comment</label>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
              placeholder="Write your review..."
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Your Rating</label>
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setNewRating(i + 1)}
                  onMouseEnter={() => setHoverRating(i + 1)}
                  onMouseLeave={() => setHoverRating(0)}
                  className={`text-2xl ${
                    i < (hoverRating || newRating) ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                >
                  ★
                </motion.button>
              ))}
            </div>
          </div>
          <button
            onClick={handleAddReview}
            className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
}
