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
</script>

<main class="home-container">
	<h1>Welcome to Minima</h1>
	<Button>Click me</Button>
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
		@apply flex flex-col items-center gap-4 p-8 bg-mirage-400 size-full;
	}
</style>