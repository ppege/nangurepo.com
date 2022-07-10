<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
    import { page } from '$app/stores'
    import Fa from 'svelte-fa/src/fa.svelte'
    import Nav from './components/nav.svelte'
    interface Project {
        name: string;
        url: string;
        description: string;
    }
    interface contact {
        platform: string;
        url: string;
    }
    let projects: Array<Project> = [
        {
            name: "DVD Screensaver",
            url: "https://dvd.nangurepo.com",
            description: "A tool to generate your own version of the iconic DVD screensaver. You can tweak and customize it to your heart's content."
        }, {
            name: "Collatz Conjecture Visualizer",
            url: "https://collatz.nangurepo.com",
            description: "A web app that visualizes the Collatz Conjecture using a graph. Try giving it the numbers 25, 26 and 27. You'll see the randomness of it. Pretty cool 👍"
        }, {
            name: "Viggoscrape",
            url: "https://viggoscrape.nangurepo.com",
            description: "An unofficial API for Viggo, a danish school management website. It allows you to get assignment data to use in other applications."
        }, {
            name: "Viggo Viewer",
            url: "https://viewer.nangurepo.com",
            description: "A viewer for the Viggo website, as I didn't like the official one. Uses the Viggoscrape API, and by extension, the NanguRepo API."
        }, {
            name: "Assassin! Tools",
            url: "https://assassin.nangurepo.com",
            description: "A web app that helps find values of knives in the Roblox game, \"Assassin!\". I made this a while ago using vanilla JS, and I haven't updated the values in months. Don't use this for anything other than testing."
        }, {
            name: "NanguRepo API",
            url: "https://api.nangurepo.com",
            description: "The API used by my other projects. It's public, you can use it for your own projects if you'd like."
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
    <title>NanguRepo</title>
</svelte:head>

<body class="dark:bg-[#0D0D10] dark:text-neutral-400 selection:bg-black selection:text-white dark:selection:bg-yellow-300 dark:selection:text-black font-mono">
    <div class="w-full h-full">
        <header class="relative w-full h-16">
            <Nav/>
        </header>
        <main class="w-full">
            <article class="max-w-[75ch] mx-auto pt-20 pb-28 px-5">
                <h1 class="text-3xl font-black dark:text-white">This is NanguRepo</h1>
                <div class="mt-5">
                    <p>
                        I'm a hobbyist web developer, and this is my repository for my web projects. I do freelance work on <a class="link" href="https://fiverr.com/nangu_" target="_blank">Fiverr</a>, while also building some projects of my own when I get an interesting idea.
                    </p>
                    <p class="mt-6">
                        I'm also a frequent open source contributor and currently working on my latest project, my <a class="link" href="https://dvd.nangurepo.com" target="_blank">DVD screensaver generator</a>.
                    </p>
                    <p class="mt-6">
                        My goal is to create functional web experiences with function over form as the key philosophy. If you wish to reach out, find me on the interwebz.
                    </p>
                </div>
                <div class="flex flex-row w-full justify-center sm:justify-start sm:w-fit rounded gap-2 pt-2">
                    {#each contacts as contact}
                    <a class="button" href={contact.url} target="_blank">
                        {contact.platform}
                    </a>
                    {/each}
                </div>
                <h3 class="text-2xl font-bold dark:text-white mt-6">Projects</h3>
                <div class="divide-y dark:divide-neutral-700 -mt-4">
                    {#each projects as project}
                    <div class="py-6">
                        <a 
                        class="dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white hover:before:content-['>'] hover:underline rounded -ml-1 px-1 py-1 font-bold"
                        target="_blank"
                        href={project.url}
                        >
                            {project.name}
                        </a>
                        <p>
                            {project.description}
                        </p>
                    </div>
                    {/each}
                </div>
            </article>
        </main>
    </div>
</body>