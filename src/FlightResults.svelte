<script>
    import { Link } from 'svelte-routing';
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { getFlights } from './api';
    import { each } from 'svelte/internal';
    export let day;

    $: getFlightResults = getFlights(day);
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
            {#each results as flight}
                <li>{flight}</li>
            {/each}
        </ul>
    {:catch error}
        <p>Something went wrong</p>
    {/await}
</div>
