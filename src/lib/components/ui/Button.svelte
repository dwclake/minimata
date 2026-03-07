<script lang="ts">
	import { type Snippet } from "svelte";

	type Props = {
		children?: Snippet;
		onclick?: () => void;
	};

	const { children, ...props }: Props = $props();
</script>

<button
	class="btn default-colours default-margin default-shadow hover active disabled"
	{...props}
>
	{@render children?.()}
</button>

<style lang="postcss">
	@reference "$routes/layout.css";

	.btn {
		@apply cursor-pointer;
	}
</style>
