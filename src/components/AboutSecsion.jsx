import React from 'react';

const AboutSecsion = () => {
    return (
        <div className="relative w-full overflow-hidden">


            {/* Hexagon Container */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    About <span className="text-blue-600">Lingo Bingo</span>
                </h2>
                <div className="relative">
                    {/* Hexagon Shape */}
                    <div className="relative w-80 h-86 md:w-4xl md:h-[400px] flex items-center justify-center ">
                        {/* SVG Hexagon */}
                        <svg className="absolute w-full h-full" viewBox="0 0 200 200">
                            <defs>
                                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                                    <feOffset dx="0" dy="4" result="offsetblur" />
                                    <feComponentTransfer>
                                        <feFuncA type="linear" slope="0.2" />
                                    </feComponentTransfer>
                                    <feMerge>
                                        <feMergeNode />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            <polygon
                                points="100,10 173,50 173,130 100,170 27,130 27,50"
                                fill="rgba(255, 255, 255, 0.95)"
                                stroke="rgba(59, 130, 246, 0.3)"
                                strokeWidth="2"
                                filter="url(#shadow)"
                            />
                        </svg>

                        {/* Content Inside Hexagon */}
                        <div className="relative z-20 text-center p-2 bg-gradient-to-b from-blue-400 to-blue-500">
                            <p className=" text-white leading-relaxed max-w-3xl mx-auto">
                                Lingo Bingo is a fun and interactive Japanese language learning website designed to make studying Japanese both easy and enjoyable
                                with engaging lessons, interactive tutorials, and vocabulary-building activities,
                                users can practice daily and improve fluency at their own pace.
                                <br />
                                Whether you're a beginner or advancing your skills,
                                Lingo Bingo helps you explore new words, strengthen memory, and gain confidence in communication.
                            </p>

                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 opacity-10">
                        <svg viewBox="0 0 200 200">
                            <polygon
                                points="100,10 173,50 173,130 100,170 27,130 27,50"
                                fill="rgba(59, 130, 246, 0.5)"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-20">
                <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-400 to-transparent transform skew-x-12"></div>
            </div>
        </div>
    );
};

export default AboutSecsion;