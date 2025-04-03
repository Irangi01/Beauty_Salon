"use client"
import Image from "next/image"
import Link from "next/link"
import { Menu, Play, ArrowRight, ChevronRight, Calendar } from "lucide-react"
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from "@/components/ui/button"

// import { Card, CardContent } from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator"


const serviceCards = [
  {
    name: "MAKEUP",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: (
      <img
        src="/assets/m-icon.png"
        alt="Makeup Icon"
        className="w-10 h-10 object-contain"
      />
    ),
  },
  {
    name: "HAIRS",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: (
      <img
        src="/assets/h-icon.png"
        alt="Hair Icon"
        className="w-10 h-10 object-contain"
      />
    ),
  },
  {
    name: "BROW",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: (
      <img
        src="/assets/b-icon.png"
        alt="Brow Icon"
        className="w-10 h-10 object-contain"
      />
    ),
  },
  {
    name: "NAILS",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: (
      <img
        src="/assets/n-icon.png"
        alt="Nails Icon"
        className="w-10 h-10 object-contain"
      />
    ),
  },
];

const vacationImages = [
  "/assets/hair2.png",
  "/assets/hair1.png",
  "/assets/hair3.png",
]



export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header*/}
      <main className="flex-1">
        {/* Hero Section with integrated Navbar */}
        <section className="relative h-screen overflow-hidden">
          <Image src="/assets/Hero1.png" alt="Beauty artist background" fill className="object-cover" priority />

          {/* Navigation Bar */}
          <div className="absolute top-0 w-full z-10">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
              <div className="font-semibold text-xl text-white">GlamAuraStudio</div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="#" className="text-sm font-medium text-white hover:underline">
                  Home
                </Link>
                <Link href="#" className="text-sm font-medium text-white hover:underline">
                  Services
                </Link>
                <Link href="#" className="text-sm font-medium text-white hover:underline">
                  About Us
                </Link>
                <Link href="#" className="text-sm font-medium text-white hover:underline">
                  Contact
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button className="text-white focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  <Menu className="h-6 w-6" />
                </button>
              </div>

              {/* Language Selector - Updated styling */}
              <div className="relative group hidden md:block">
                <button className="flex items-center gap-1 text-white rounded-full bg-white/10 px-3 py-1.5">
                  <img src="https://flagcdn.com/w20/gb.png" alt="Australian Flag" className="w-5 h-3 object-cover" />
                  <span className="text-sm">ENG</span>
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden bg-black/80 backdrop-blur-md w-full py-4 px-4">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="#"
                    className="text-sm font-medium text-white hover:text-white/80"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="#"
                    className="text-sm font-medium text-white hover:text-white/80"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="#"
                    className="text-sm font-medium text-white hover:text-white/80"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="#"
                    className="text-sm font-medium text-white hover:text-white/80"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>

          {/* Hero Content */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
            <div className="container mx-auto h-full flex flex-col px-4 md:px-8">
              {/* Text Content */}
              <div className="mt-32 md:mt-40 max-w-[90vw] md:max-w-xl space-y-6 md:space-y-4 text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-tight">
                  Clear Focus,
                  <br />
                  Brighter Tomorrow
                </h1>
                <p className="text-white/90 text-sm sm:text-base max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
                <div className="flex items-center gap-6">
                  <button
                    className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-white bg-transparent text-white hover:bg-white/10 transition-colors"
                    aria-label="Play video"
                  >
                    <Play className="h-6 w-6" />
                  </button>
                  <span className="text-white text-lg font-normal border-b border-white pb-1">Play Testimonial Video</span>
                </div>
              </div>

              {/* Bottom Section - Fixed positioning for desktop */}
              <div className="absolute bottom-8 left-0 right-0 px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
                  {/* Customers - Updated styling to match reference */}
                  <div className="mb-6 md:mb-0">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                            <Image src={`/assets/2.png`} alt={`Customer ${i}`} fill className="object-cover" />
                          </div>
                        ))}
                      </div>
                      <span className="text-white text-sm md:text-base font-medium">
                        30k+ customer are
                        <br />
                        satisfied with our service
                      </span>
                    </div>
                    <Link href="#" className="flex items-center text-white text-sm mt-2 hover:underline">
                      More Details <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>

                  {/* Booking Card - Updated styling */}
                  <div className="w-full md:w-auto bg-white/10 backdrop-blur-md p-6 rounded-sm md:max-w-xs relative">
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-t-white/20 border-l-[20px] border-l-transparent transform translate-x-[-1px]"></div>
                    <h3 className="text-xl font-bold text-white mb-2">Quick Booking</h3>
                    <p className="text-white/80 text-sm mb-4">Get up to 30% discount on your first appointment</p>
                    <Button className="w-full bg-white text-gray-900 hover:bg-white/90 font-medium text-sm rounded-full">
                      Book Appointment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>





        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-8">
            {/* Changed from text-center to text-left */}
            <div className="text-left mb-12">
              <h2 className="text-3xl font-bold">Our Services</h2>
              <p className="text-gray-600 mt-2">
                Complete Your Service With Beautiful Makeup And Simply Be Amazing With Complete Look.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {serviceCards.map((service, index) => (
                <div key={index} className="border border-black p-8 flex flex-col items-center text-center"> {/* Added border-black */}
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Link href="#" className="text-sm font-medium flex items-center underline"> {/* Added underline */}
                    Explore <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Divider line */}
            <div className="border-t border-grey my-12"></div> {/* Added divider line */}

            {/* Price List */}
            <div className="border border-black p-8 mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
              <Button className="rounded-full px-8 bg-black text-white hover:bg-black/80 border border-black"> {/* Added border-black */}
                View All Services
              </Button>
            </div>
          </div>
        </section>

        {/* Bridal Makeup Section */}
        <section className="py-0 bg-white">
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
        <section className="py-10 bg-white">
          <div className="container mx-auto px-2">
            <h2 className="text-3xl font-bold mb-10">Best Hair Solution Salon</h2>
            <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <br></br>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {vacationImages.map((image, index) => (
                <div key={index} className="relative h-[300px] -lg overflow-hidden">
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
              <Button variant="outline" className="px-8">
                View More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Nails Art Section */}
        <section className="py-8 bg-gray-50">
  <div className="container mx-auto px-8">
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="flex justify-center">
        <div className="overflow-hidden w-full max-w-[450px]"> {/* Increased from 300px to 450px */}
          <Image
            src="/assets/nail1.jpg"
            alt="Nail art"
            width={450}
            height={560}
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
          <Button className="rounded-full px-6 py-2.5 bg-black text-white hover:bg-black/80 flex items-center">
            Get Appointment For Nails
            <div className="ml-2 bg-white rounded-full p-1.5">
              <ArrowRight className="h-3.5 w-3.5 text-black" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Blog Section */}
        <section className="py-8 bg-white">
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
                <div className="absolute left-1/2 -translate-x-1/2 z-30">
  <Link href="/blog/bridal-makeup-trends-2025" className="block group">
    <div className="overflow-hidden shadow-lg">
      <div className="overflow-hidden">
        <Image
          src="/assets/blog1.png"
          alt="Bridal makeup trends"
          width={300}  
          height={300} 
          className="object-contain group-hover:scale-105 transition-transform"
        />
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
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#727F85] text-white py-12">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Brand Info - stays on left */}
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">GlamAuraStudio</h1>
              <p className="text-white/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <div className="space-y-1">
                <p className="font-medium">1234 Abe Address, Xyz</p>
                <p className="font-medium">+1 (123) 111 - 3210</p>
              </div>
            </div>

            {/* Column 2: Links Grid - pushed right with margin */}
            <div className="grid grid-cols-2 gap-4 md:ml-8"> {/* Added md:ml-8 */}
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
                  <li><Link href="#" className="text-white/90 hover:text-white">FAQs</Link></li>
                </ul>
              </div>
            </div>

            {/* Column 3: Social Media - pushed further right */}
            <div className="space-y-4 md:ml-12"> {/* Added md:ml-12 */}
              <h3 className="text-lg font-semibold">Join Our Social Media</h3>
              <div className="space-y-2">
                <p className="text-white/90">Community</p>
                <div className="flex flex-col space-y-3">
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
          </div>

          {/* Bottom Links */}
          <div className="mt-12 pt-6 border-t border-white/20">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex flex-col md:flex-row gap-4">
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


