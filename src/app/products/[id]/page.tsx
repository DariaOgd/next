import Image from 'next/image'; // Import next/image
import products from '../../../../public/data/products.json';
import { notFound } from 'next/navigation';
import Navigation from '@/app/components/Navigation';

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  try {
    // Pobierz ID produktu
    const { id } = await Promise.resolve(params);
    const productId = Number(id);

    if (isNaN(productId)) {
      console.warn(`Invalid product ID: ${id}`);
      notFound();
      return;
    }

    const product = products.find((p) => p.id === productId);

    if (!product) {
      console.warn(`Product not found for ID: ${productId}`);
      notFound();
      return;
    }

    return (
      <div className="bg-gray-50 min-h-screen">
        {/* Nawigacja */}
        <Navigation />

        {/* Sekcja produktu */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Obraz produktu */}
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width={600} // Ustal szerokość obrazu
                height={400} // Ustal wysokość obrazu
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </div>

            {/* Detale produktu */}
            <div>
              <h1 className="text-4xl font-bold text-green-900">{product.name}</h1>
              <p className="text-lg text-gray-700 mt-4">{product.desc}</p>

              <div className="mt-6">
                <p className="text-lg text-gray-600">
                  Category: <span className="font-semibold text-green-700">{product.category}</span>
                </p>
                <p className="text-lg text-gray-600 mt-2">
                  Subcategory: <span className="font-semibold text-green-700">{product.subcategory}</span>
                </p>
                <p className="text-2xl font-bold text-green-900 mt-6">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              {/* Przycisk dodania do koszyka */}
              <button className="mt-8 px-6 py-3 bg-green-600 text-white text-lg font-medium rounded-lg shadow hover:bg-green-700 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    notFound();
  }
}
