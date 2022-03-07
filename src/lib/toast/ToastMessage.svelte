<script lang="ts">
	import { onMount } from 'svelte';

	import { tweened } from 'svelte/motion';
	import { toast } from './toast';
	export let message;

	let progress = tweened(100, {
		duration: message.duration
	});

	onMount(async () => {
		await progress.set(0);
		toast.remove(message.id);
	});
</script>

<div style={`width: ${$progress}%;`} class="progressBar" />
<p>{message.message}</p>

<style>
	.progressBar {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0.25;
		height: 0.2rem;
		background: white;
	}
	p {
		margin: 0;
	}
</style>
