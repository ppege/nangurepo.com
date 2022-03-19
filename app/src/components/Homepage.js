import React from 'react'
import logo from "../logo.png"

export default function Homepage() {
    return (
        <div className="items-center justify-center relative flex mt-11">
            <img className="object-cover h-48 w-48 bg-indigo-300" src={logo} alt="logo"/>
            <h1 className="text-7xl font-mono font-bold">NanguRepo</h1>
        </div>
    );
  }