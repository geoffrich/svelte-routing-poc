<script>
    import { flightSelection, currentPage } from './stores';
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';

    let pageHeading;
    onMount(() => pageHeading.focus());
</script>

<div in:fly={{ duration: 300, x: 100, opacity: 0.5 }}>
    <h1 tabindex="-1" bind:this={pageHeading}>Review new itinerary</h1>
    {#if $flightSelection}
        <p>Selected flight: {$flightSelection}</p>
    {:else}
        <p>No flight selected</p>
    {/if}
    <button on:click={() => ($currentPage = 'RESULTS')}>
        Pick another flight
    </button>
</div>
