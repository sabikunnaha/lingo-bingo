import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const StudentSay = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [itemsPerView, setItemsPerView] = useState(3);

    const testimonials = [
        {
            id: 1,
            name: "Md. Maruf Bin Soliman",
            role: "Lingo Bingo learner",
            batch: "Batch 7",
            image: "https://i.pravatar.cc/150?img=12",
            rating: 5,
            testimonial: `My dreamed of working in Japan’s tech industry. He joined Lingo Bingo to build his Japanese communication skills. After completing all the vocabulary challenges and video lessons, I successfully passed the JLPT N4 exam and got an internship offer from a Tokyo-based company.
            'Thanks to Lingo Bingo, I could learn Japanese anytime, anywhere — even during my coffee breaks!'`
        },
        {
            id: 2,
            name: "Minhaj Uddin Rafi",
            role: "Lingo Bingo learner",
            batch: "Batch 7",
            image: "https://i.pravatar.cc/150?img=13",
            rating: 5,
            testimonial: "I always felt nervous about learning a new language. But Lingo Bingo’s easy lessons and fun quizzes helped her gain confidence step by step. Now she can introduce herself, order food in Japanese, and read simple sentences."
        },
        {
            id: 3,
            name: "Sadia Afrin",
            role: "Lingo Bingo learner",
            batch: "Batch 7",
            image: "https://i.pravatar.cc/150?img=45",
            rating: 5,
            testimonial: "I planned a solo trip to Japan but didn’t know any Japanese. Using Lingo Bingo for just three months, he learned essential travel phrases and cultural expressions. During his trip, he could ask for directions, order at restaurants, and talk politely with locals."
        },
        {
            id: 4,
            name: "Rasal Ahmad",
            role: "Lingo Bingo learner",
            batch: "Batch 7",
            image: "https://i.pravatar.cc/150?img=14",
            rating: 5,
            testimonial: "I started learning Japanese as a weekend hobby. But soon, Lingo Bingo’s vocabulary games and lesson streaks turned her casual interest into a true passion. Now i studies Japanese literature and dreams of becoming a translator."
        },
        {
            id: 5,
            name: "Iqbal Hossain",
            role: "Lingo Bingo learner",
            batch: "Batch 7",
            image: "https://i.pravatar.cc/150?img=33",
            rating: 5,
            testimonial: "I started learning Japanese on Lingo Bingo because she wanted to understand her favorite anime without subtitles. Within six months, I mastered hiragana, katakana, and basic grammar. Now I confidently watches anime and even chats with Japanese friends online."
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setItemsPerView(5);
            } else if (window.innerWidth >= 1024) {
                setItemsPerView(4);
            } else if (window.innerWidth >= 768) {
                setItemsPerView(2);
            } else {
                setItemsPerView(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, testimonials.length - itemsPerView);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, maxIndex]);

    const handlePrev = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'
                    }`}
            />
        ));
    };

    return (
        <div className="py-12 px-4">
            <div className="max-w-[1600px] mx-auto">
                {/* Header */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 text-center mb-12 px-4">
                   <span className='text-gray-900'> Student</span> Success Stories
                </h2>

                {/* Carousel Container */}
                <div className="relative px-8 sm:px-12 py-12 ">
                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 shadow-lg"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-blue-200 via-blue-400 to-blue-500 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 shadow-lg"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    {/* Testimonials Grid */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
                            }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="flex-shrink-0 px-2 sm:px-3"
                                    style={{ width: `${100 / itemsPerView}%` }}
                                >
                                    <div className="bg-gradient-to-br from-blue-400 to-blue-500 backdrop-blur-md rounded-2xl p-5 sm:p-6 h-full border border-purple-600/30 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 flex flex-col">
                                        {/* Quote Icon and Rating */}
                                        <div className="flex items-start justify-between mb-4">
                                            <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-amber-50" />
                                            <div className="flex gap-0.5">
                                                {renderStars(testimonial.rating)}
                                            </div>
                                        </div>

                                        {/* Testimonial Text */}
                                        <p className="text-gray-200 text-xs sm:text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                                            {testimonial.testimonial}
                                        </p>

                                        {/* User Info */}
                                        <div className="flex items-center gap-3 pt-4 border-t border-purple-600/30">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-purple-400/40 flex-shrink-0"
                                            />
                                            <div className="flex-grow min-w-0">
                                                <h4 className="text-white font-semibold text-sm sm:text-base truncate">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-gray-300 text-xs sm:text-sm truncate">
                                                    {testimonial.role}
                                                </p>
                                                <p className="text-gray-400 text-xs truncate">
                                                    {testimonial.company}
                                                </p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {[...Array(maxIndex + 1)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setIsAutoPlaying(false);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'w-8 bg-amber-50'
                                    : 'w-2 bg-amber-50/100 hover:bg-purple-400/60'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentSay;