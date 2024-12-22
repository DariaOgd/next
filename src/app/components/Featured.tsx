'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Featured() {
  const [products, setProducts] = useState([]);

  // Load products from public directory
  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="featured">
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-green-900 text-center">
            Featured Products
          </h2>
          <motion.div
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
            }}
          >
            {products.slice(0, 3).map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg shadow hover:shadow-lg hover:scale-105 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link href={`/products/${product.id}`}>
                  <div className="cursor-pointer">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="rounded-t-lg object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-green-900">{product.name}</h3>
                      <p className="text-green-700 font-semibold mt-2">
                        ${product.price.toFixed(2)}
                      </p>
                      <motion.p
                        whileHover={{ scale: 1.1 }}
                        className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                      >
                        View Product
                      </motion.p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
