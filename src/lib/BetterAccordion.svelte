<script lang="ts">
	export let buttonText = 'default button text';
	export let isOpen = true;
	import { slide } from './slide';
</script>

<div>
	<button on:click={() => (isOpen = !isOpen)}>
		<span class:isOpen>▲</span>
		{buttonText}</button
	>

	<div
		class="accordion-content"
		use:slide={{ isOpen: isOpen, duration: 500 }}
		on:animationEnd={() => {
			console.log('aniation ended');
		}}
	>
		<div class="wrapper">
			<slot />
		</div>
	</div>
</div>

<style>
	button {
		display: block;
		border: 0;
		width: 100%;
		text-align: left;
		margin: 0;
		border: solid 1px #333;
	}
	span {
		margin-right: 5px;
		display: inline-block;
		transform: rotate(0.25turn);
		transition: 0.3s ease;
	}
	.isOpen {
		transform: rotate(0.5turn);
	}
	.accordion-content {
		border: solid 1px #333;
		border-top: 0;
	}
	.wrapper {
		padding: 20px;
	}
</style>
