<script lang="ts">
	import Portal from './Portal.svelte';
	import { fly, fade } from 'svelte/transition';
	import { clickOutside } from './clickOutside';
	export let isModalOpen = false;
	function closeModal() {
		isModalOpen = false;
	}
	export let background = true;
</script>

{#if isModalOpen}
	<Portal>
		<div
			use:clickOutside
			on:click-outside={() => closeModal()}
			class="modal-wrapper"
			transition:fly={{ opacity: 0, y: 100 }}
		>
			<button
				class="close-btn"
				on:click={() => {
					console.log('closes');
					return closeModal();
				}}
				aria-label="close-modal"
			>
				close
			</button>
			<slot />
		</div>
		{#if background}
			<div
				class="background"
				on:click={() => {
					console.log('closes');
					return closeModal();
				}}
				transition:fade
			/>
		{/if}
	</Portal>
{/if}

<style>
	.close-btn {
		position: absolute;
		top: 0;
		right: 0;
		padding: 0.5rem;
		background: transparent;
		border: none;
		cursor: pointer;
		font-size: 1.5rem;
		color: #000;
	}
	.modal-wrapper {
		position: fixed;
		inset: 100px 0 0;
		background: white;
		border-radius: 1em;
		box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
		min-width: 320px;
		width: 100%;
		z-index: 101;
		min-height: 530px;
		margin: 0 autol;
	}
	.background {
		position: fixed;
		inset: 0;
		z-index: 100;
		background: rgba(84, 84, 84, 0.5);
		width: 100%;
		height: 100%;
	}
</style>
