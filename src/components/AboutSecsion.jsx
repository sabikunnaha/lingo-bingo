import React from 'react';

const AboutSecsion = () => {
    return (
        <section className="py-16 ">
            <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    About <span className="text-blue-600">Lingo Bingo</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Our mission is to make <span className="font-semibold">language learning fun and accessible</span> for everyone.
                    With engaging lessons, interactive tutorials, and vocabulary-building activities,
                    users can practice daily and improve fluency at their own pace.
                    <br />
                    Whether you're a beginner or advancing your skills,
                    Lingo Bingo helps you explore new words, strengthen memory, and gain confidence in communication.
                </p>
            </div>
        </section>
    );
};

export default AboutSecsion;