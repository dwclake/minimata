<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children?: Snippet;
	};

	const { children }: Props = $props();
</script>

<div class="popup default-margin default-colours hover">
	{@render children?.()}
</div>

<style lang="postcss">
	.popup {
	}
</style>
