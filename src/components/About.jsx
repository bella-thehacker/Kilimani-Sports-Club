import { FaFutbol, FaRunning, FaTrophy } from "react-icons/fa";

export default function About() {
  return (
    <main className="w-full bg-amber-50">
      <section className="bg-amber-200 relative text-amber-900 py-16 px-6 flex flex-col items-center mb-12 mt-5">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center mt-20">Our Sports Club Journey</h1>
          <img
            src="/cutsie.gif"
            alt="Shoe Animation"
            className="w-full max-w-3xl h-auto object-cover mx-auto rounded-lg shadow-lg"
          />
          <div className="bg-white bg-opacity-80 p-6 md:p-8 mt-6 rounded-lg shadow-md max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center italic">
              "Every journey begins with a single step. Push your limits, chase your dreams, and make history with us."
            </h2>
          </div>
        </div>
      </section>

      <div className="flex flex-col w-full">
        <section className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2 bg-amber-100 p-8 md:p-12 flex flex-col justify-center">
            <div className="w-16 h-4 bg-amber-800 mb-6 rounded-sm"></div>
            <h3 className="text-2xl font-semibold text-amber-900 mb-4">Our Heritage</h3>
            <p className="text-amber-900 text-lg max-w-md">
              Founded in 1966, we've been the beating heart of local sports—unifying the community, championing athletic
              excellence, and nurturing talent through a welcoming and supportive environment.
            </p>
            <div className="flex mt-8 space-x-6">
              <FaTrophy className="text-amber-800 text-3xl" />
              <FaRunning className="text-amber-800 text-3xl" />
              <FaFutbol className="text-amber-800 text-3xl" />
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-amber-200 relative">
            <div className="w-full h-80 md:h-full relative">
              <img
                src="/cute-tennis.jpg"
                alt="Sports club hero image"
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 bg-amber-800 bg-opacity-80 text-white py-2 px-4">
                <span className="text-sm">Est. 1966</span>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/4 bg-amber-300 py-12 md:py-16 px-6 md:px-8 flex items-center justify-center">
            <h2 className="md:transform md:-rotate-90 text-amber-900 text-3xl md:text-4xl font-bold md:whitespace-nowrap">
              About Our Sports Club
            </h2>
          </div>
          <div className="w-full md:w-3/4 bg-white py-12 md:py-16 px-6 md:px-12">
            <div className="max-w-2xl mx-auto">
              <p className="text-amber-900 mb-6 leading-relaxed">
                Since our inception in 1966, our club has been a cornerstone for athletes eager to push their
                boundaries.
              </p>
              <p className="text-amber-900 mb-6 leading-relaxed">
                Over the decades, we've cultivated numerous champions and hosted tournaments that draw crowds from
                across the region.
              </p>
              <p className="text-amber-900 leading-relaxed">
                We value inclusivity, passion, and respect above all.
              </p>
              <div className="mt-8 border-t border-amber-200 pt-6">
                <h4 className="font-semibold text-amber-800 mb-2">Our Core Values</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Inclusivity</span>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Passion</span>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Respect</span>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Excellence</span>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Community</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2 bg-amber-200 relative order-2 md:order-1">
            <img src="/cool-ball.jpg" alt="Sports club community image" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/2 bg-amber-700 p-8 md:p-12 flex items-center order-1 md:order-2">
            <div>
              <h3 className="text-amber-100 text-2xl font-bold mb-4">Join Our Community</h3>
              <p className="text-amber-50 text-xl max-w-md leading-relaxed">
                Together, let's shape the future of sports in our community—one goal, one match, and one friendship at a
                time.
              </p>
              <button className="mt-6 bg-amber-50 hover:bg-white text-amber-800 font-semibold py-2 px-6 rounded-md transition-colors duration-300">
                Become a Member
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
