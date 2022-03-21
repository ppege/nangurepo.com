import React from 'react'
import logo from '../logo.png'

export default function Header(props) {
  return (
      <>
        <nav className="bg-transparent fade-in-top px-2 sm:px-4 py-2.5 sticky top-0 z-50">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" className="flex items-center">
                <img src={logo} className="mr-3 h-6 sm:h-10 rounded-full" alt="NanguRepo Logo" />
                <span className="self-center text-xl font-semibold font-mono whitespace-nowrap dark:text-white">NanguRepo</span>
            </a>
            <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
                {[
                  ['Home', '/'],
                  ['My Projects', '/projects'],
                  ['Contact', '/contact'],
                  ['GitHub', '/github']
                ].map(([title, url]) => (
                  <li key={title}>
                    <a href={`/#${url}`} key={title} className={`navbar-item text-black dark:text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${title === props.page ? 'font-bold underline': 'hover-underline-animation'}`} aria-current="page">{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }