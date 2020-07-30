<script>
    import { Link } from 'svelte-routing';
    export let day;
</script>

<h1>Flight results for day {day}</h1>
<Link to="/results/{+day - 1}">Previous day</Link>
<Link to="/results/{+day + 1}">Next day</Link>
<Link to="/">Home</Link>
