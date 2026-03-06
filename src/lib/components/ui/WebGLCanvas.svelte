<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children?: Snippet;
	};

	const { children }: Props = $props();
</script>

<canvas class="webgl-canvas default-colours default-margin default-shadow">
	{@render children?.()}
</canvas>

<style lang="postcss">
	@reference "$routes/layout.css";

	.webgl-canvas {
		@apply border;
	}
</style>
