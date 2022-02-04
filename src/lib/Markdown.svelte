<script lang="ts">
	// DO NOT USE WITHOUT PURIFYING
	import { marked } from 'marked';
	export let text = '';
	let markdownText = text;
	$: {
		markdownText = marked(text);
	}
</script>

<div class="markdown-container">
	<textarea name="" id="" cols="30" rows="10" bind:value={text} />
	<div>
		{@html markdownText}
	</div>
</div>

<style lang="scss">
	.markdown-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: start;
		gap: 1em;
		& > * {
			width: 50%;
		}
	}
</style>
