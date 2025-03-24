import Image from "next/image"
import Link from "next/link"
import { Play, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="font-semibold text-xl">GlamAuraStudio</div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Gallery
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="hidden md:flex">
            Book Now
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px] overflow-hidden">
          <Image
            src="/assets/Hero.jpg"
            alt="Home"
            fill
            className="object-cover brightness-75"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
            <div className="container mx-auto h-full flex flex-col justify-center">
              <div className="max-w-xl space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  Clear Focus, Brighter Tomorrow
                </h1>
                <p className="text-white/90 text-lg">
                  Enhance your natural with our professional makeup and beauty services. We specialize in
                  creating looks that make you feel confident and radiant.
                </p>
                <div className="flex items-center gap-4">
                  <Button className="rounded-full">
                    <Play className="mr-2 h-4 w-4" /> Watch Video
                  </Button>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white/20 hover:text-white"
                  >
                    Book Session
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center">
                      <Image src={service.icon || "/placeholder.svg"} alt={service.name} width={40} height={40} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Price</span>
                      <span className="font-bold">${service.price}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Time</span>
                      <span>{service.time} min</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button className="rounded-full px-8">View All Services</Button>
            </div>
          </div>
        </section>

        {/* Bridal Makeup Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Bridal Makeup & Destination Weddings</h2>
                <p className="text-muted-foreground">
                  Make your special day even more memorable with our professional bridal makeup services. We create
                  stunning, long-lasting looks that photograph beautifully and stay perfect throughout your celebration.
                </p>
                <p className="text-muted-foreground">
                  Our team can travel to your destination, ensuring you look flawless no matter where your wedding takes
                  place.
                </p>
                <Button className="rounded-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/assets/bride4.jpg" alt="Bridal makeup" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Vacation Spots Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
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
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/assets/nail1.jpg"
                  alt="Nail art"
                  width={500}  // adjust to actual width
                  height={200} // adjust to actual height
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Nails Art</h2>
                <p className="text-muted-foreground">
                  Elevate your manicure experience with our exquisite nail art services. Whether you’re looking for minimalist elegance or bold, intricate designs, our talented nail artists bring creativity and precision to every stroke. Using high-quality products and the latest techniques, we transform your nails into stunning works of art that express your unique style.
                </p>
                <p className="text-muted-foreground">
                  From classic French tips to vibrant, eye-catching patterns, our salon offers a wide range of designs to suit any occasion. Pamper yourself with a custom nail art session and leave with nails that are sure to turn heads! Read More
                </p>
                <Button variant="outline" className="rounded-full">
                  Discover More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10">Our Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="group">
                  <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GlamAuraStudio</h3>
              <p className="text-gray-400">
                Enhancing natural beauty with professional makeup and beauty services since 2010.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Beauty Street</li>
                <li>Australia 10001</li>
                <li>info@GlamAuraStudio.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </Link>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>© {new Date().getFullYear()} GlamAuraStudio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample data
const services = [
  {
    name: "Makeup",
    description: "Professional makeup for any occasion",
    price: 75,
    time: 60,
    icon: "/assets/m-icon.jpg",
  },
  {
    name: "Hair Styling",
    description: "Cuts, colors, and styling services",
    price: 85,
    time: 90,
    icon: "/assets/h-icon.jpg",
  },
  {
    name: "Skincare",
    description: "Facials and skin treatments",
    price: 95,
    time: 75,
    icon: "/assets/s-icon.jpg",
  },
  {
    name: "Nails",
    description: "Manicures, pedicures, and nail art",
    price: 55,
    time: 60,
    icon: "/assets/n-icon.jpg",
  },
]

const vacationImages = [
  "/assets/s-1.jpg",
  "/assets/s-2.jpg",
  "/assets/s-3.jpg",
]

const blogPosts = [
  {
    title: "Hair Care Tips",
    excerpt: "Discover the hottest makeup trends for this summer season.",
    image: "/assets/hair.jpg",
  },
  {
    title: "Skincare Routine for Dry Skin",
    excerpt: "The perfect skincare routine to combat dry skin in any season.",
    image: "/assets/skincare.jpg",
  },
  {
    title: "Best Pedicure Services",
    excerpt: "Essential tips for brides to ensure perfect makeup on their special day.",
    image: "/assets/pedi1.jpg",
  },
]