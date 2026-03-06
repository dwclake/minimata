<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children: Snippet;
	}

	const { children } = $props() as Props;
</script>

<button class="btn">
	{@render children()}
</button>

<style lang="postcss">
	.btn {

	}
</style>