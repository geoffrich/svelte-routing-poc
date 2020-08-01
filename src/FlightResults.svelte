<script>
    import { Link } from 'svelte-routing';
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { getFlights } from './api';
    import { flightSelection } from './stores';
    export let day;

    $: getFlightResults = getFlights(day);

    async function selectFlight(index) {
        const flightResults = await getFlightResults;
        $flightSelection = flightResults[index];
    }
</script>

<div in:fade>
    <h1>Flight results for day {day}</h1>
    {#await getFlightResults}
        <p>Loading...</p>
    {:then results}
        <Link to="/results/{+day - 1}">Previous day</Link>
        <Link to="/results/{+day + 1}">Next day</Link>
        <Link to="/">Home</Link>
        <ul>
            {#each results as flight, index}
                <li>
                    {flight}
                    <button on:click={() => selectFlight(index)}>
                        Select this flight
                    </button>
                </li>
            {/each}
        </ul>
        {#if $flightSelection}
            <p>You selected: {$flightSelection}</p>
            <Link to="/results/review">Confirm your selection</Link>
        {/if}
    {:catch error}
        <p>Something went wrong</p>
    {/await}
</div>
