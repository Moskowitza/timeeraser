<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import Portal from '../Portal.svelte';
	import ToastMessage from './ToastMessage.svelte';
	import { toast } from './toast';
</script>

<!-- <button on:click={updateProgress}>Update</button>  -->
<Portal>
	<div class="toast-wrapper">
		{#each $toast as message (message.id)}
			<div
				animate:flip
				out:fade
				in:fly={{ opacity: 0, x: 100 }}
				on:click={() => toast.remove(message.id)}
				class={`toast ${message.type.toLowerCase()}`}
			>
				<ToastMessage {message} />
			</div>
		{/each}
	</div>
</Portal>

<style>
	/* :root {
		--toast-background: #fff;
	} */
	.toast-wrapper {
		position: fixed;
		bottom: 0;
		right: 20px;
	}

	.toast {
		overflow: hidden;
		position: relative;
		margin-bottom: 1rem;
		padding: 20px;
		color: white;
		background: var(--toast-background, darkgrey);
		border-radius: 15px;
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
	}
	.error {
		background: red;
	}
	.info {
		background: blue;
	}
</style>
