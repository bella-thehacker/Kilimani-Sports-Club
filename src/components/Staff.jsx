import { FaFutbol, FaDumbbell, FaTrophy, FaBasketballBall, FaSwimmer } from "react-icons/fa"
import { GiTennisCourt, GiWaterSplash } from "react-icons/gi"

export default function Staff() {
  return (
    <main className="w-full bg-amber-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-amber-800 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/team-pic.jpg"
            alt="Sports coaches team"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber-700 text-white px-4 py-2 rounded-lg mb-4">
            <FaTrophy className="inline-block mr-2" />
            Elite Coaching Staff
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-10">Meet Our Elite Team</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Our club is home to some of the most accomplished professionals in the world of sports. With decades of
            experience, record-breaking achievements, and unmatched dedication, they ensure our athletes reach their
            full potential.
          </p>
        </div>
      </section>

      {/* Featured Coach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="w-full md:w-1/2 h-80 md:h-auto relative">
            <img
              src="/cavil.jpg"
              alt="Coach Adrian Carter"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 bg-amber-700 text-white py-2 px-4 rounded-br-lg">
              <FaFutbol className="inline-block mr-2" />
              Head of Football
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-2">Coach Adrian Gachagua</h2>
            <div className="flex items-center mb-4">
              <div className="h-1 w-20 bg-amber-500 mr-4"></div>
              <span className="text-amber-700 font-medium">Football Strategist</span>
            </div>
            <p className="text-amber-900 mb-6">
              A world-renowned football strategist with over 20 years of experience coaching elite teams. Known for
              developing game-changing tactics, Coach Carter has mentored multiple players to international success.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Game Strategy</span>
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Player Development</span>
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Team Building</span>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Dr. Emily Rhodes */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col h-full">
            <div className="h-64 relative">
              <img
                src="/lupita.jpg"
                alt="Dr. Emily Rhodes"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 bg-amber-700 text-white py-2 px-4 rounded-br-lg">
                <FaDumbbell className="inline-block mr-2" />
                Head of Fitness
              </div>
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Dr. Emily Wairimu</h3>
              <div className="flex items-center mb-4">
                <div className="h-1 w-16 bg-amber-500 mr-4"></div>
                <span className="text-amber-700 font-medium">Sports Scientist</span>
              </div>
              <p className="text-amber-900">
                A record-breaking sports scientist specializing in high-performance training. Dr. Rhodes has worked with
                Olympic athletes and revolutionized fitness programs with cutting-edge methodologies.
              </p>
            </div>
            <div className="p-6 pt-0">
              <div className="flex flex-wrap gap-2">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Performance Training</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Sports Science</span>
              </div>
            </div>
          </div>

          {/* Alexander Novak */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col h-full">
            <div className="h-64 relative">
              <img
                src="/zendaya.jpg"
                alt="Alexander Novak"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 bg-amber-700 text-white py-2 px-4 rounded-br-lg">
                <GiTennisCourt className="inline-block mr-2" />
                Head of Tennis
              </div>
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Alexander Ndanu</h3>
              <div className="flex items-center mb-4">
                <div className="h-1 w-16 bg-amber-500 mr-4"></div>
                <span className="text-amber-700 font-medium">Grand Slam Champion</span>
              </div>
              <p className="text-amber-900">
                A former Grand Slam champion turned coach, Novak brings his unstoppable energy and strategic brilliance
                to the court. His coaching has produced multiple top-ranked players on the global stage.
              </p>
            </div>
            <div className="p-6 pt-0">
              <div className="flex flex-wrap gap-2">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Technical Excellence</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Match Strategy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Staff */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Coach Marcus Reed */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col h-full">
            <div className="h-48 relative">
              <img
                src="/idris.jpg"
                alt="Coach Marcus Reed"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 bg-amber-700 text-white py-1 px-3 rounded-br-lg">
                <FaBasketballBall className="inline-block mr-1" size={14} />
                <span className="text-sm">Head of Basketball</span>
              </div>
            </div>
            <div className="p-5 flex-grow">
              <h3 className="text-xl font-bold text-amber-900 mb-1">Coach Marcus Biwott</h3>
              <div className="flex items-center mb-3">
                <div className="h-1 w-12 bg-amber-500 mr-3"></div>
                <span className="text-amber-700 font-medium text-sm">Tactical Genius</span>
              </div>
              <p className="text-amber-900 text-sm">
                A tactical genius and former NBA coach, Reed has led teams to championship victories and developed
                training programs that redefine elite basketball performance.
              </p>
            </div>
          </div>

          {/* Sophia Laurent */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col h-full">
            <div className="h-48 relative">
              <img
                src="/sza.jpg"
                alt="Sophia Laurent"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 bg-amber-700 text-white py-1 px-3 rounded-br-lg">
                <FaSwimmer className="inline-block mr-1" size={14} />
                <span className="text-sm">Head of Swimming</span>
              </div>
            </div>
            <div className="p-5 flex-grow">
              <h3 className="text-xl font-bold text-amber-900 mb-1">Sophia Njogu</h3>
              <div className="flex items-center mb-3">
                <div className="h-1 w-12 bg-amber-500 mr-3"></div>
                <span className="text-amber-700 font-medium text-sm">Former Olympian</span>
              </div>
              <p className="text-amber-900 text-sm">
                A record-smashing former Olympian, Laurent's expertise in speed, technique, and endurance has
                transformed swimmers into champions on the international stage.
              </p>
            </div>
          </div>

          {/* Julian Hart */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col h-full">
            <div className="h-48 relative">
              <img
                src="/brent.jpg"
                alt="Julian Hart"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 bg-amber-700 text-white py-1 px-3 rounded-br-lg">
                <FaDumbbell className="inline-block mr-1" size={14} />
                <span className="text-sm">Head of Squash</span>
              </div>
            </div>
            <div className="p-5 flex-grow">
              <h3 className="text-xl font-bold text-amber-900 mb-1">Julian Waweru</h3>
              <div className="flex items-center mb-3">
                <div className="h-1 w-12 bg-amber-500 mr-3"></div>
                <span className="text-amber-700 font-medium text-sm">World Champion</span>
              </div>
              <p className="text-amber-900 text-sm">
                With multiple world titles to his name, Hart's dynamic approach to squash coaching ensures that our
                players dominate at the highest levels.
              </p>
            </div>
          </div>
        </div>

        {/* Dr. Ava Sinclair */}
        <div className="mt-6">
          <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 h-48 md:h-auto relative">
              <img
                src="/tems.jpg"
                alt="Dr. Ava Sinclair"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 bg-amber-700 text-white py-1 px-3 rounded-br-lg">
                <GiWaterSplash className="inline-block mr-1" size={14} />
                <span className="text-sm">Head of Massage & Recovery</span>
              </div>
            </div>
            <div className="w-full md:w-2/3 p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-1">Dr. Ava Aludo</h3>
              <div className="flex items-center mb-3">
                <div className="h-1 w-12 bg-amber-500 mr-3"></div>
                <span className="text-amber-700 font-medium text-sm">Sports Therapy Expert</span>
              </div>
              <p className="text-amber-900">
                An expert in sports therapy and recovery, Dr. Sinclair has worked with the world's top athletes,
                ensuring they stay at peak performance through cutting-edge recovery techniques.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Recovery Protocols</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Injury Prevention</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Sports Massage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Legacy Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Legacy</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Train under the best, perform at the highest level. Discover what it means to push beyond your limits.
          </p>
          <div className="inline-block bg-white text-amber-900 px-6 py-3 rounded-lg font-bold hover:bg-amber-100 transition-colors duration-300 cursor-pointer">
            Contact Us
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-md relative">
          <div className="text-6xl text-amber-200 absolute top-6 left-6">"</div>
          <div className="relative z-10">
            <p className="text-xl md:text-2xl text-amber-900 italic mb-6 max-w-4xl mx-auto text-center">
              The coaching staff at this club is truly world-class. Their expertise and dedication have transformed my
              game and pushed me to levels I never thought possible.
            </p>
            <div className="text-center">
              <p className="font-bold text-amber-800">James Wang'ondu</p>
              <p className="text-amber-700">Junior Tennis Champion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-amber-100 rounded-lg p-6">
            <div className="text-4xl font-bold text-amber-900 mb-2">20+</div>
            <div className="text-amber-700">Elite Coaches</div>
          </div>
          <div className="bg-amber-100 rounded-lg p-6">
            <div className="text-4xl font-bold text-amber-900 mb-2">150+</div>
            <div className="text-amber-700">Championships Won</div>
          </div>
          <div className="bg-amber-100 rounded-lg p-6">
            <div className="text-4xl font-bold text-amber-900 mb-2">500+</div>
            <div className="text-amber-700">Athletes Trained</div>
          </div>
          <div className="bg-amber-100 rounded-lg p-6">
            <div className="text-4xl font-bold text-amber-900 mb-2">30+</div>
            <div className="text-amber-700">Years of Excellence</div>
          </div>
        </div>
      </section>
    </main>
  )
}

