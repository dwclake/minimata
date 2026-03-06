<script lang="ts">
	import { type Snippet } from "svelte";
	import { twMerge } from "tw-merge";

	type Props = {
		children?: Snippet;
		onclick?: () => void;
	};

	const { children, ...props }: Props = $props();
</script>

<button
	class={twMerge(
		"btn default-colours default-margin hover-colours default-shadow hover-shadow active-colours active-shadow"
	)}
	{...props}
>
	{@render children?.()}
</button>

<style lang="postcss">
	@reference "$routes/layout.css";

	.btn {
		@apply transform cursor-pointer border transition duration-200 disabled:cursor-not-allowed disabled:bg-transparent disabled:opacity-50;
	}
</style>
