<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children: Snippet;
	}

	const { children } = $props() as Props;
</script>

<ul class="list">
	{@render children()}
</ul>

<style lang="postcss">
	.list {

	}
</style>