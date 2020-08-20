<script>
    import FlightResults from './FlightResults.svelte';
    import Review from './Review.svelte';
    import Home from './Home.svelte';
    import { currentPage } from './stores';

    let flightResultIndex = 1;
</script>

<style>
    main {
        padding: 1em;
        max-width: 700px;
        margin: 0 auto;
    }
</style>

<main>
    {#if $currentPage === 'REVIEW'}
        <Review />
    {:else}
        <FlightResults />
    {/if}

</main>
