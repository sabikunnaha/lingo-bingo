import AboutSecsion from "../components/AboutSecsion";
import Banner from "../components/Banner";
import Success from "../components/Success";
import AboutUs from "./AboutUs";
 


const Home = () => {
    return (
        <div className="lg:max-w-7xl mx-auto py-4">
            
        
               <Banner></Banner>
        
           <AboutSecsion></AboutSecsion>
             <Success></Success>
        </div>
    );
};

export default Home;