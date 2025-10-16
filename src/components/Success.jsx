import CountUp from "react-countup";

const Success = () => {
    return (
        <section className="py-16 ">
            <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                    Our <span className="text-blue-600">Achievements</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14">
                    {/* User Count */}
                    <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-4xl font-bold text-blue-600">
                            <CountUp end={12000} duration={5} separator="," />+
                        </h3>
                        <p className="text-gray-600 mt-2">Active Users</p>
                    </div>

                    {/* Lesson Count */}
                    <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-4xl font-bold text-green-600">
                            <CountUp end={850} duration={5} />
                        </h3>
                        <p className="text-gray-600 mt-2">Lessons</p>
                    </div>

                    {/* Vocabulary Count */}
                    <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-4xl font-bold text-purple-600">
                            <CountUp end={5000} duration={5} />+
                        </h3>
                        <p className="text-gray-600 mt-2">Vocabularies</p>
                    </div>

                    {/* Tutorial Count */}
                    <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-4xl font-bold text-pink-600">
                            <CountUp end={120} duration={5} />+
                        </h3>
                        <p className="text-gray-600 mt-2">Tutorials</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Success;