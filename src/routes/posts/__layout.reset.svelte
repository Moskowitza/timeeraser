<script context="module" lang="ts">
	export async function load({ params, fetch, session, stuff }) {
		try {
			const posts = await import.meta.globEager('../../markdownPosts/*.svx');
			const postList = Object.values(posts);
			const postMeta = postList.map((post) => {
				return post.metadata;
			});

			return { props: { posts: postMeta } };
		} catch (error) {
			return {
				status: 303,
				redirect: '/'
			};
		}
	}
</script>

<script lang="ts">
	type Post = {
		title: string;
		slug: string;
	};
	export let posts: Post[];
</script>

<ul>
	<li><a href="/">home</a></li>
	{#each posts as post}
		<li><a sveltekit:prefetch href={`/posts/${post.slug}`}>{post.title}</a></li>
	{/each}
</ul>
<div class="container">
	<slot />
</div>

<style>
	.container {
		width: 50%;
		background-color: lightyellow;
	}
</style>
