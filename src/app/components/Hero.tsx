export default function Hero() {
    return (
      <section
        className="relative bg-cover bg-center h-screen flex items-center"
        style={{ backgroundImage: "url('matcha-main.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-green-700/40"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Experience the Art of Matcha
            </h1>
            <p className="mt-4 text-lg text-white/90 drop-shadow-md">
              Discover organic, ceremonial-grade matcha crafted for every occasion.
            </p>
            <div className="mt-6">
              <a
                href="/AllProducts"
                className="px-6 py-3 bg-green-600 text-white font-medium text-lg rounded-md shadow-lg hover:bg-green-700  active:bg-green-500 transition-all"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  