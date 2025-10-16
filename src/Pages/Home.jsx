import AboutSecsion from "../components/AboutSecsion";
import Banner from "../components/Banner";
import Success from "../components/Success";


const Home = () => {
    return (
        <div className=" bg-gradient-to-br from-indigo-50 to-purple-100 ">
            
        
              <div className="max-w-7xl mx-auto p-5 min-h-screen ">
                 <Banner></Banner>
              </div>
        
           <AboutSecsion></AboutSecsion>
             <Success></Success>
        </div>
    );
};

export default Home;