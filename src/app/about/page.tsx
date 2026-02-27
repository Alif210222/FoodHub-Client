export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800">

      {/* 1️⃣ Hero Section */}
      <section className="bg-orange-500 text-white py-20 mt-10 rounded-2xl">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About FoodHub 🍱
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover, order, and enjoy delicious meals from your favorite local food providers.
          </p>
        </div>
      </section>

      {/* 2️⃣ Who We Are */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            FoodHub is a modern food ordering platform that connects hungry customers
            with trusted local restaurants and food providers. Our goal is to make
            food discovery simple, ordering seamless, and delivery tracking transparent.
          </p>
        </div>
      </section>

      {/* 3️⃣ Our Mission */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to empower local food providers while delivering
            a smooth and reliable ordering experience for customers.
            We believe great food deserves a great platform.
          </p>
        </div>
      </section>

      {/* 4️⃣ What We Offer */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">🍽️ Wide Meal Selection</h3>
              <p className="text-gray-600">
                Explore meals from multiple cuisines, dietary preferences,
                and price ranges.
              </p>
            </div>

            <div className="p-6 border rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">⚡ Easy Ordering</h3>
              <p className="text-gray-600">
                Add meals to your cart, checkout quickly, and track your order
                in real time.
              </p>
            </div>

            <div className="p-6 border rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">🤝 Provider Support</h3>
              <p className="text-gray-600">
                We help food providers manage menus, orders, and grow their business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ How FoodHub Works */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">
            How FoodHub Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">🔍</div>
              <h4 className="font-semibold">Browse</h4>
              <p className="text-gray-600 text-sm">
                Discover meals and providers
              </p>
            </div>

            <div>
              <div className="text-4xl mb-2">🛒</div>
              <h4 className="font-semibold">Add to Cart</h4>
              <p className="text-gray-600 text-sm">
                Choose meals you love
              </p>
            </div>

            <div>
              <div className="text-4xl mb-2">💳</div>
              <h4 className="font-semibold">Checkout</h4>
              <p className="text-gray-600 text-sm">
                Confirm address & order
              </p>
            </div>

            <div>
              <div className="text-4xl mb-2">🍴</div>
              <h4 className="font-semibold">Enjoy</h4>
              <p className="text-gray-600 text-sm">
                Get food delivered hot & fresh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Why Choose FoodHub */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose FoodHub?</h2>
          <p className="text-gray-600 leading-relaxed">
            We focus on quality, transparency, and simplicity.
            With real-time order tracking, trusted providers,
            and a user-friendly interface, FoodHub ensures
            a delightful food ordering experience every time.
          </p>
        </div>
      </section>

      {/* 7️⃣ Call To Action */}
      <section className="bg-orange-500 text-white py-16 rounded-2xl mb-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Order Delicious Food?
          </h2>
          <p className="mb-6">
            Join FoodHub today and enjoy meals from your favorite providers.
          </p>
          <a
            href="/meals"
            className="inline-block bg-white text-orange-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Browse Meals
          </a>
        </div>
      </section>

    </div>
  );
}