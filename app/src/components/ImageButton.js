import React from 'react'

export default function ImageButton(props) {
    return (
        <button type="button" onClick={() => {window.open(props.href, '_blank').focus()}} className={`bg-transparent flex flex-col text-4xl h-full w-full font-sans items-center justify-center text-black font-light py-2 px-4 dark:text-white ${props.className}`}>
            <div className="hvr-float-shadow">{props.image}</div>
            <div>{props.text}</div>
        </button>
    )
}