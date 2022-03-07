<script context="module" lang="ts">
	export async function load({ params, fetch, session, stuff }) {
		try {
			const Post = await import(`../../markdownPosts/${params.slug}.svx`);
			return {
				props: {
					title: Post.metadata.title,
					Post: Post.default
				}
			};
		} catch (error) {
			return {
				status: 404,
				error: 'Post Not Found'
			};
		}
	}
</script>

<script>
	export let title;
	export let Post;
</script>

<svelte:head><title>{title}</title></svelte:head>
<div>
	{title}
	<svelte:component this={Post} />
</div>
