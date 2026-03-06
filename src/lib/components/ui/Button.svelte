<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children?: Snippet;
	}

	const { children }: Props = $props();
</script>

<button class="btn">
	{@render children?.()}
</button>

<style lang="postcss">
	@reference "$routes/layout.css";

	.btn {

	}
</style>