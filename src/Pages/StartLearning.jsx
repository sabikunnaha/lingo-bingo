import { useNavigate } from "react-router-dom";

const StartLearning = () => {

    const navigate = useNavigate();


    const lessons = Array.from({ length: 10 }, (_, i) => i + 1);


    const handleLessonClick = (lessonNo) => {
        navigate(`/lesson/${lessonNo}`);
    };


    const handleViewMore = () => {
        if (user) {
            navigate("/tutorials");
        } else {
            alert("Please login to view more tutorials.");
        }
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-8">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">
                Let’s Learn
            </h1>


            {/* Lessons Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {lessons.map((lesson) => (
                    <div
                        key={lesson}
                        onClick={() => handleLessonClick(lesson)}
                        className="cursor-pointer bg-white shadow-md rounded-xl p-6 flex items-center justify-center text-lg font-semibold text-indigo-600 hover:bg-indigo-100 transition"
                    >
                        Lesson {lesson}
                    </div>
                ))}
            </div>


            {/* Tutorial Section */}
            <div className="max-w-4xl mx-auto mt-16 bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">
                    Alphabet Learning Tutorial
                </h2>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        className="w-full h-80 rounded-lg"
                        src="https://www.youtube.com/embed/d0yGdNEWdn0"
                        title="Alphabet Tutorial"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>


                {/* View More Button */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleViewMore}
                        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition"
                    >
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StartLearning;