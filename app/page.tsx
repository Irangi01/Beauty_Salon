import Image from "next/image"
import Link from "next/link"
import { Play, ArrowRight, ChevronRight, Calendar } from "lucide-react"
import { ChevronDown } from 'lucide-react';

import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full bg-black/70 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-8">
          <div className="font-semibold text-xl text-white">GlamAuraStudio</div>
          <nav className="flex items-center space-x-6">
            <Link href="#" className="text-sm font-medium text-white hover:text-primary/90">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium text-white hover:text-primary/90">
              Services
            </Link>
            <Link href="#" className="text-sm font-medium text-white hover:text-primary/90">
              About Us
            </Link>
            <Link href="#" className="text-sm font-medium text-white hover:text-primary/90">
              Contact
            </Link>
          </nav>
          <div className="relative group">
            <button className="flex items-center text-white rounded-full border border-white/30 px-3 py-1 h-auto space-x-2">
              <img
                src="https://flagcdn.com/w20/au.png"
                alt="Australian Flag"
                className="w-5 h-3 object-cover"
              />
              <span>ENG</span>
              <ChevronDown className="h-3 w-3 opacity-50" />
            </button>
            <div className="absolute right-0 mt-2 w-40 origin-top-right bg-white/90 backdrop-blur-md rounded-md shadow-lg hidden group-hover:block">
              <div className="py-1">
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <img
                    src="https://flagcdn.com/w20/us.png"
                    alt="USA Flag"
                    className="w-5 h-3 mr-2 object-cover"
                  />
                  English (US)
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <img
                    src="https://flagcdn.com/w20/fr.png"
                    alt="French Flag"
                    className="w-5 h-3 mr-2 object-cover"
                  />
                  Français
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <img
                    src="https://flagcdn.com/w20/es.png"
                    alt="Spanish Flag"
                    className="w-5 h-3 mr-2 object-cover"
                  />
                  Español
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px] overflow-hidden">
          <Image
            src="/assets/Hero1.png"
            alt="Beauty artist background"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent">
            <div className="container mx-auto h-full flex flex-col justify-center px-8">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
                {/* Left content - Hero text */}
                <div className="max-w-xl space-y-4 text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Clear Focus, Brighter Tomorrow
                  </h1>
                  <p className="text-white/90 text-lg">
                    Enhance your natural beauty with our professional makeup and beauty services. We specialize in creating
                    looks that make you feel confident and radiant.
                  </p>
                  <div className="flex justify-center md:justify-start items-center gap-4">
                    <Button className="rounded-full">
                      <Play className="mr-2 h-4 w-4" /> Watch Video
                    </Button>
                  </div>
                  <div className="mt-8 flex justify-center md:justify-start items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white"
                        >
                          <Image
                            src={`/assets/2.jpg`}
                            alt={`Customer ${i}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <span className="text-white text-sm">Trusted by 2,000+ customers</span>
                  </div>
                </div>

                {/* Right side - Quick Booking Card */}
                <div className="md:absolute md:right-10 md:bottom-20 mt-10 md:mt-0 bg-white/10 backdrop-blur-lg p-6 border border-white/20 w-full md:max-w-xs shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">Quick Booking</h3>
                  <p className="text-white/80 mb-5 text-sm">
                    Get up to 30% discount on your first visit
                  </p>
                  <Button className="w-full bg-white text-gray-900 hover:bg-white/90 font-medium">
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our Services</h2>
              <p className="text-gray-600 mt-2">
                Complete Your Service With Beautiful Makeup And Simply Be Amazing With Complete Look.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {serviceCards.map((service, index) => (
                <div key={index} className="border p-8 flex flex-col items-center text-center">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Link href="#" className="text-sm font-medium flex items-center">
                    Explore <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Price List */}
            <div className="border p-8 mb-12">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">NAIL BUFER</span>
                    <span className="font-medium">$15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">SUPER DELUXE</span>
                    <span className="font-medium">$15</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">NAIL PAINT</span>
                    <span className="font-medium">$15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">CHOCLATE SPA</span>
                    <span className="font-medium">$15</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">DELUXE</span>
                    <span className="font-medium">$15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">NATURES SPA</span>
                    <span className="font-medium">$15</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button className="rounded-full px-8 bg-black text-white hover:bg-black/80">View All Services</Button>
            </div>
          </div>
        </section>

        {/* Bridal Makeup Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                  Bridal Makeup
                  <br />& Destination Weddings
                </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat.
                </p>
                <p className="font-medium">Read More</p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button className="rounded-full px-6 bg-black text-white hover:bg-black/80">
                    Get Appointment <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="rounded-full px-6">
                    Explore More
                  </Button>
                </div>
              </div>

              <div className="relative h-[500px] overflow-hidden"> {/* Removed rounded-lg */}
                <Image src="/assets/bride1.png" alt="Bridal makeup" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/*Best Hair Solution Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-bold mb-10">Best Hair Solution Salon</h2>
            <p className="text-muted-foreground">
              Experience top-tier hair care at our salon, where expert stylists craft stunning looks tailored to you. From precision cuts to nourishing treatments, we ensure healthy, stylish hair. Step in for a transformation and leave feeling confident and refreshed!
            </p>
            <br></br>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {vacationImages.map((image, index) => (
                <div key={index} className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Vacation makeup look ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button variant="outline" className="rounded-full px-8">
                View More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Nails Art Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center">
                <div className="overflow-hidden w-full max-w-[400px]">
                  <Image
                    src="/assets/nail1.jpg"
                    alt="Nail art"
                    width={400}
                    height={500}
                    className="object-cover w-full"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Nails Art</h2>
                <p className="text-gray-600">
                  Elevate your manicure experience with our exquisite nail art services. Whether you're looking for
                  minimalist elegance or bold, intricate designs, our talented nail artists bring creativity and precision
                  to every stroke. Using high-quality products and the latest techniques, we transform your nails into
                  stunning works of art that express your unique style.
                </p>
                <p className="text-gray-600">
                  From classic French tips to vibrant, eye-catching patterns, our salon offers a wide range of designs to
                  suit any occasion. Pamper yourself with a custom nail art session and leave with nails that are sure to
                  turn heads! <span className="font-medium">Read More</span>
                </p>

                <div className="pt-4">
                  <Button className="rounded-full px-6 bg-black text-white hover:bg-black/80">
                    Get Appointment For Nails <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold">Our Blogs</h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Blog Gallery with overlapping images */}
              <div className="flex justify-center items-center relative h-[450px]">
                {/* Left image 1 - furthest left */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-[280px] w-[130px] overflow-hidden">
                  <Link href="/blog/beauty-tips-1" className="block h-full hover:scale-105 transition-transform">
                    <Image
                      src="/assets/blog2.png"
                      alt="Beauty blog 1"
                      width={130}
                      height={280}
                      className="object-cover h-full w-full"
                    />
                  </Link>
                </div>

                {/* Left image 2 */}
                <div className="absolute left-[110px] top-1/2 -translate-y-1/2 z-20 h-[330px] w-[180px] overflow-hidden">
                  <Link href="/blog/beauty-tips-2" className="block h-full hover:scale-105 transition-transform">
                    <Image
                      src="/assets/blog3.png"
                      alt="Beauty blog 2"
                      width={180}
                      height={330}
                      className="object-cover h-full w-full"
                    />
                  </Link>
                </div>

                {/* Center featured image */}
                <div className="absolute left-1/2 -translate-x-1/2 z-30 w-[300px] overflow-hidden">
                  <Link href="/blog/bridal-makeup-trends-2025" className="block group">
                    <div className="w-full overflow-hidden shadow-lg">
                      <div className="w-full h-[300px] overflow-hidden">
                        <Image
                          src="/assets/blog1.png"
                          alt="Bridal makeup trends"
                          width={300}
                          height={300}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="bg-[#f5e8dd] p-4">
                        <div className="flex items-center text-sm mb-2 text-gray-600">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>17 Feb, 2025</span>
                        </div>
                        <h3 className="font-semibold text-lg mb-1">Top 5 Bridals Makeup Trends In 2025</h3>
                        <p className="text-xs text-gray-600">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Right image 1 */}
                <div className="absolute right-[110px] top-1/2 -translate-y-1/2 z-20 h-[330px] w-[180px] overflow-hidden">
                  <Link href="/blog/beauty-tips-3" className="block h-full hover:scale-105 transition-transform">
                    <Image
                      src="/assets/blog4.png"
                      alt="Beauty blog 3"
                      width={180}
                      height={330}
                      className="object-cover h-full w-full"
                    />
                  </Link>
                </div>

                {/* Right image 2 - furthest right */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-[280px] w-[130px] overflow-hidden">
                  <Link href="/blog/beauty-tips-4" className="block h-full hover:scale-105 transition-transform">
                    <Image
                      src="/assets/blog5.png"
                      alt="Beauty blog 4"
                      width={130}
                      height={280}
                      className="object-cover h-full w-full"
                    />
                  </Link>
                </div>
              </div>

              {/* Navigation button */}
              <button className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* View All Blogs Button */}
            <div className="flex justify-center mt-10">
              <Button className="rounded-full px-8 bg-black text-white hover:bg-black/80">View All Blogs</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#727F85] text-white py-12">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Brand Info */}
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">GlamAuraStudio</h1>
              <p className="text-white/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <div className="space-y-1">
                <p className="font-medium">1234 Abc Address, Xyz</p>
                <p className="font-medium">+1 (123) 111 - 3210</p>
              </div>
            </div>

            {/* Column 2: Links Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">Home</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-white/90 hover:text-white">About Us</Link></li>
                  <li><Link href="#" className="text-white/90 hover:text-white">Beauty & Makeup</Link></li>
                  <li><Link href="#" className="text-white/90 hover:text-white">Offers</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-white/90 hover:text-white">Contact</Link></li>
                  <li><Link href="#" className="text-white/90 hover:text-white">Discount</Link></li>
                  <li><Link href="#" className="text-white/90 hover:text-white">Appointment</Link></li>
                </ul>
              </div>
            </div>

            {/* Column 3: Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Join Our Social Media Community</h3>
              <div className="flex flex-col space-y-4">
                <Link href="#" className="flex items-center text-white/90 hover:text-white">
                  <Image
                    src="/assets/insta.png"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="w-5 h-5 mr-2"
                  />
                  Instagram
                </Link>
                <Link href="#" className="flex items-center text-white/90 hover:text-white">
                  <Image
                    src="/assets/fb.png"
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="w-5 h-5 mr-2"
                  />
                  Facebook
                </Link>
                <Link href="#" className="flex items-center text-white/90 hover:text-white">
                  <Image
                    src="/assets/yt.png"
                    alt="YouTube"
                    width={20}
                    height={20}
                    className="w-5 h-5 mr-2"
                  />
                  YouTube
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="mt-12 pt-6 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <Link href="#" className="text-white/90 hover:text-white text-sm">Terms & Conditions</Link>
                <Link href="#" className="text-white/90 hover:text-white text-sm">Privacy Policy</Link>
              </div>
              <p className="text-white/90 text-sm">
                Copyright © 2025 GlamAuraStudio
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


const serviceCards = [
  {
    name: "MAKEUP",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 21h10" />
        <path d="M12 21V11" />
        <path d="M3.5 11h17" />
        <path d="M5 11V7.5C5 6.67 5.67 6 6.5 6h11c.83 0 1.5.67 1.5 1.5V11" />
        <rect x="8" y="3" width="8" height="3" rx="1" />
        <path d="M18 11v2" />
        <path d="M6 11v2" />
      </svg>
    ),
  },
  {
    name: "HAIRS",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 6c0 4-4.5 5-4.5 10 0 3 2 4 4.5 4s4.5-1 4.5-4c0-5-4.5-6-4.5-10" />
        <path d="M15 6c0 4 4.5 5 4.5 10 0 3-2 4-4.5 4s-4.5-1-4.5-4c0-5 4.5-6 4.5-10" />
      </svg>
    ),
  },
  {
    name: "BROW",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: "NAILS",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a5 5 0 0 0-5 5v14a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5Z" />
        <path d="M18 6a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V9a3 3 0 0 0-3-3Z" />
        <path d="M6 6a3 3 0 0 1 3 3v12a3 3 0 0 1-6 0V9a3 3 0 0 1 3-3Z" />
      </svg>
    ),
  },
]

const vacationImages = [
  "/assets/hair2.png",
  "/assets/hair1.png",
  "/assets/hair3.png",
]

