'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import next/image
import products from '../../../public/data/products.json';
import Navigation from '../components/Navigation';

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Pobierz unikalne kategorie i dodaj opcję "Show All"
  const categories = ["Show All", ...new Set(products.map(product => product.category))];

  // Filtruj produkty według wybranej kategorii
  const filteredProducts =
    selectedCategory && selectedCategory !== "Show All"
      ? products.filter(product => product.category === selectedCategory)
      : products;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navigation />

      <div className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-green-900 mb-8 text-center">
          All Products
        </h1>

        {/* Lista przycisków kategorii */}
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === "Show All" ? null : category)}
              className={`px-4 py-2 rounded-lg shadow-lg ${
                selectedCategory === category || (category === "Show All" && selectedCategory === null)
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-green-900 border border-green-600'
              } hover:bg-green-700 hover:text-white transition duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Wyświetlanie produktów */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div className="bg-white rounded-lg shadow hover:shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="rounded-t-lg object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-green-900">{product.name}</h3>
                  <p className="text-green-700 font-semibold mt-2">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
