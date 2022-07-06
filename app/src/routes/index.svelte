<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faGithub, faTwitter, faReddit, faDiscord, type IconDefinition } from '@fortawesome/free-brands-svg-icons'
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
    interface Project {
        name: string;
        url: string;
        description: string;
    }
    interface contactIcon {
        icon: IconDefinition;
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
let contactIcons: Array<contactIcon> = [
    {
        icon: faGithub,
        url: "https://github.com/nangurepo"
    }, {
        icon: faTwitter,
        url: "https://twitter.com/ytnangu"
    }, {
        icon: faReddit,
        url: "https://reddit.com/u/nangu_"
    }, {
        icon: faDiscord,
        url: "https://discord.gg/xJK9VtVguF"
    }, {
        icon: faEnvelope,
        url: "mailto:nanguthenangu@gmail.com"
    }
]
$: description = "On the left you'll see the projects I've made. Hover over them to see a description, and click to visit the project."
</script>

<svelte:head>
    <title>NanguRepo</title>
</svelte:head>

<body class="dark:bg-slate-800 dark:text-white selection:bg-black selection:text-white dark:selection:bg-yellow-100 dark:selection:text-black">
    <div class="ml-2 mr-2 sm:ml-20 sm:mr-20 sm:mt-5 mb-4">
        <div class="flex flex-row gap-1 bg-gradient-to-r from-purple-400 to-pink-600 w-full justify-center sm:justify-start sm:w-fit rounded py-2 px-2">
            {#each contactIcons as contactIcon}
            <button class="w-auto h-auto rounded text-center text-white hover:text-black" on:click={()=>window.open(contactIcon.url, '_blank')}>
                <Fa icon={contactIcon.icon} size="48" />
            </button>
            {/each}
        </div>
        <h1 class="text-5xl sm:text-6xl md:text-8xl font-extrabold text-transparent py-2 w-fit bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">NanguRepo</h1>
        <h2 class="text-2xl sm:text-4xl">I make web projects for fun.</h2>
        <div class="flex flex-col md:flex-row mt-5 w-full md:divide-x">
            <div class="rounded p-4 font-mono md:text-right md:w-1/2">
                <h3 class="text-3xl font-bold md:ml-auto w-fit bg-gradient-to-r from-blue-500 to-purple-400 text-white rounded">Projects</h3>
                <ul class="text-xl md:text-2xl mt-1 font-bold">
                    {#each projects as project}
                    <li>
                        <a 
                        class="dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white hover:before:content-['>'] hover:underline rounded px-1 py-1"
                        target="_blank"
                        href={project.url}
                        on:mouseover={()=>description = project.description}
                        on:focus={()=>description = project.description}
                        >
                            {project.name}
                        </a>
                    </li>
                    {/each}
                </ul>
            </div>
            <div class="rounded p-4 font-mono md:w-1/2">
                <h3 class="text-3xl font-bold w-fit bg-gradient-to-r from-pink-500 to-purple-400 text-white rounded">Description</h3>
                <p class="text-xl mt-1">
                    {description}
                </p>
            </div>
        </div>
    </div>
</body>