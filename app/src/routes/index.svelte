<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
    import { page } from '$app/stores'
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faCode } from '@fortawesome/free-solid-svg-icons/index.es'
    import Nav from './components/nav.svelte'
    interface Project {
        name: string;
        description: string;
        url: string;
        source: string;
    }
    interface contact {
        platform: string;
        url: string;
    }
    let projects: Array<Project> = [
        {
            name: "DVD Screensaver Generator",
            description: "A tool to generate your own version of the iconic DVD screensaver. You can tweak and customize it to your heart's content. It's customizable from the speed at which it travels, to the images used, to what happens on collision.",
            url: "https://dvd.nangurepo.com",
            source: "https://github.com/nangurepo/dvd"
        }, {
            name: "Collatz Conjecture Visualizer",
            description: "A web app that visualizes the Collatz conjecture using a graph. The Collatz conjecture is one of the most famous unsolved problems in mathematics. The conjecture asks whether repeating two simple arithmetic operations will eventually transform every positive integer into 1.",
            url: "https://collatz.nangurepo.com",
            source: "https://github.com/nangurepo/collatz"
        }, {
            name: "Viggoscrape",
            description: "An unofficial API for Viggo, a danish school management website. It allows you to get assignment data to use in other applications. Through several iterations, I have gotten the response time down to less than a second. Viggo does have a built-in API, but it's extremely obscure, and I still haven't figured out how to use it.",
            url: "https://viggoscrape.nangurepo.com",
            source: "https://github.com/nangurepo/viggoscrapeapi/tree/page"
        }, {
            name: "Viggo Viewer",
            description: "A viewer for the Viggo website, as I didn't like the official one. Built with React. Powered by, you guessed it, Viggoscrape. And most importantly, it's open source. It even remembers your login details, so you don't have to login every time you visit the site. This is somehow not a feature on the official site.",
            url: "https://viewer.nangurepo.com",
            source: "https://github.com/nangurepo/vsc-viewer"
        }, {
            name: "Fessor Bot",
            description: "A Discord bot i made in the start of 2021 using discord.py. It has some uniquely useful commands, such as my personal favorite, /bury: clear the chat without deleting messages by having the bot send a shit ton of Zero-Width Non-Joiners. The bot is currently private, but if you need it on your server, contact me.",
            url: "/",
            source: "github.com/nangurepo/fessor"
        }, {
            name: "Assassin! Tools",
            description: "A web app that helps find values of knives in the Roblox game, \"Assassin!\". I made this a while ago using vanilla JS, and I haven't updated the values in months. Don't use this for anything other than testing. It was extremely useful, as the official value list is a spreadsheet with no search functionality.",
            url: "https://assassin.nangurepo.com",
            source: "https://github.com/nangurepo/assassinsearcher"
        }, {
            name: "NanguRepo API",
            description: "The API used by my other projects. It's public, you can use it for your own projects if you'd like. This is the API through which to access Viggoscrape. It was also used by the Assassin! Tools app.",
            url: "https://api.nangurepo.com",
            source: "https://github.com/nangurepo/viggoscrapeapi/tree/api"
        }
    ]
let contacts: Array<contact> = [
    {
        platform: "github",
        url: "https://github.com/nangurepo"
    }, {
        platform: "fiverr",
        url: "https://www.fiverr.com/Nangu_"
    }, {
        platform: "email",
        url: "mailto:nanguthenangu@gmail.com"
    }, {
        platform: "twitter",
        url: "https://twitter.com/ytnangu"
    }, {
        platform: "discord",
        url: "https://discord.gg/xJK9VtVguF"
    }
]
$: description = "On the left you'll see the projects I've made. Hover over them to see a description, and click to visit the project."
</script>

<svelte:head>
    <title>
        {$page.url.hash.charAt(1).toUpperCase() + $page.url.hash.substring(2)} - NanguRepo
    </title>
</svelte:head>

<html lang="en" class="scroll-smooth">
    <body class="dark:bg-[#0D0D10] dark:text-neutral-400 selection:bg-black selection:text-white dark:selection:bg-yellow-300 dark:selection:text-black font-mono scroll-smooth">
        <div class="w-full h-full">
            <header class="relative w-full h-16">
                <Nav/>
            </header>
            <main class="w-full">
                <article class="max-w-[75ch] mx-auto pt-20 pb-28 px-5" id="about">
                    <h1 class="text-3xl font-black dark:text-white">This is NanguRepo</h1>
                    <div class="mt-5">
                        <p>
                            I'm a hobbyist web developer, and this is my repository for my web projects. I do freelance work on <a class="link" href="https://fiverr.com/nangu_" target="_blank">Fiverr</a>, while also building some projects of my own when I get an interesting idea.
                        </p>
                        <p class="mt-6">
                            I'm also a frequent open source contributor and currently working on my latest project, my <a class="link" href="https://dvd.nangurepo.com" target="_blank">DVD screensaver generator</a>.
                        </p>
                        <p class="mt-6">
                            My goal is to create truly functional web experiences with function over form as a general rule. If you want to reach out, find me on the web.
                        </p>
                    </div>
                    <div class="flex flex-row w-full justify-center sm:justify-start sm:w-fit rounded gap-2 pt-2" id="projects">
                        {#each contacts as contact}
                        <a class="button font-sans" href={contact.url} target="_blank">
                            {contact.platform}
                        </a>
                        {/each}
                    </div>
                    <h2 class="text-2xl font-bold dark:text-white mt-6">Projects</h2>
                    <h3 class="text-xs">Click the title to visit the site.</h3>
                    <div class="divide-y dark:divide-neutral-700 -mt-4">
                        {#each projects as project}
                        <div class="py-6">
                            <div class="flex flex-row justify-between">
                                <h3><a 
                                class="dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white hover:before:content-['>'] hover:underline -ml-1 px-1 py-1 font-bold"
                                target="_blank"
                                href={project.url}
                                >
                                    {project.name}
                                </a></h3>
                                <a class="link flex flex-row items-center gap-1 text-xs h-fit" href={project.source} target="_blank">
                                    Source <Fa icon={faCode} size="10"/>
                                </a>
                            </div>
                            <p class="text-sm">
                                {project.description}
                            </p>
                        </div>
                        {/each}
                    </div>
                </article>
            </main>
        </div>
    </body>
</html>