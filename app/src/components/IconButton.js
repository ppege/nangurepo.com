import React from 'react'

export default function IconButton(props) {
    return (
        <button type="button" onClick={() => {props.newTab ? (window.open(props.href, '_blank').focus()):(window.location.href=props.href)
    }} className={`bg-transparent flex flex-col text-4xl h-full w-full font-sans items-center justify-center text-black font-light hover:text-white hover:bg-black py-3 px-4 border border-black hover:border-transparent dark:text-white dark:hover:bg-white dark:hover:text-black dark:border-white rounded ${props.className}`}>
            <div>{props.icon}</div>
            <div>{props.text}</div>
        </button>
    )
}