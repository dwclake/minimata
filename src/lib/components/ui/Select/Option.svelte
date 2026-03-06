<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children?: Snippet;
	}

	const { children }: Props = $props();
</script>

<option class="option">
	{@render children?.()}
</option>

<style lang="postcss">
	@reference "$routes/layout.css";

	.option {

	}
</style>