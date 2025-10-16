import AboutSecsion from "../components/AboutSecsion";
import Banner from "../components/Banner";
import StudentSay from "../components/StudentSay";
import Success from "../components/Success";


const Home = () => {
    return (
        <div className="overflow-hidden bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 ">
             {/* Background Image Effect */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-blue-400 to-transparent transform -skew-x-12"></div>
                <div className="absolute left-0 top-0 w-1/4 h-full">
                    <div className="grid grid-cols-3 gap-1 h-full p-4">
                        {[...Array(36)].map((_, i) => (
                            <div key={i} className="bg-blue-400 opacity-20"></div>
                        ))}
                    </div>
                </div>
            </div>
        
              <div className="max-w-7xl mx-auto p-5 min-h-screen pt-10 ">
                 <Banner></Banner>
              </div>
        
           <AboutSecsion></AboutSecsion>
             <Success></Success>
             <StudentSay></StudentSay>
        </div>
    );
};

export default Home;