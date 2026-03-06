<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children: Snippet;
	}

	const { children } = $props() as Props;
</script>

<canvas class="webgl-canvas">
	{@render children()}
</canvas>

<style lang="postcss">
	.webgl-canvas {

	}
</style>