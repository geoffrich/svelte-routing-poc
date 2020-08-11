<script>
    import { Link } from 'svelte-routing';
    import { flightSelection, currentPage } from './stores';
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';

    onMount(() => {
        currentPage.set('Review new itinerary');
    });
</script>

<div in:fly={{ duration: 300, x: 100, opacity: 0.5 }}>
    <h1>Review new itinerary</h1>
    {#if $flightSelection}
        <p>Selected flight: {$flightSelection}</p>
    {:else}
        <p>No flight selected</p>
    {/if}
    <Link to="/results/0">Back to results</Link>
</div>
