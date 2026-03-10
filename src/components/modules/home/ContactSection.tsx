import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="bg-zinc-50 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">
            Get in Touch
          </h2>
          <p className="text-gray-500">
            Have questions or want to partner with us?
            Reach out anytime.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="text-orange-500" />
              <span>support@foodhub.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-orange-500" />
              <span>+880 1234 567890</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-orange-500" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Right */}
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
  )
}