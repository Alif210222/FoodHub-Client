"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Discover & Order <br />
            <span className="text-orange-500">Delicious Meals</span> 🍱
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Explore menus from trusted local food providers, order your favorite
            meals, and enjoy fast, reliable delivery at your doorstep.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/meals">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Browse Meals
              </Button>
            </Link>

            <Link href="/register">
              <Button size="lg" variant="outline">
                Become a Provider
              </Button>
            </Link>
          </div>

          {/* TRUST BADGES */}
          <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
            <div>✔ Trusted Providers</div>
            <div>✔ Cash on Delivery</div>
            <div>✔ Easy Ordering</div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Delicious food"
            className="w-full max-w-md mx-auto rounded-3xl shadow-xl"
          />

          {/* Decorative circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl" />
        </div>

      </div>
    </section>
  );
}