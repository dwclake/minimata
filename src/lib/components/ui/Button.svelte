<script lang="ts">
	import { type Snippet } from "svelte";

	type Props = {
		children?: Snippet;
		class?: string;
		onclick?: () => void;
	};

	const { children, onclick, ...props }: Props = $props();
</script>

<button
	class={"btn default-colours default-margin hover active disabled" + " " + props.class}
	{onclick}
>
	{@render children?.()}
</button>

<style lang="postcss">
	@reference "$routes/layout.css";

	.btn {
		@apply cursor-pointer;
	}
</style>
