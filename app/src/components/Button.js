import React from 'react'

export default function Button(props) {
    return (
        <button type="button" onClick={() => {window.location.href=props.href}} className={`bg-transparent flex flex-col items-center justify-center text-black font-light hover:text-white hover:bg-black py-2 px-4 border border-black hover:border-transparent dark:text-white dark:hover:bg-white dark:hover:text-black dark:border-white rounded ${props.className}`}>
            <div>{props.text}</div>
        </button>
    )
}