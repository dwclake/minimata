<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children: Snippet;
	}

	const { children } = $props() as Props;
</script>

<select class="select">
	{@render children()}
</select>

<style lang="postcss">
	.select {

	}
</style>