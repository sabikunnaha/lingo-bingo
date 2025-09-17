import { useState } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";


const Lessons = () => {

    const [modalData, setModalData] = useState()
    const { id } = useParams();
    const allData = useLoaderData();
    const navigate = useNavigate();


    const lessonsData = allData.filter((item) => item.lesson_no === parseInt(id));
    console.log(lessonsData);


    const getCardColor = (difficulty) => {
        if (difficulty === "easy") {
            return "bg-green-100"
        }
        else if (difficulty === "medium") {
            return "bg-yellow-100"
        }
        else if (difficulty === "hard") {
            return "bg-red-100"
        }
        else {
            return "bg-gray-100"
        }
    }


    // "pronunciation": "kiku",
    // "meaning": "to listen / to ask",
    // "part_of_speech": "verb",
    // "difficulty": "medium",
    // "lesson_no": 2,
    // "when_to_say": "Used for listening or asking questions.",
    // "example": "音楽を聞きます。 (ongaku o kikimasu.) - I listen to music."
    // ( word, meaning,  when to say , example ) 

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-100 dark:bg-none py-12 px-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-blue-400 mb-6 text-center">
                    📘 Lesson {id}
                </h1>

                {lessonsData.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {lessonsData.map((lesson) => (
                            <div className={` ${getCardColor(lesson.difficulty)}  max-w-xs rounded-md shadow-md text-gray-800`}>
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-semibold text-center tracking-wide">Word: {lesson?.word}</h2>
                                        <p className="text-center font-semibold text-gray-800">Pronunciation: {lesson.pronunciation}</p>
                                        <p className="text-center font-semibold text-gray-800">Meaning: {lesson.meaning}</p>
                                        <p className="text-center font-semibold text-gray-800">Part of speech: {lesson.part_of_speech}</p>
                                    </div>

                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="btn bg-blue-400 border-none" onClick={() => { setModalData(lesson); document.getElementById('my_modal_1').showModal() }}>When to say</button>
                                    <dialog id="my_modal_1" className="modal dark:text-white">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">Word: {modalData?.word}</h3>
                                            <h3 className="font-bold text-lg">Meaning: {modalData?.meaning}</h3>
                                            <p className="py-4">When to say: {modalData?.when_to_say}</p>
                                            <p className="py-4">Example: {modalData?.example}</p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">
                        No data found for this lesson.
                    </p>
                )}
                <div className="flex items-center justify-center mt-3">
                
                    <button
                        className="btn btn-outline border-blue-300 text-blue-400 mt-6"
                        onClick={() => navigate("/learning")}
                    >
                        Back to Lesson
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Lessons;