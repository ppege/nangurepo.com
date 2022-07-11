<script lang="ts">
    import { page } from '$app/stores';
    import MediaQuery from './MediaQuery.svelte';
    $: selected = $page.url.hash;
    const items = ["about", "projects", "posts"];
</script>

<div class="fixed h-16 z-40 w-full flex justify-between backdrop-blur-[20px] backdrop-saturate-150 bg-white/50 dark:bg-[#0D0D1050]">
    <nav class="w-full sm:max-w-[75ch] m-auto flex px-5 justify-between items-center">
        <div>
            <a href="/" class="hover:text-neutral-700 dark:hover:text-yellow-300 transition-colors">nangurepo</a>
        </div>
        <div>
            {#each items as item}
                <a
                class={`${selected.substring(1)===item?"text-black dark:text-yellow-300":""} navbar-item`} href={`#${item}`}
                >
                    {item}
                </a>
            {/each}
            <a class="navbar-item" href="https://github.com/nangurepo/nangurepo.com" target="_blank">github</a>
        </div>
    </nav>
</div>