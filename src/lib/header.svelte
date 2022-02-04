<script lang="ts">
	import Triangle from './triangle.svelte';
</script>

<header>
	<Triangle />
	<nav>
		<ul>
			<li><a sveltekit:prefetch href="/">home</a></li>
			<li><a sveltekit:prefetch href="about">about</a></li>
			<li><a sveltekit:prefetch href="posts">posts</a></li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		height: 4rem;
		margin: 0;
		box-sizing: border-box;
		width: 100%;
		display: flex;
		outline: solid red 1px;
	}
	nav {
		display: inline-block;
		// background-color: lightblue;
	}
	ul {
		height: 100%;
		display: flex;
		padding-left: 0;
		// flex-direction: row;
		// flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		list-style: none;
		list-style-type: none;
		list-style-position: initial;
		list-style-image: initial;
	}

	li {
		display: inline-block;
		width: 100px;
		list-style: none;
		width: calc(100% / 3);
		text-align: center;
		margin-right: 1rem;
	}
	li:hover {
		transform: skew(-0.02turn);
		background-color: papayawhip;
	}

	a {
		width: 100%;
		height: 100%;
		text-decoration: none;
		font-family: Arial, Helvetica, sans-serif;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
