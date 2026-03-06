<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children?: Snippet;
	}

	const { children }: Props = $props();
</script>

<div class="popup">
	{@render children?.()}
</div>

<style lang="postcss">
	@reference "$routes/layout.css";

	.popup {

	}
</style>