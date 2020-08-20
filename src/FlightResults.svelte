<script>
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { getFlights } from './api';
    import { flightSelection, currentPage } from './stores';
    export let day;

    $: getFlightResults = getFlights(day);

    async function selectFlight(index) {
        const flightResults = await getFlightResults;
        $flightSelection = flightResults[index];
    }
</script>

<style>
    li {
        padding: 5px 2px;
    }

    li.selected {
        border: 1px dashed black;
    }

    button {
        margin: 0;
    }
</style>

<div in:fade>
    <h1>Flight results for day {day}</h1>
    {#await getFlightResults}
        <p>Loading...</p>
    {:then results}
        <ul>
            {#each results as flight, index}
                <li class:selected={$flightSelection === flight}>
                    {flight}
                    <button on:click={() => selectFlight(index)}>
                        Select this flight
                    </button>
                </li>
            {/each}
        </ul>
        {#if $flightSelection}
            <p>You selected: {$flightSelection}</p>
            <button on:click={() => ($currentPage = 'REVIEW')}>
                Confirm your selection
            </button>
        {/if}
    {:catch error}
        <p>Something went wrong</p>
    {/await}
</div>
