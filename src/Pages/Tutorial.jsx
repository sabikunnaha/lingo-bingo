import { useNavigate } from "react-router-dom";

const Tutorial = () => {
  const navigate = useNavigate();

  const videos = [
    "https://www.youtube.com/watch?v=rGrBHiuPlT0",
    "https://www.youtube.com/watch?v=K94rFS1Mcio", 
    "https://www.youtube.com/watch?v=FCtHKQk2Dc0",
    "https://www.youtube.com/watch?v=EK4YZPd7XE8",
    "https://www.youtube.com/watch?v=KUIWRsVZZZA",
    "https://www.youtube.com/watch?v=xGruG40wifQ",
    "https://www.youtube.com/watch?v=lEB4J-Db04g",
    "https://www.youtube.com/watch?v=eMtfzVC7emY",
  ];

  // 🔹 function: convert any youtube watch?v= link to embed link
  const convertToEmbed = (url) => {
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    return url;
  };

  const handleNavigate = () => {
    navigate("/learning");
  };

  return (
    <section className="min-h-screen px-6 py-12 bg-gradient-to-br from-indigo-50 to-purple-100 text-gray-700">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-10">
        🇯🇵 Japanese Language Tutorials
      </h1>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {videos.map((link, index) => (
          <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-md">
            <iframe
              width="100%"
              height="100%"
              src={convertToEmbed(link)}
              title={`Japanese Lesson ${index + 1}`}
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center">
        <button
          onClick={handleNavigate}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200"
        >
          Learn Vocabularies
        </button>
      </div>
    </section>
  );
};

export default Tutorial;
