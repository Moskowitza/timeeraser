<script context="module" lang="ts">
	export async function load({ params, fetch, session, stuff }) {
		const posts = import.meta.globEager('../../markdownPosts/*.md');
		console.log(posts);
		return {};
	}
</script>

<div class="container">
	<nav>
		<a href="/">home</a>
		<a href="/posts/one">one</a>
		<a href="/posts/two">two</a>
	</nav>
	<slot />
</div>

<style>
	.container {
		width: 40%;
		background-color: lightgray;
		margin: auto;
	}
</style>
