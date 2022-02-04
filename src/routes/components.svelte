<script>
	import Accordion from '$lib/Accordion.svelte';
	import BetterAccordion from '$lib/BetterAccordion.svelte';
	import Field from '$lib/Field.svelte';
	import Markdown from '$lib/Markdown.svelte';
	import Portal from '$lib/Portal.svelte';
	import SearchFilter from '$lib/SearchFilter.svelte';
	import Toggle from '$lib/Toggle.svelte';
	import Modal from '$lib/Modal.svelte';
	let isModalOpen = false;
	let isToggled = false;
	let fieldValue = '';
	let items = [
		{ name: 'emily' },
		{ name: 'amber' },
		{ name: 'eno' },
		{ name: 'toki' },
		{ name: 'blue' },
		{ name: 'aaron' }
	];
	let search = '';
	let text = '';
	// $: {
	// 	console.log(text);
	// }
</script>

<h1>Aaron Moskowitz</h1>
<h2>Software Engineer</h2>
<Modal bind:isModalOpen>portal</Modal>
<button on:click={() => (isModalOpen = true)}>Open Modal</button>
<!-- <p>type of input {typeof fieldValue}</p>
<Field bind:value={fieldValue} type={'text'} instructions="type new" placeholder="find a name" />
<p>Hello I'm Aaron</p>
<br />
<Markdown bind:text />
x<Toggle bind:isToggled label={'toggle about'} />

<Toggle bind:isToggled label={'toggle about'} style="--toggleButtonColor:pink;" />
<Accordion />
{#if search}
	<p>{search} selected</p>
{/if}
<BetterAccordion>
	<p>better accordion</p>
</BetterAccordion>

<SearchFilter {items} bind:search style="--listItemBackground:pink;" /> -->
