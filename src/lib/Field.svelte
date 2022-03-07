<script lang="ts">
	export let label = '';
	export let instructions = '';
	export let style = '';
	export let placeholder = '';
	export let value: number | string = '';
	export let type = 'text';

	function handleInput(event: Event) {
		value = type.match(/^(number|range)$/)
			? (event.target as HTMLInputElement).valueAsNumber
			: (event.target as HTMLInputElement).value;
		// value = (event.target as HTMLInputElement).value;
	}
</script>

<div {style}>
	<label for={label}>
		{#if label}
			<span>
				{label}
			</span>
		{/if}
		{#if instructions}
			<span class="instructions">
				{instructions}
			</span>
		{/if}
		<input on:input={handleInput} {value} {type} name={label} {placeholder} />
	</label>
</div>

<style>
	.instructions {
		opacity: 0.7;
		font-size: var(--instructionsFontsize, 0.8em);
	}
</style>
