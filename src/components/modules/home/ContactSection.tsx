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
        <div className="rounded-xl border bg-white p-6 shadow-sm space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="w-full rounded-md bg-orange-500 py-2 text-white font-medium hover:bg-orange-600 transition">
            Send Message
          </button>
        </div>
      </div>
    </section>
  )
}