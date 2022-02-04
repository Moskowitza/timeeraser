<script lang="ts">
	import { fade } from 'svelte/transition';
	export let items: { name: string }[];
	export let search = '';
	let isFocused = false;
	$: filteredSearch = items.filter((item) => {
		return search == '' || item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
	});
	export let style = '';
</script>

<div class="wrapper" {style}>
	<label>
		Search:
		<input
			on:focus={() => {
				isFocused = true;
			}}
			on:blur={() => {
				isFocused = false;
			}}
			bind:value={search}
			type="text"
			placeholder="Search"
		/>
		{#if isFocused}
			<ul transition:fade={{ duration: 200 }}>
				{#each filteredSearch as item}
					<li
						transition:fade={{ duration: 200 }}
						on:click={() => {
							search = item.name;
							isFocused = false;
						}}
					>
						{item.name}
					</li>
				{/each}
			</ul>
		{/if}
	</label>
</div>

<style>
	.wrapper {
		border: red 1px solid;
		display: inline-block;
		position: relative;
	}
	ul {
		position: absolute;
		width: 100%;
		border: blue 1px solid;
		list-style: none;
		padding: 0;
		margin: 0;
	}
	li {
		padding: 10px;
		cursor: pointer;
		transition: background-color 0.2s ease-in-out;
	}
	li:hover {
		background: var(--listItemBackground, #eee);
	}
</style>
