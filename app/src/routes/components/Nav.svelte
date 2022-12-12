<script lang="ts">
    import { page } from '$app/stores';
    import MediaQuery from './MediaQuery.svelte';
    export let active: number = 0;
    const items = ["about", "projects", "posts"];
</script>

<div class="fixed h-16 z-40 w-full flex justify-between backdrop-blur-[20px] backdrop-saturate-150 bg-white/50 dark:bg-[#0D0D1050]">
    <nav class="w-full sm:max-w-[75ch] m-auto flex px-5 justify-between items-center">
        <div>
            <a href="/" class="hover:text-neutral-700 dark:hover:text-accent transition-colors">nangu</a>
        </div>
        <div>
            {#each items as item, index}
                <a
                class={`${active===index?"text-black dark:text-accent":""} navbar-item`} href={`#${item}`}
                >
                    {item}
                </a>
            {/each}
            <a class="navbar-item" href="https://github.com/nangurepo/nangurepo.com" target="_blank">github</a>
        </div>
    </nav>
</div>