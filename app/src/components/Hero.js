import React from 'react'

export default function Hero(props) {
    return (
        <div className="dark:bg-gray-800 relative flex h-screen font-mono dark:text-white">
            <div className="ml-40 mt-40 fade-in">
                <h1 className="text-7xl font-bold">{props.title}</h1>
                <h2 className="text-3xl mt-5">{props.subtitle}</h2>
            </div>
        </div>
    );
  }