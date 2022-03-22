import React from 'react'
import Typewriter from 'typewriter-effect';

export default function Hero(props) {
    return (
        <>
            <h1 className="text-5xl md:text-7xl font-bold">
                <Typewriter onInit={(typewriter) => {typewriter.typeString(props.title).start();}}/>
            </h1>
            <h2 className="text-2xl md:text-3xl mt-5 fade-in">{props.subtitle}</h2>
        </>
    );
  }