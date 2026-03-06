<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children?: Snippet;
	}

	const { children }: Props = $props();
</script>

<ul class="list">
	{@render children?.()}
</ul>

<style lang="postcss">
	@reference "$routes/layout.css";

	.list {

	}
</style>