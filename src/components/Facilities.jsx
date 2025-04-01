import { FaDumbbell, FaSwimmer, FaFutbol, FaBasketballBall } from "react-icons/fa"
import { GiTennisCourt, GiPoolTableCorner, GiWaterSplash } from "react-icons/gi"
import { SiSpeedtest } from "react-icons/si"

export default function Facilities() {
  return (
    <main className="w-full bg-amber-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-amber-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/cool-gym.jpg"
            alt="Sports facilities overview"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">World-Class Facilities</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Experience excellence with our premium sports and leisure facilities designed for athletes of all levels.
          </p>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Premium Amenities</h2>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            From state-of-the-art training equipment to relaxing recovery spaces, we've created the perfect environment
            for your sporting journey.
          </p>
        </div>

        {/* Facility Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-amber-200 relative">
              <FaDumbbell className="absolute inset-0 m-auto text-amber-700 text-6xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-2">State-of-the-Art Gym</h3>
              <p className="text-amber-700">
                Our premium fitness center features the latest equipment, dedicated training zones, and professional
                staff to help you achieve your fitness goals.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-amber-200 relative">
              <GiTennisCourt className="absolute inset-0 m-auto text-amber-700 text-6xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-2">8 Tennis Courts</h3>
              <p className="text-amber-700">
                Enjoy our immaculately maintained tennis courts with all-weather surfaces, professional lighting, and
                convenient booking system for members.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-amber-200 relative">
              <SiSpeedtest className="absolute inset-0 m-auto text-amber-700 text-6xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-2">5 Squash Courts</h3>
              <p className="text-amber-700">
                Our competition-standard squash courts feature climate control, viewing areas, and are available for
                both casual play and organized tournaments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Facilities */}
      <section className="py-12">
        {/* Swimming Pool */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="w-full md:w-1/2 h-96 relative">
            <img
              src="/swim.jpg"
              alt="Swimming pool"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 bg-amber-800 text-white py-2 px-4">
              <FaSwimmer className="inline-block mr-2" />
              <span>Swimming</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-amber-100 p-12 h-96 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">Olympic-Size Swimming Pool</h3>
            <p className="text-lg text-amber-800 mb-6">
              Our 50-meter Olympic-size swimming pool is designed for both serious training and leisurely swims. With
              temperature-controlled water, dedicated lanes, and professional lifeguards, it's the perfect place to
              improve your technique or simply enjoy a refreshing dip.
            </p>
            <ul className="text-amber-700 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                Temperature-controlled water
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                Professional swimming instructors
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                Dedicated lap swimming times
              </li>
            </ul>
          </div>
        </div>

        {/* Serenity Spa */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-16">
          <div className="w-full md:w-1/2 h-96 relative">
            <img
              src="/spa.jpg"
              alt="Serenity Spa"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 right-0 bg-amber-800 text-white py-2 px-4">
              <GiWaterSplash className="inline-block mr-2" />
              <span>Relaxation</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-amber-100 p-12 h-96 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">Serenity Spa</h3>
            <p className="text-lg text-amber-800 mb-6">
              Recover and rejuvenate at our premium spa facility. Our Serenity Spa offers a range of treatments designed
              specifically for athletes and active individuals, helping you recover faster and perform better.
            </p>
            <ul className="text-amber-700 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                Sports massage therapy
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                Hydrotherapy pools
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                Steam rooms and saunas
              </li>
            </ul>
          </div>
        </div>

        {/* Football Fields */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="w-full md:w-1/2 h-96 relative">
            <img
              src="/fut.jpg"
              alt="Football fields"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 bg-amber-800 text-white py-2 px-4">
              <FaFutbol className="inline-block mr-2" />
              <span>Football</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-amber-100 p-12 h-96 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">5 Professional Football Fields</h3>
            <p className="text-lg text-amber-800 mb-6">
              Our five professional-grade football fields feature premium turf, proper drainage systems, and full
              lighting for evening matches. Perfect for training sessions, friendly matches, or organized tournaments.
            </p>
            <ul className="text-amber-700 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                FIFA-standard dimensions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                Professional lighting systems
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                Spectator seating areas
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">More Facilities to Explore</h2>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            Discover our complete range of sporting and leisure facilities designed for your enjoyment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Basketball Courts */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 h-64 md:h-auto relative">
              <div className="absolute inset-0 bg-amber-300 flex items-center justify-center">
                <FaBasketballBall className="text-amber-800 text-6xl" />
              </div>
            </div>
            <div className="w-full md:w-3/5 p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-2">3 Basketball Courts</h3>
              <p className="text-amber-700">
                Our state-of-the-art basketball courts feature professional flooring, adjustable hoops, and electronic
                scoreboards. Perfect for pickup games, organized leagues, or improving your skills with our coaching
                staff.
              </p>
            </div>
          </div>

          {/* Pool Tables */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 h-64 md:h-auto relative">
              <div className="absolute inset-0 bg-amber-300 flex items-center justify-center">
                <GiPoolTableCorner className="text-amber-800 text-6xl" />
              </div>
            </div>
            <div className="w-full md:w-3/5 p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-2">Indoor Pool Tables</h3>
              <p className="text-amber-700">
                For those who prefer indoor activities, our pool hall offers professional tables in a comfortable,
                stylish environment. Challenge friends to a game, join our regular tournaments, or simply unwind after
                an intense workout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Facilities?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join our club today and gain access to all these world-class facilities and more. We offer flexible
            membership options to suit your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-amber-900 hover:bg-amber-100 font-bold py-3 px-8 rounded-md transition-colors duration-300">
              Book a Tour
            </button>
            <button className="bg-amber-700 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300">
              Join Now
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-amber-100 rounded-xl p-8 md:p-12 relative">
          <div className="text-6xl text-amber-300 absolute top-6 left-6">"</div>
          <div className="relative z-10">
            <p className="text-xl md:text-2xl text-amber-900 italic mb-6 max-w-4xl mx-auto text-center">
              The facilities at this sports club are truly exceptional. From the immaculate tennis courts to the
              state-of-the-art gym, everything is designed with the athlete in mind. It's become my second home.
            </p>
            <div className="text-center">
              <p className="font-bold text-amber-800">Michael Kioko</p>
              <p className="text-amber-700">Member since 2019</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

