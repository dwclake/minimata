<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children: Snippet;
	}

	const { children } = $props() as Props;
</script>

<div class="card">
	{@render children()}
</div>

<style lang="postcss">
	.card {

	}
</style>