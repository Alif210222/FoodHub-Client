import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-zinc-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center">

        {/* Left */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Get in Touch
          </h2>

          <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto md:mx-0">
            Have questions or want to partner with us?
            Reach out anytime.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-center md:justify-start gap-3 text-sm sm:text-base">
              <Mail className="text-orange-500 w-5 h-5" />
              <span>support@foodhub.com</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3 text-sm sm:text-base">
              <Phone className="text-orange-500 w-5 h-5" />
              <span>+880 1234 567890</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3 text-sm sm:text-base">
              <MapPin className="text-orange-500 w-5 h-5" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Right */}
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