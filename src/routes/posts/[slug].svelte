<script context="module" lang="ts">
	import { page } from '$app/stores';

	export async function load({ params, fetch, session, stuff }) {
		const Hello = await import(`../../markdownPosts/${params.slug}.md`);

		// const post = {
		// 	title: params.slug,
		// 	date: new Date(),
		// 	body: 'lalalalala'
		// };
		return {
			props: {
				title: Hello.metadata.title,
				Hello: Hello.default
			}
		};
		// const url = `/blog/${params.slug}.json`;
		// const res = await fetch(url);

		// if (res.ok) {
		// 	return {
		// 		props: {
		// 			article: await res.json()
		// 		}
		// 	};
		// }

		// return {
		// 	status: res.status,
		// 	error: new Error(`Could not load ${url}`)
		// };
	}
</script>

<script>
	export let title;
	export let Hello;
</script>

<div>
	title
	{title}
</div>

<div>
	<Hello />
</div>
