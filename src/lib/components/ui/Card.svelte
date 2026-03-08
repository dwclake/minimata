<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children?: Snippet;
		class?: string;
		title?: string;
	};

	const { children, title, ...props }: Props = $props();
</script>

<div class={"card default-colours default-margin hover " + props.class}>
	{#if title}
		<div class="title-bar hover shadow-b-mirage-300">
			<span>{title}</span>
			<div
				class="title-bar-close shadow-sm-mirage-300 hover:shadow-sm-mirage-950"
				aria-hidden="true"
			>
				x
			</div>
		</div>
	{/if}
	{@render children?.()}
</div>

<style lang="postcss">
	@reference "$routes/layout.css";

	.card {
	}

	.title-bar {
		@apply -mx-2 -mt-2 flex items-center justify-between bg-transparent pb-0.5;
	}

	.title-bar span {
		@apply m-0 px-2 py-1 font-bold;
	}

	.title-bar-close {
		@apply mr-2 flex size-5 items-center justify-center rounded-xs border border-current pb-1 leading-none font-bold;
	}
</style>
