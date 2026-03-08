<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children?: Snippet;
	};

	const { children }: Props = $props();
</script>

<li class="item">
	{@render children?.()}
</li>

<style lang="postcss">
	.item {
	}
</style>
