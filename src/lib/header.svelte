<script lang="ts">
	import Triangle from './triangle.svelte';
</script>

<header>
	<Triangle />

	<nav>
		<ul>
			<li><a href="/">home</a></li>
			<li><a href="about">about</a></li>
			<li><a href="posts">posts</a></li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		background: red;
		width: 100%;
		display: flex;
		nav {
			background-color: lightblue;
		}
	}
</style>
