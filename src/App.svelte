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

    .button-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
    }

    button {
        margin-right: 1em;
    }

    button.selected {
        font-size: 1.5em;
        background: #0074cb;
        color: white;
    }
</style>

<main>
    {#if $currentPage === 'REVIEW'}
        <Review />
    {:else}
        <div class="button-container">
            <button
                class:selected={flightResultIndex == 0}
                on:click={() => (flightResultIndex = 0)}>
                August 1
            </button>
            <button
                class:selected={flightResultIndex == 1}
                on:click={() => (flightResultIndex = 1)}>
                August 2
            </button>
            <button
                class:selected={flightResultIndex == 2}
                on:click={() => (flightResultIndex = 2)}>
                August 3
            </button>
        </div>
        <FlightResults day={flightResultIndex} />
    {/if}

</main>
