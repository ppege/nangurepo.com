import React from 'react'
import IconButton from './IconButton.js'
import { FaGithub, FaTwitter, FaDiscord, FaReddit } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="text-center lg:text-left dark:bg-gray-900 dark:text-gray-100 bg-gray-100 text-gray-600 mb-auto push-up">
            <div className="text-center justify-center items-center divide-x-2 font-mono p-6 flex flex-row">
                <div>
                    <span>Copyright © 2022 <p className="text-gray-600 dark:text-gray-200 font-semibold inline mr-8">NanguRepo</p></span>
                </div>
                <div className="flex flex-row pl-4">
                    <IconButton href="https://github.com/nangurepo" newTab={true} className="border-0 w-auto" icon={<FaGithub />} />
                    <IconButton href="https://twitter.com/ytnangu" newTab={true} className="border-0 w-auto" icon={<FaTwitter />} />
                    <IconButton href="https://discord.gg/xJK9VtVguF" newTab={true} className="border-0 w-auto" icon={<FaDiscord />} />
                    <IconButton href="https://reddit.com/u/nangu_" newTab={true} className="border-0 w-auto" icon={<FaReddit />} />
                </div>
            </div>
        </footer>
    );
}