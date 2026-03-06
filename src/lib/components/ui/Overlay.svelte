<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children?: Snippet;
	}

	const { children }: Props = $props();
</script>

<div class="overlay">
	{@render children?.()}
</div>

<style lang="postcss">
	@reference "$routes/layout.css";

	.overlay {

	}
</style>