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
              className="card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link href={`/products/${product.id}`}>
                <div className="cursor-pointer justify-center">
                  <div className="flex justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="card-img"
                    />
                  </div>
                  <div className="p-4 flex flex-col sm:flex-row justify-between gap-4">
                    <div className="flex flex-col items-center sm:items-start">
                      <h3 className="text-lg font-bold text-green-900">{product.name}</h3>
                      <p className="text-green-700 font-semibold mt-2">${product.price.toFixed(2)}</p>
                    </div>
          
                    <motion.p
                      whileHover={{ scale: 1.1 }}
                      className="inline-flex items-center justify-center bg-green-600 text-white rounded hover:bg-green-700 max-h-12 mx-1 px-3"
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
