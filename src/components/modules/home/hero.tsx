"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Discover & Order <br />
            <span className="text-orange-500">Delicious Meals</span> 🍱
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            Explore menus from trusted local food providers, order your favorite
            meals, and enjoy fast, reliable delivery at your doorstep.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link href="/meals" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto"
              >
                Browse Meals
              </Button>
            </Link>

            <Link href="/register" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
              >
                Become a Provider
              </Button>
            </Link>
          </div>

          {/* TRUST BADGES */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center md:justify-start items-center gap-3 sm:gap-6 text-sm text-gray-500">
            <div>✔ Trusted Providers</div>
            <div>✔ Cash on Delivery</div>
            <div>✔ Easy Ordering</div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center md:justify-end">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Delicious food"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-3xl shadow-xl"
          />

          {/* Decorative circle */}
          <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-28 h-28 sm:w-40 sm:h-40 bg-orange-200 rounded-full blur-3xl" />
        </div>

      </div>
    </section>
  );
}