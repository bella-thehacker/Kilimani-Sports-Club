import { FaUsers, FaCalendarAlt } from "react-icons/fa"
import { GiTennisCourt } from "react-icons/gi"
import { CardText } from "./CardText"

function HomePage() {
  return (
    <main className="w-full bg-amber-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/tennis-home.jpg" alt="Kilimani Sports Club" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-amber-800/40"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-xl mt-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Kilimani Sports Club</h1>
            <h2 className="text-xl md:text-2xl text-amber-100 mb-8">Home of Champions</h2>
            <p className="text-white text-lg mb-8 max-w-lg">
              Kilimani Sports Club is not just a sports facility - it's a way of life. From the moment you step onto its
              lush grounds, you're transported into a world of athleticism, community, and leisure.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
                Join Now
              </button>
              <button className="bg-white hover:bg-amber-100 text-amber-900 font-bold py-3 px-6 rounded-md transition-colors duration-300">
                Explore Facilities
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-900/80 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Experience Excellence</h2>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            Our world-class facilities and expert staff ensure an unparalleled sporting experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <GiTennisCourt className="text-amber-700 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-amber-900 mb-3">Premium Facilities</h3>
            <p className="text-amber-700">
              State-of-the-art courts, pools, and training areas designed for peak performance and enjoyment.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <FaUsers className="text-amber-700 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-amber-900 mb-3">Expert Coaching</h3>
            <p className="text-amber-700">
              Learn from our team of professional coaches with decades of experience in competitive sports.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <FaCalendarAlt className="text-amber-700 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-amber-900 mb-3">Regular Events</h3>
            <p className="text-amber-700">
              Participate in tournaments, social gatherings, and training camps throughout the year.
            </p>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold mb-6">The Ultimate Destination for Sports Enthusiasts</h2>
              <p className="text-lg mb-6">
                Experience excellence in sports and hospitality at Kilimani Sports Club. Our facilities are designed to
                cater to both casual players and serious athletes.
              </p>
              <p className="text-lg mb-8">
                Whether you're looking to improve your game, stay fit, or simply enjoy a day of leisure activities with
                friends and family, we have everything you need.
              </p>
              <button className="bg-white text-amber-900 hover:bg-amber-100 font-bold py-3 px-6 rounded-md transition-colors duration-300">
                Learn More About Us
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img src="/basket-ball.jpg" alt="Kilimani Sports Club Facilities" className="w-full h-auto" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900 to-transparent p-6">
                  <p className="text-white font-medium">World-class facilities for all ages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pl-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Relaxation & Recovery</h2>
            <p className="text-lg text-amber-700 mb-6">
              At Kilimani Sports Club, we understand that recovery is just as important as training. Our spa and
              wellness facilities provide the perfect environment to relax and rejuvenate.
            </p>
            <p className="text-lg text-amber-700 mb-8">
              From massage therapy to steam rooms, we offer a range of services designed to help you recover faster and
              perform better.
            </p>
            <button className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
              Explore Wellness Services
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src="/spa.jpg" alt="Kilimani Sports Club Spa" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-amber-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8">
            "THE ULTIMATE DESTINATION FOR SPORTS ENTHUSIASTS"
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-amber-700 mb-8">
            Join our community of passionate athletes and sports lovers. Experience the perfect blend of competition,
            camaraderie, and comfort.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-700"></div>
            <div className="w-3 h-3 rounded-full bg-amber-900"></div>
          </div>
        </div>
      </section>

      {/* Card Section with GIFs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Facilities</h2>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            Explore our world-class facilities designed for athletes of all levels
          </p>
        </div>
        <CardText />
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">What Our Members Say</h2>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto">
              Hear from the athletes and families who call Kilimani Sports Club home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-200 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-bold text-amber-900">Michael Kamau</h3>
                  <p className="text-amber-600 text-sm">Tennis Enthusiast</p>
                </div>
              </div>
              <p className="text-amber-700">
                "The facilities at Kilimani are world-class. I've improved my game tremendously since joining, and the
                community is so welcoming and supportive."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-200 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-bold text-amber-900">Sarah Wanjiku</h3>
                  <p className="text-amber-600 text-sm">Swimming Champion</p>
                </div>
              </div>
              <p className="text-amber-700">
                "The coaching staff is exceptional. They've helped me reach competitive levels I never thought possible.
                The pool facilities are simply outstanding."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-200 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-bold text-amber-900">David Ojuku</h3>
                  <p className="text-amber-600 text-sm">Family Membership</p>
                </div>
              </div>
              <p className="text-amber-700">
                "We joined as a family and it's been the best decision. There's something for everyone, from my teenage
                son who loves basketball to my daughter who's taking swimming lessons."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Become a member today and start your journey towards athletic excellence and lifelong friendships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-amber-900 hover:bg-amber-100 font-bold py-3 px-8 rounded-md transition-colors duration-300">
              View Membership Options
            </button>
            <button className="bg-amber-700 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300">
              Schedule a Tour
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage

