<script>
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
</script>

<!-- <Header /> -->

<Header />
<main>
	<article>
		<slot />
	</article>
	<aside>
		<h2>aside</h2>
		<ul>
			<li>item</li>
			<li>item</li>
			<li>item</li>
			<li>item</li>
			<li>item</li>
		</ul>
	</aside>
</main>
<Footer />

<style global>
	/*
  1. Use a more-intuitive box-sizing model.
*/
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	/*
  2. Remove default margin
*/
	* {
		margin: 0;
	}
	/*
  3. Allow percentage-based heights in the application
*/
	html,
	body {
		height: 100%;
	}
	/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
	body {
		line-height: 1.5;
		-webkit-font-smoothing: antialiased;
	}
	/*
  6. Improve media defaults
*/
	img,
	picture,
	video,
	canvas,
	svg {
		display: block;
		max-width: 100%;
	}
	/*
  7. Remove built-in form typography styles
*/
	input,
	button,
	textarea,
	select {
		font: inherit;
	}

	/*
  8. Avoid text overflows
*/
	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		overflow-wrap: break-word;
	}
	/*
   9. Create a root stacking context
*/
	#svelte,
	#__next {
		isolation: isolate;
	}
	/* END RESET */

	#svelte {
		/* height: 100%;
		background-color: rgb(244, 244, 244);
		display: grid;
		grid-template-columns: auto 150px;
		grid-template-rows: 3rem 1fr 3rem;
		grid-gap: 1em; */
	}

	#svelte > header,
	footer {
		/* grid-column: 1 / 3; */
	}
	main {
		/* margin: 1rem;
		height: 100%;
		width: 100%;
		outline: blue 1px solid;
		display: grid;
		grid-row: 1, span 2;
		grid-template-columns: 1fr 150px;
		grid-template-rows: 1fr;
		gap: 2rem; */
	}
	article {
		outline: orange 1px solid;
		width: 100%;
	}
	aside {
		/* outline: red 1px solid; */
		/* width: 300px; */
	}
	#svelte > footer {
		/* height: 100%; */
		/* grid-row: 3; */
	}
</style>
