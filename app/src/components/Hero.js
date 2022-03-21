import React from 'react'
import Typewriter from 'typewriter-effect';

export default function Hero(props) {
    return (
        <>
            <h1 className="text-7xl font-bold">
                <Typewriter onInit={(typewriter) => {typewriter.typeString(props.title).start();}}/>
            </h1>
            <h2 className="text-3xl mt-5">{props.subtitle}</h2>
        </>
    );
  }