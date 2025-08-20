 
import { motion } from "framer-motion";
import { Users, BookOpen, Globe2 } from "lucide-react";

const AboutUs = () => {
    return (
     <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl bg-white shadow-lg rounded-2xl p-10"
      >
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">
          About Us
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
          Welcome to <span className="font-semibold text-blue-400">Lingo Bingo</span> –
          your fun and interactive way to expand your vocabulary and improve your
          communication skills! Learning a new language is often challenging, but
          we make it easier and more enjoyable. With simple, game-like learning
          methods, our app helps you remember words faster and use them in real
          conversations.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-indigo-50 p-6 rounded-xl shadow-sm"
          >
            <Users className="h-10 w-10 text-blue-400 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
            <p className="text-gray-600 text-center mt-2">
              To make language learning accessible, fun, and effective for
              everyone across the globe.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-purple-50 p-6 rounded-xl shadow-sm"
          >
            <BookOpen className="h-10 w-10 text-purple-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">Our Approach</h3>
            <p className="text-gray-600 text-center mt-2">
              Using interactive vocabulary games and Firebase-powered user
              accounts for personalized progress tracking.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-pink-50 p-6 rounded-xl shadow-sm"
          >
            <Globe2 className="h-10 w-10 text-pink-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
            <p className="text-gray-600 text-center mt-2">
              To build a global community of confident language learners who
              connect beyond borders.
            </p>
          </motion.div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-blue-500 mb-3">
            Why Choose Lingo Bingo?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We focus on real vocabulary retention through fun learning methods.
            With Firebase authentication, your progress is secure and always
            available. Start learning with just one click and enjoy your journey
            toward mastering a new language!
          </p>
        </div>
      </motion.div>
    </div>
    );
};

export default AboutUs;