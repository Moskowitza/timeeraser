<script lang="ts">
	import { slide } from 'svelte/transition';
	export let buttonText = 'default button text';
	export let isOpen = true;
</script>

<div>
	<button on:click={() => (isOpen = !isOpen)}>{buttonText}</button>
	{#if isOpen}
		<div transition:slide>
			<slot />
			<p>yes yes</p>
		</div>
	{/if}
</div>
