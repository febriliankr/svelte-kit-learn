<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	const allowedEmoji = '😊🙃🤪🤓🤯😴💩👻👽🤖👾👐🖖✌️🤟🤘🤙👋🐭🦕🦖🐉';
	const data = [
		{
			uid: '1',
			created_at: new Date(),
			text: 'Learn Svelte',
			done: false
		},
		{
			uid: '2',
			created_at: new Date(),
			text: 'Learn Svelte',
			done: false
		},
		{
			uid: '3',
			created_at: new Date(),
			text: 'Learn Svelte',
			done: false
		},
		{
			uid: '4',
			created_at: new Date(),
			text: 'Learn Svelte',
			done: false
		},
		{
			uid: '5',
			created_at: new Date(),
			text: 'Learn Svelte',
			done: false
		},
		{
			uid: '6',
			created_at: new Date(),
			text: 'Learn Svelte',
			done: false
		}
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#each data as item}
		<p>{item.text}</p>
	{/each}
</section>
