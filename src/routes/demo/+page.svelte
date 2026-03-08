<script lang="ts">
	import { Card } from "$components/ui";
</script>

<section class="demo-container">
	<div class="demo-left">
		<div class="function-selector">
			<Card class="size-full" title="function selection"></Card>
		</div>
		<div class="visualization-window">
			<Card class="size-full" title="visualization window"></Card>
		</div>
		<div class="algorithm-selector">
			<Card class="size-full" title="algorithm selection"></Card>
		</div>
		<div class="function-builder">
			<Card class="size-full" title="function builder"></Card>
		</div>
	</div>
	<div class="demo-right">
		<div class="hyperparameters">
			<Card class="size-full" title="hyperparameters"></Card>
		</div>
		<div class="algorithm-builder">
			<Card class="size-full" title="algorithm builder"></Card>
		</div>
	</div>
</section>

<style lang="postcss">
	@reference "$routes/layout.css";

	.demo-container {
		@apply flex aspect-video h-auto max-h-full w-auto gap-12 p-8;
	}

	.demo-left {
		@apply flex min-h-0 flex-1 flex-col gap-8;
	}

	.function-selector {
		@apply min-h-0 grow basis-1;
	}

	.visualization-window {
		@apply min-h-0 basis-0;
		flex-grow: 6;
	}

	.algorithm-selector {
		@apply min-h-0 grow basis-0;
	}

	.function-builder {
		@apply min-h-0 basis-0;
		flex-grow: 2;
	}

	.demo-right {
		@apply flex min-h-0 flex-1 flex-col gap-8;
	}

	.hyperparameters {
		@apply min-h-0 basis-0;
		flex-grow: 2;
	}

	.algorithm-builder {
		@apply min-h-0 basis-0;
		flex-grow: 3;
	}
</style>
