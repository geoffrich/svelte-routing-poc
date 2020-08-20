<script>
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { getFlights } from './api';
    import { flightSelection, currentPage } from './stores';

    let day = 1;

    let getFlightResults = getFlights();
    $flightSelection = null;

    async function selectFlight(index) {
        // promise already resolved so this should complete immediately
        // not sure if there's a better way
        const flightResults = await getFlightResults;
        $flightSelection = Object.values(flightResults)[day][index];
        $currentPage = 'REVIEW';
    }
</script>

<style>
    li {
        padding: 5px 2px;
    }

    button {
        margin: 0;
    }

    .button-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        gap: 1em;
    }

    button.selected {
        font-size: 1.5em;
        background: #0074cb;
        color: white;
    }
</style>

<div in:fly={{ duration: 300, x: -100, opacity: 0.5 }}>
    {#await getFlightResults}
        <p>Loading...</p>
    {:then results}
        <div class="button-container">
            {#each Object.keys(results) as date, index}
                <button
                    class:selected={day == index}
                    on:click={() => (day = index)}>
                    {date}
                </button>
            {/each}
        </div>
        <h1>Flight results for {Object.keys(results)[day]}</h1>
        <ul>
            {#each Object.values(results)[day] as flight, index}
                <li>
                    {flight}
                    <button on:click={() => selectFlight(index)}>
                        Select this flight
                    </button>
                </li>
            {/each}
        </ul>
    {:catch error}
        <p>Something went wrong</p>
    {/await}
</div>
