<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children?: Snippet;
	};

	const { children }: Props = $props();
</script>

<div class="card default-colours default-margin default-shadow">
	{@render children?.()}
</div>

<style lang="postcss">
	@reference "$routes/layout.css";

	.card {
		@apply border;
	}
</style>
