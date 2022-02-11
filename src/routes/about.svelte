<script lang="ts">
	import Toggle from '$lib/Toggle.svelte';
	let isToggled = false;
</script>

<h1>Aaron Moskowitz</h1>

<p>Hello I'm Aaron</p>

<Toggle bind:isToggled label={'toggle about'} />

<Toggle bind:isToggled label={'toggle about'} style="--toggleButtonColor:pink;" />
<button
	type="button"
	on:click={() => {
		console.log('clicked');
	}}>click</button
>
