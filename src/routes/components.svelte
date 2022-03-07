<script lang="ts">
	// import Accordion from '$lib/Accordion.svelte';
	// import BetterAccordion from '$lib/BetterAccordion.svelte';
	// import Field from '$lib/Field.svelte';
	// import Markdown from '$lib/Markdown.svelte';
	// import Portal from '$lib/Portal.svelte';
	import Modal from '$lib/Modal.svelte';
	import Toast from '$lib/toast/Toast.svelte';
	// import SearchFilter from '$lib/SearchFilter.svelte';
	// import Toggle from '$lib/Toggle.svelte';
	import { toast } from '$lib/toast/toast';
	import { loop_guard } from 'svelte/internal';
	let isModalOpen = false;
	// let isToggled = false;
	// let fieldValue = '';
	// let items = [
	// 	{ name: 'emily' },
	// 	{ name: 'amber' },
	// 	{ name: 'eno' },
	// 	{ name: 'toki' },
	// 	{ name: 'blue' },
	// 	{ name: 'aaron' }
	// ];
	// let search = '';
	// let text = '';
	// $: {
	// 	console.log(text);
	// }
</script>

<h1>Aaron Moskowitz</h1>
<h2>Software Engineer</h2>

<button
	on:focus={() => {
		console.log('hi');
	}}
	on:click={() => (isModalOpen = true)}>Open Modal</button
>
<Toast />

<Modal bind:isModalOpen background={false}>
	<div class="modal-content">Modal COntent</div>
</Modal>

<button
	type="button"
	on:click={() => {
		console.log('clicked');
		toast.send('hello', {
			type: 'INFO'
		});
	}}
>
	Open toast
</button>
<button
	type="button"
	on:click={() => {
		console.log('clicked');
		toast.send('oH NO', {
			type: 'ERROR',
			duration: 3000
		});
	}}
>
	Open ERROR toast
</button>

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
<style>
	.modal-content {
		background-color: #fefefe;
		margin: 15% auto;
		padding: 20px;
		border: 1px solid #888;
		width: 80%;
	}
</style>
