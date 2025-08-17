import React from 'react'

const Home = () => {
    return (
        <div
            className="relative h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('https://tinder.com/static/build/8ad4e4299ef5e377d2ef00ba5c94c44c.webp')" }}
        >
              {/* Black transparent overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="text-4xl md:text-6xl lg:text-8xl font-bold z-10 text-center px-4">
                Start Something epic.
            </div>
        </div>
    )
}

export default Home
