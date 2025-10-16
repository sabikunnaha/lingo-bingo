import { useEffect, useState } from 'react';
import slide1 from '../assets/slide1.png'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'

const Banner = () => {

    const slides = [slide1, slide2, slide3];
    const [current, setCurrent] = useState(0);

    // Auto change every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000); // 3 seconds

        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
                {slides.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className={`absolute w-full h-full object-cover transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}

                {/* Manual Controls (optional) */}
                <div className="absolute inset-0 flex items-center justify-between px-5">
                    <button
                        onClick={() =>
                            setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
                        }
                        className="btn btn-circle"
                    >
                        ❮
                    </button>
                    <button
                        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
                        className="btn btn-circle"
                    >
                        ❯
                    </button>
                </div>
            </div>
            <div className='flex flex-col items-center justify-start mt-30'>
                <h2 className='text-xl text-blue-400'>LINGO BINGO</h2>
                <p className=' text-gray-700'>Japanese language learning website</p>
            </div>
        </div>
    );
};

export default Banner;
