import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white">
            FoodHub 🍔
          </h3>
          <p className="text-sm">
            Order delicious meals from trusted restaurants.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/meals">Meals</Link></li>
            <li><Link href="/providers">Restaurants</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-white mb-3">
            Support
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-white mb-3">
            Newsletter
          </h4>
          <p className="text-sm mb-3">
            Get food deals and updates.
          </p>
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-md px-3 py-2 text-black"
          />
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} FoodHub. All rights reserved.
      </div>
    </footer>
  )
}