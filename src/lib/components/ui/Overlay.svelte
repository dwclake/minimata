<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children?: Snippet;
	};

	const { children }: Props = $props();
</script>

<div class="overlay default-colours default-margin">
	{@render children?.()}
</div>

<style lang="postcss">
	.overlay {
		@apply p-2 shadow-none border-none;
	}
</style>
