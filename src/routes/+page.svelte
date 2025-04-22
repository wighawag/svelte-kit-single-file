<script lang="ts">
	let clicked = $state(false);
</script>

<button onclick={() => (clicked = true)}>hello</button>
{#if clicked}
	Hello world!
{/if}
