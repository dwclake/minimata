<script lang="ts">
	import {
		Button,
		Card,
		List,
		Item,
		Overlay,
		Popup,
		Select,
		Option,
		Textarea,
		WebGLCanvas
	} from "$components/ui";

	let button_text = $state("click me");
	const onclick = () => {
		button_text = "clicked";
	};
</script>

<main class="home-container page-margin">
	<h1>MINIMATA</h1>
	<Button {onclick}>{button_text}</Button>
	<Card>Im a card</Card>
	<List>
		<Item>Im an item</Item>
		<Item>Im another item</Item>
	</List>
	<Overlay>Im the overlay</Overlay>
	<Popup>Im a popup</Popup>
	<Select>
		<Option>Option 1</Option>
		<Option>Option 2</Option>
	</Select>
	<Textarea />
	<WebGLCanvas />
</main>

<style lang="postcss">
	@reference "$routes/layout.css";

	.home-container {
		@apply flex size-full flex-col items-center gap-4 text-xl text-olive-200;
	}
</style>
