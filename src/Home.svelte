<script>
    import { Link } from 'svelte-routing';
    import { currentPage } from './stores';

    currentPage.set('Home');
</script>

<h1>Home</h1>
<Link to="results/0">View results</Link>
