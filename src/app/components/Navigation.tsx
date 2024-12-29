import { useCart } from '@/app/context/cartContext';
import { FaShoppingCart } from 'react-icons/fa'; 

export default function Navigation() {
  const { cart } = useCart(); 

  return (
    <nav className="bg-green-900 text-white p-4">
      <ul className="flex justify-between items-center">
 
        <div className="flex items-center space-x-8">
          <h3 className="text-2xl font-bold logo">M.</h3>
          <div className="flex space-x-4 left">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/AllProducts" className="hover:underline">Products</a></li>
          </div>
        </div>

        
        <div className="flex items-center space-x-4 right">
          <li className="relative">
            <a href="/Cart" className="flex items-center">
              <FaShoppingCart className="text-xl" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 translate-x-2 -translate-y-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
