<script>
	import Header from '$lib/header.svelte';
</script>

<!-- <Header /> -->
<nav>
	<a href="/">home</a>
	<a href="about">about</a>
</nav>
<Header />

<main>
	<slot />
</main>
<footer>footer</footer>
