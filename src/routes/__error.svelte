<script context="module" lang="ts">
	export function load({ error, status }) {
		return {
			props: { error }
		};
	}
</script>

<script>
	export let error;
</script>

<h3>Oh NO :(</h3>
{error.message}
