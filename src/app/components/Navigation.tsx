export default function Navigation() {
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
  
          {/* Right Section */}
          <div className="flex space-x-4 right">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/Cart" className="hover:underline">Cart</a></li>
          </div>
        </ul>
      </nav>
    );
  }
  