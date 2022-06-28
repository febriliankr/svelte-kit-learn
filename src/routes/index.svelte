<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	const data = [
		{
			uid: '1',
			created_at: new Date(),
			text: 'Learn Svelte',
			done: false,
			pending_delete: false
		},
		{
			uid: '2',
			created_at: new Date(),
			text: 'Learn Svelte',
			done: false,
			pending_delete: false
		},
		{
			uid: '3',
			created_at: new Date(),
			text: 'Learn Svelte',
			done: false,
			pending_delete: false
		},
		{
			uid: '4',
			created_at: new Date(),
			text: 'Learn Svelte',
			done: false,
			pending_delete: false
		},
		{
			uid: '5',
			created_at: new Date(),
			text: 'Learn Svelte',
			done: false,
			pending_delete: false
		},
		{
			uid: '6',
			created_at: new Date(),
			text: 'Learn Svelte',
			done: false,
			pending_delete: false
		},
		{
			uid: '7',
			created_at: new Date(),
			text: 'Learn Svelte',
			done: false,
			pending_delete: false
		},
		{
			uid: '8',
			created_at: new Date(),
			text: 'Learn Svelte',
			done: false,
			pending_delete: false
		}
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<main class="-mt-24">
		<div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
			<div
				class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-3 sm:gap-px"
			>
				{#each data as item}
					<div
						class="sm:rounded-tr-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
					>
						<div>
							<span class="bg-teal-50 text-teal-700 rounded-lg inline-flex p-3 ring-4 ring-white"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
									role="img"
									fill="currentColor"
									class="h-6 w-6"
									><path
										d="M256 64c0 35.35-28.7 64-64.9 64-34.4 0-64-28.65-64-64s29.6-64 64-64C227.3 0 256 28.65 256 64zm-64.9-32c-16.8 0-32 14.33-32 32s15.2 32 32 32c18.6 0 32.9-14.33 32.9-32s-14.3-32-32.9-32zM112 188c-27.81-14.8-51.41-37.4-67.52-65.8l-10.39-18.3c-4.36-7.69-1.67-17.45 6.02-21.81 7.68-4.37 17.45-1.67 21.81 6.01l10.39 18.3c24.42 43 70.09 69.6 119.59 69.6 48.8 0 93.2-26 118.7-68.2l11.6-19.86c4.4-7.64 14.2-10.21 21.9-5.76 7.6 4.45 10.2 14.25 5.7 21.92l-11.6 19.8c-16 27.5-39.1 49.4-66.2 64V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V384h-96v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V188zm32 13.1V352h96V201c-15.4 4.6-31.6 7-48.1 7s-32.6-2.4-47.9-6.9z"
									/></svg
								></span
							>
						</div>
						<div class="mt-8">
							<h3 class="text-lg font-medium">
								<a class="focus:outline-none" href="/activities/paud"
									><span class="absolute inset-0" aria-hidden="true" />{item.text}</a
								>
							</h3>
							<p class="mt-2 text-sm text-gray-500">{item.created_at}</p>
						</div>
						<span
							class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
							aria-hidden="true"
							><svg
								class="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 24 24"
								><path
									d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
								/></svg
							></span
						>
					</div>
				{/each}
			</div>
		</div>
	</main>
</section>
