<script>
    import { Router, Link, Route } from 'svelte-routing';
    import FlightResults from './FlightResults.svelte';
    import Review from './Review.svelte';
    import { currentPage } from './stores';
    import Home from './Home.svelte';
    export let url = '';
</script>

<style>
    main {
        padding: 1em;
        max-width: 700px;
        margin: 0 auto;
    }
</style>

<main>
    <Router {url}>
        <Route path="results/:day" component={FlightResults} />
        <Route path="results/review" component={Review} />
        <Route path="/" component={Home} />
    </Router>
    <p aria-live="assertive" aria-atomic="true">Navigated to {$currentPage}</p>
</main>
