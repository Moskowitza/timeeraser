<script lang="ts">
	export let label = '';
	export let isToggled = false;
	export let style = '';
</script>

<label {style} for="toggle">
	<input type="checkbox" name="toggle" id="toggle" bind:checked={isToggled} />
	<div class="toggle" />
	{label}
</label>

<style lang="scss">
	label {
		--width: 30px;
		--height: calc(var(--width) / 2);
		--radius: calc(var(--height) / 2);
		display: flex;
		line-height: unset;
		input {
			display: none;
		}
	}

	.toggle {
		position: relative;
		height: var(--height);
		width: var(--width);
		border-radius: var(--radius);
		border: solid 1px #333;
		margin-right: 5px;
		background-color: var(--toggleButtonColor, white);

		&::after {
			content: '';
			position: absolute;
			top: -1px;
			left: -1px;
			width: var(--height);
			height: var(--height);
			background-color: var(--toggleButtonColor, red);
			border-radius: var(--radius);
			box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
			transition: 0.3s;
		}
	}
	input:checked + .toggle {
		background-color: var(--toggleButtonColor, green);
	}
	input:checked + .toggle::after {
		transform: translate3d(100%, 0, 0);
	}
</style>
