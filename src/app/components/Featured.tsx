import Image from 'next/image'; // Import next/image
import products from '../../../public/data/products.json';

export default function Featured() {
  return (
    <div className="featured">
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-green-900">Featured Products</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="border rounded-lg p-4">
                {/* Zastąp <img> komponentem <Image> */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300} // Wymagana szerokość obrazu
                  height={200} // Wymagana wysokość obrazu
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="mt-4 text-lg font-medium text-green-900">{product.name}</h3>
                <p className="text-green-700">${product.price.toFixed(2)}</p>
                <a
                  href={`/product/${product.id}`}
                  className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  View Product
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
