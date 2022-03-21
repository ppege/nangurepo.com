import React from 'react'
import IconButton from './IconButton.js'
import { FaGithub, FaTwitter, FaDiscord, FaReddit } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="text-center lg:text-left dark:bg-gray-900 dark:text-gray-100 bg-gray-100 text-gray-600 fixed inset-x-0 bottom-0">
            <div className="text-center justify-center font-mono p-6 flex flex-col">
                <span>Copyright © 2022 <p className="text-gray-600 dark:text-gray-200 font-semibold inline">NanguRepo</p></span>
                <div className="flex flex-row justify-center mt-1">
                    <IconButton href="https://github.com/nangurepo" newTab={true} className="border-0 w-auto" icon={<FaGithub />} />
                    <IconButton href="https://twitter.com/ytnangu" newTab={true} className="border-0 w-auto" icon={<FaTwitter />} />
                    <IconButton href="https://discord.gg/xJK9VtVguF" newTab={true} className="border-0 w-auto" icon={<FaDiscord />} />
                    <IconButton href="https://reddit.com/u/nangu_" newTab={true} className="border-0 w-auto" icon={<FaReddit />} />
                </div>
            </div>
        </footer>
    );
}