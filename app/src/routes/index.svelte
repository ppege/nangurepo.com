<script lang="ts">
    interface Project {
        name: string;
        url: string;
    }
    let projects: Array<Project> = [
        {
            name: "Viggoscrape",
            url: "https://viggoscrape.nangurepo.com",
        }, {
            name: "Collatz Conjecture Visualizer",
            url: "https://collatz.nangurepo.com",
        }, {
            name: "DVD Screensaver",
            url: "https://dvd.nangurepo.com",
        }, {
            name: "Assassin! Multi-tool (no longer maintained)",
            url: "https://assassin.nangurepo.com",
        }
    ]
</script>

<svelte:head>
    <title>NanguRepo</title>
</svelte:head>

<body class="dark:bg-slate-800 dark:text-slate-200">
    <div class="ml-20 mt-16">
        <button class="w-8 h-8 rounded bg-slate-300">a</button>
    </div>
    <div class="ml-20 mt-5">
        <h1 class="text-6xl">NanguRepo</h1>
        <h2 class="text-3xl">I make web projects for fun.</h2>
        <div class="mt-10 rounded border border-black dark:border-white p-4 font-mono">
            <h3 class="text-3xl font-bold underline">Projects</h3>
            <ul class="text-2xl mt-1 font-bold">
                {#each projects as project}
                <li>
                    <a 
                    class="dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white hover:before:content-['>'] hover:underline rounded px-1 py-1"
                    target="_blank"
                    href={project.url}
                    >
                        {project.name}
                    </a>
                </li>
                {/each}
            </ul>
        </div>
    </div>
</body>