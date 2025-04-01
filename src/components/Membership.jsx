import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";

export default function Membership() {
  return (
    <main className="w-full bg-amber-50 min-h-screen py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 mt-20">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            <span className="text-amber-700">Membership</span>
            <span className="text-amber-900">-options</span>
          </h1>
          <p className="text-amber-900 text-xl max-w-3xl mx-auto">
            Choose the membership that fits your lifestyle and sporting goals.
          </p>
        </div>

        {/* Membership Cards - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Full Member */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-amber-100">
            <div className="p-6">
              <div className="bg-amber-700 text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-4">
                2 years
              </div>
              <div className="h-16 w-16 mx-auto mb-4">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" stroke="#92400e" strokeWidth="2" />
                  <path
                    d="M30 50C30 38.954 38.954 30 50 30V70C38.954 70 30 61.046 30 50Z"
                    stroke="#92400e"
                    strokeWidth="2"
                  />
                  <path
                    d="M50 30C61.046 30 70 38.954 70 50C70 61.046 61.046 70 50 70"
                    stroke="#92400e"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-amber-900 text-center mb-2">Full Member</h2>
              <ul className="text-sm text-amber-900 mb-4 space-y-2">
                <li>• Access to all facilities</li>
                <li>• Priority booking</li>
                <li>• Free training sessions</li>
                <li>• Exclusive events</li>
                <li>• Personalized coaching</li>
                <li>• Member-only tournaments</li>
              </ul>
            </div>
            <div className="bg-amber-100 p-4 text-sm text-amber-900">
              <p>Our premium membership with complete access to all club benefits and exclusive privileges.</p>
            </div>
          </div>

          {/* Nominated Member */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-amber-100">
            <div className="p-6">
              <div className="bg-amber-700 text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-4">
                1 year
              </div>
              <div className="h-16 w-16 mx-auto mb-4">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect x="25" y="25" width="50" height="50" stroke="#92400e" strokeWidth="2" />
                  <path d="M25 25L75 75" stroke="#92400e" strokeWidth="2" />
                  <path d="M50 25V75" stroke="#92400e" strokeWidth="2" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-amber-900 text-center mb-2">Nominated Member</h2>
              <ul className="text-sm text-amber-900 mb-4 space-y-2">
                <li>• Exclusive voting rights</li>
                <li>• Leadership opportunities</li>
                <li>• VIP event access</li>
                <li>• Special recognition</li>
                <li>• Networking privileges</li>
              </ul>
            </div>
            <div className="bg-amber-100 p-4 text-sm text-amber-900">
              <p>For those seeking leadership roles and a voice in club decisions and direction.</p>
            </div>
          </div>

          {/* Overseas Member */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-amber-100">
            <div className="p-6">
              <div className="bg-amber-700 text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-4">
                8 months
              </div>
              <div className="h-16 w-16 mx-auto mb-4">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" stroke="#92400e" strokeWidth="2" />
                  <path d="M30 30L70 70" stroke="#92400e" strokeWidth="2" />
                  <path d="M30 70L70 30" stroke="#92400e" strokeWidth="2" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-amber-900 text-center mb-2">Overseas Member</h2>
              <ul className="text-sm text-amber-900 mb-4 space-y-2">
                <li>• Online coaching</li>
                <li>• Virtual event access</li>
                <li>• Exclusive updates</li>
                <li>• Merchandise discounts</li>
                <li>• Limited in-person privileges</li>
              </ul>
            </div>
            <div className="bg-amber-100 p-4 text-sm text-amber-900">
              <p>Perfect for members who live abroad but want to maintain their connection to the club.</p>
            </div>
          </div>

          {/* Junior Member */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-amber-100">
            <div className="p-6">
              <div className="bg-amber-700 text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-4">
                8 months
              </div>
              <div className="h-16 w-16 mx-auto mb-4">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M30 70C30 50 50 30 70 30" stroke="#92400e" strokeWidth="2" />
                  <path d="M30 50C30 40 40 30 50 30" stroke="#92400e" strokeWidth="2" />
                  <path d="M30 30H70" stroke="#92400e" strokeWidth="2" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-amber-900 text-center mb-2">Junior Member</h2>
              <ul className="text-sm text-amber-900 mb-4 space-y-2">
                <li>• Training programs</li>
                <li>• Mentorship</li>
                <li>• Skill development</li>
                <li>• Competitions</li>
                <li>• Social events</li>
                <li>• Youth-focused facilities</li>
              </ul>
            </div>
            <div className="bg-amber-100 p-4 text-sm text-amber-900">
              <p>Designed for young athletes looking to develop their skills in a supportive environment.</p>
            </div>
          </div>
        </div>

        {/* Membership Cards - Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* Life Member */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-amber-100">
            <div className="p-6">
              <div className="bg-amber-700 text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-4">
                2 years
              </div>
              <div className="h-16 w-16 mx-auto mb-4">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path
                    d="M25 50C25 36.193 36.193 25 50 25V75C36.193 75 25 63.807 25 50Z"
                    stroke="#92400e"
                    strokeWidth="2"
                  />
                  <path
                    d="M50 25C63.807 25 75 36.193 75 50C75 63.807 63.807 75 50 75"
                    stroke="#92400e"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-amber-900 text-center mb-2">Life Member</h2>
              <ul className="text-sm text-amber-900 mb-4 space-y-2">
                <li>• Lifelong access to facilities</li>
                <li>• VIP privileges</li>
                <li>• Exclusive events</li>
                <li>• Voting rights</li>
                <li>• Special recognition</li>
              </ul>
            </div>
            <div className="bg-amber-100 p-4 text-sm text-amber-900">
              <p>For dedicated members who have shown exceptional commitment to the club.</p>
            </div>
          </div>

          {/* Upcountry Member */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-amber-100">
            <div className="p-6">
              <div className="bg-amber-700 text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-4">
                1 year
              </div>
              <div className="h-16 w-16 mx-auto mb-4">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect x="25" y="25" width="50" height="50" rx="10" stroke="#92400e" strokeWidth="2" />
                  <path d="M40 40L60 60" stroke="#92400e" strokeWidth="2" />
                  <path d="M40 60L60 40" stroke="#92400e" strokeWidth="2" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-amber-900 text-center mb-2">Upcountry Member</h2>
              <ul className="text-sm text-amber-900 mb-4 space-y-2">
                <li>• Seasonal access</li>
                <li>• Discounted rates</li>
                <li>• Priority booking</li>
                <li>• Regional meetups</li>
                <li>• Flexible participation options</li>
              </ul>
            </div>
            <div className="bg-amber-100 p-4 text-sm text-amber-900">
              <p>Ideal for members who live at a distance but visit regularly throughout the year.</p>
            </div>
          </div>

          {/* Temporary Member */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-amber-100">
            <div className="p-6">
              <div className="bg-amber-700 text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-4">
                6 months
              </div>
              <div className="h-16 w-16 mx-auto mb-4">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M30 30H70V70H30V30Z" stroke="#92400e" strokeWidth="2" />
                  <path d="M40 50H60" stroke="#92400e" strokeWidth="2" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-amber-900 text-center mb-2">Temporary Member</h2>
              <ul className="text-sm text-amber-900 mb-4 space-y-2">
                <li>• Short-term access</li>
                <li>• Limited facilities</li>
                <li>• Trial sessions</li>
                <li>• Event participation</li>
                <li>• No long-term commitment</li>
              </ul>
            </div>
            <div className="bg-amber-100 p-4 text-sm text-amber-900">
              <p>A trial membership for those who want to experience our club before committing.</p>
            </div>
          </div>

          {/* Honorary Life Member */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-amber-100">
            <div className="p-6">
              <div className="bg-amber-700 text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-4">
                10 years
              </div>
              <div className="h-16 w-16 mx-auto mb-4">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="50" cy="50" r="25" stroke="#92400e" strokeWidth="2" />
                  <path d="M25 50H75" stroke="#92400e" strokeWidth="2" />
                  <path d="M50 25V75" stroke="#92400e" strokeWidth="2" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-amber-900 text-center mb-2">Honorary Life Member</h2>
              <ul className="text-sm text-amber-900 mb-4 space-y-2">
                <li>• Lifelong recognition</li>
                <li>• VIP privileges</li>
                <li>• Exclusive events access</li>
                <li>• Prestige</li>
                <li>• No membership fees</li>
              </ul>
            </div>
            <div className="bg-amber-100 p-4 text-sm text-amber-900">
              <p>Our highest honor, awarded to those who have made exceptional contributions to the club.</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative h-64 md:h-80 mb-20 rounded-xl overflow-hidden">
          <img
            src="/community.jpg"
            alt="Sports club members"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-amber-900 bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center px-4">Join Our Community Today</h2>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">Membership Inquiry</h2>
          <p className="text-amber-700 mb-8 text-center">
            Have questions about our membership options? Fill out the form below and we'll get back to you.
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-amber-900 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-amber-300" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="pl-10 w-full rounded-md border border-amber-200 py-2 px-3 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-amber-300" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="pl-10 w-full rounded-md border border-amber-200 py-2 px-3 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-amber-900 mb-1">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="text-amber-300" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  className="pl-10 w-full rounded-md border border-amber-200 py-2 px-3 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="+254 712345678"
                />
              </div>
            </div>
            <div>
              <label htmlFor="membership" className="block text-sm font-medium text-amber-900 mb-1">
                Membership Type
              </label>
              <select
                id="membership"
                className="w-full rounded-md border border-amber-200 py-2 px-3 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
              >
                <option value="">Select a membership type</option>
                <option value="full">Full Member</option>
                <option value="nominated">Nominated Member</option>
                <option value="overseas">Overseas Member</option>
                <option value="junior">Junior Member</option>
                <option value="life">Life Member</option>
                <option value="upcountry">Upcountry Member</option>
                <option value="temporary">Temporary Member</option>
                <option value="honorary">Honorary Life Member</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-amber-900 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-md border border-amber-200 py-2 px-3 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
                placeholder="I'm interested in learning more about..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-amber-800 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">How do I upgrade my membership?</h3>
              <p className="text-amber-700">
                You can upgrade your membership at any time by contacting our membership office or filling out the
                inquiry form above.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Are there family membership options?</h3>
              <p className="text-amber-700">
                Yes, we offer special family rates. Please contact our membership office for more details.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Can I freeze my membership temporarily?</h3>
              <p className="text-amber-700">
                Yes, members can freeze their membership for up to 3 months per year. Additional terms may apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}