<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children?: Snippet;
	}

	const { children }: Props = $props();
</script>

<select class="select">
	{@render children?.()}
</select>

<style lang="postcss">
	@reference "$routes/layout.css";

	.select {

	}
</style>