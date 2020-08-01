<script>
    import { Router, Link, Route } from 'svelte-routing';
    import FlightResults from './FlightResults.svelte';
    import Review from './Review.svelte';
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
        <Route path="/">
            <h1>Home</h1>
            <Link to="results/0">View results</Link>
        </Route>
    </Router>
</main>
