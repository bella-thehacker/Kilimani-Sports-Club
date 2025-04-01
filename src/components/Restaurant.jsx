import { FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaUtensils } from "react-icons/fa"

export default function Restaurant() {
  return (
    <main className="w-full">
      {/* Top Info Bar */}
      <div className="bg-amber-700 text-white text-xs py-2 text-center">
        <p>NOW SERVING: BREAKFAST 7AM-11AM | LUNCH 11:30AM-3PM | DINNER 5:30PM-10PM | BAR OPEN UNTIL 11PM</p>
      </div>

      {/* Navigation */}
      <div className="bg-amber-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center">
          <nav className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium w-full md:w-auto">
            <a href="#hours" className="hover:text-amber-200 transition-colors">
              HOURS & LOCATION
            </a>
            <a href="#menus" className="hover:text-amber-200 transition-colors">
              MENUS
            </a>
            <a href="#catering" className="hover:text-amber-200 transition-colors">
              CATERING
            </a>
            <a href="#events" className="hover:text-amber-200 transition-colors">
              PRIVATE EVENTS
            </a>
            <a href="#gift-cards" className="hover:text-amber-200 transition-colors">
              GIFT CARDS
            </a>
            <a href="#order" className="hover:text-amber-200 transition-colors">
              ORDER TAKEOUT
            </a>
          </nav>
          <a
            href="#reservations"
            className="mt-4 md:mt-0 px-6 py-2 border-2 border-white hover:bg-white hover:text-amber-600 transition-colors text-sm font-bold"
          >
            RESERVATIONS
          </a>
        </div>
      </div>

      {/* Hero Slider */}
      <div className="relative h-[500px] overflow-hidden">
        {/* Slider Images */}
        <div className="absolute inset-0">
          <img
            src="/booze.jpg"
            alt="Delicious food at The Clubhouse Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Logo/Brand Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-sm tracking-widest mb-2">KILIMANI SPORTS CLUB</p>
            <h1 className="text-6xl md:text-7xl font-serif italic mb-2">The Clubhouse</h1>
            <p className="text-sm tracking-widest">RESTAURANT & BAR</p>
          </div>
        </div>

        {/* Slider Controls */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full flex items-center justify-center text-white">
          &lt;
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full flex items-center justify-center text-white">
          &gt;
        </button>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Restaurant Interior Image */}
        <div className="h-80 md:h-auto relative">
          <img
            src="/cater.jpg"
            alt="The Clubhouse Restaurant Interior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Catering Section */}
        <div className="bg-amber-600 text-white p-12 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-4">CATERING</h2>
          <p className="text-center mb-6">Let us cater your next team event or celebration!</p>
          <a
            href="#learn-more"
            className="px-6 py-2 border-2 border-white hover:bg-white hover:text-amber-600 transition-colors text-sm font-bold"
          >
            LEARN MORE
          </a>
        </div>

        {/* Private Events Section */}
        <div className="bg-amber-700 text-white p-12 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-4">PRIVATE PARTIES</h2>
          <p className="text-center mb-6">Host your special occasion in our elegant dining space</p>
          <a
            href="#learn-more"
            className="px-6 py-2 border-2 border-white hover:bg-white hover:text-amber-700 transition-colors text-sm font-bold"
          >
            LEARN MORE
          </a>
        </div>

        {/* Private Events Image */}
        <div className="h-80 md:h-auto relative">
          <img
            src="/private.jpg"
            alt="Private Event Space"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">ABOUT THE CLUBHOUSE</h2>
          <p className="text-lg text-amber-800 mb-8">
            The Clubhouse Restaurant offers a refined dining experience within Kilimani Sports Club. Our menu features
            nutritious, delicious options crafted with athletes in mind, alongside indulgent favorites for those special
            occasions. With panoramic views of our grounds, The Clubhouse is the perfect place to refuel after a workout
            or celebrate your latest victory.
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <FaUtensils className="text-amber-600 text-3xl mx-auto mb-2" />
              <h3 className="font-bold text-amber-900">Athlete-Focused Menu</h3>
            </div>
            <div className="text-center">
              <FaMapMarkerAlt className="text-amber-600 text-3xl mx-auto mb-2" />
              <h3 className="font-bold text-amber-900">Scenic Views</h3>
            </div>
            <div className="text-center">
              <FaCalendarAlt className="text-amber-600 text-3xl mx-auto mb-2" />
              <h3 className="font-bold text-amber-900">Event Hosting</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">FEATURED MENU ITEMS</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 relative">
                <img
                  src="/bowl.jpg"
                  alt="Power Bowl"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">Athlete's Power Bowl</h3>
                <p className="text-amber-700 mb-4">
                  Quinoa, grilled chicken, avocado, roasted vegetables, and our signature protein-rich dressing.
                </p>
                <p className="text-amber-900 font-bold">ksh 3,600</p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 relative">
                <img
                  src="/salmon.jpg"
                  alt="Grilled Salmon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">Champion's Grilled Salmon</h3>
                <p className="text-amber-700 mb-4">
                  Omega-rich salmon with lemon herb sauce, served with quinoa and seasonal vegetables.
                </p>
                <p className="text-amber-900 font-bold">Ksh 4,400</p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 relative">
                <img
                  src="/burger.jpg"
                  alt="Victory Burger"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">The Victory Burger</h3>
                <p className="text-amber-700 mb-4">
                  House-ground beef, aged cheddar, caramelized onions, and special sauce on a brioche bun.
                </p>
                <p className="text-amber-900 font-bold">Ksh 3,800</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#full-menu"
              className="inline-block px-8 py-3 bg-amber-600 text-white hover:bg-amber-700 transition-colors font-bold rounded-md"
            >
              VIEW FULL MENU
            </a>
          </div>
        </div>
      </section>

      {/* Hours & Reservations */}
      <section className="py-16 px-4 bg-amber-800 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">HOURS & LOCATION</h2>
            <div className="mb-6">
              <h3 className="font-bold mb-2">BREAKFAST</h3>
              <p>Monday - Friday: 7:00 AM - 11:00 AM</p>
              <p>Saturday - Sunday: 7:00 AM - 12:00 PM</p>
            </div>
            <div className="mb-6">
              <h3 className="font-bold mb-2">LUNCH</h3>
              <p>Monday - Sunday: 11:30 AM - 3:00 PM</p>
            </div>
            <div className="mb-6">
              <h3 className="font-bold mb-2">DINNER</h3>
              <p>Monday - Thursday: 5:30 PM - 10:00 PM</p>
              <p>Friday - Saturday: 5:30 PM - 11:00 PM</p>
              <p>Sunday: 5:30 PM - 9:00 PM</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">BAR</h3>
              <p>Monday - Thursday: 11:00 AM - 11:00 PM</p>
              <p>Friday - Saturday: 11:00 AM - 12:00 AM</p>
              <p>Sunday: 11:00 AM - 10:00 PM</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">MAKE A RESERVATION</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-3 bg-amber-700 border border-amber-500 text-white placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 bg-amber-700 border border-amber-500 text-white placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="p-3 bg-amber-700 border border-amber-500 text-white placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <select className="p-3 bg-amber-700 border border-amber-500 text-white focus:outline-none focus:ring-2 focus:ring-amber-400">
                  <option value="">Party Size</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3-4">3-4 People</option>
                  <option value="5-6">5-6 People</option>
                  <option value="7+">7+ People</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="date"
                  className="p-3 bg-amber-700 border border-amber-500 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <select className="p-3 bg-amber-700 border border-amber-500 text-white focus:outline-none focus:ring-2 focus:ring-amber-400">
                  <option value="">Time</option>
                  <option value="breakfast">Breakfast (7:00 AM - 11:00 AM)</option>
                  <option value="lunch">Lunch (11:30 AM - 3:00 PM)</option>
                  <option value="dinner">Dinner (5:30 PM - 10:00 PM)</option>
                </select>
              </div>
              <textarea
                placeholder="Special Requests"
                rows="3"
                className="w-full p-3 bg-amber-700 border border-amber-500 text-white placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-white text-amber-800 hover:bg-amber-100 transition-colors font-bold"
              >
                RESERVE A TABLE
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <div className="bg-amber-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <span>(+254) 712063152</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            <span> Kilimani</span>
          </div>
          <div>
            <a
              href="#contact"
              className="px-4 py-2 border border-white hover:bg-white hover:text-amber-900 transition-colors text-sm"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

