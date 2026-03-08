<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
</script>

<svelte:head>
	<title>minimata</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="relative size-full">
	{@render children()}
</div>

<style lang="postcss">
	@reference "$routes/layout.css";
</style>
