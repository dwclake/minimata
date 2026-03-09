<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children?: Snippet;
		class?: string;
		title?: string;
	};

	const { children, title, ...props }: Props = $props();
</script>

<div class={"group default-colours default-margin hover" + " " + props.class}>
	{#if title}
		<div class="title-bar">
			<span>{title}</span>
			<div class="title-bar-close flex-center" aria-hidden="true">x</div>
		</div>
	{/if}
	{@render children?.()}
</div>

<style lang="postcss">
	@reference "$routes/layout.css";

	.title-bar {
		@apply -mx-2 -mt-2 flex items-center justify-between bg-transparent pb-0.5 shadow-b-mirage-300 transition duration-300 ease-in-out group-hover:border-mirage-950 group-hover:shadow-b-mirage-950;
	}

	.title-bar span {
		@apply m-0 px-2 py-1 font-bold;
	}

	.title-bar-close {
		@apply mr-2 size-5 rounded-xs border border-mirage-300 pb-1 font-bold shadow-sm-mirage-300 transition duration-300 ease-in-out group-hover:border-mirage-950 group-hover:shadow-sm-mirage-950;
	}
</style>
