<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children: Snippet;
	}

	const { children } = $props() as Props;
</script>

<div class="popup">
	{@render children()}
</div>

<style lang="postcss">
	.popup {

	}
</style>