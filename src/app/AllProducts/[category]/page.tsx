import { notFound } from 'next/navigation';
import products from '../../../../public/data/products.json';

const CategoryPage = ({ params }: { params: { category: string } }) => {
    const { category } = params;

    // Filtruj produkty na podstawie kategorii
    const filteredProducts = products.filter(product => product.category === category);

    if (filteredProducts.length === 0) {
        notFound();
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Products in "{category}"</h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {filteredProducts.map(product => (
                    <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '200px', textAlign: 'center' }}>
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }}
                        />
                        <h3 style={{ margin: '10px 0' }}>{product.name}</h3>
                        <p style={{ fontWeight: 'bold' }}>${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
