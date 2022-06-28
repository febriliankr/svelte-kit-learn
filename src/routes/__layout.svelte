<script lang="ts">
	import Header from '$lib/header/Navbar.svelte';
	import '../app.css';
</script>

<Header />

<main class="-mt-24 px-2">
	<div class="bg-white min-h-[500px] max-w-7xl rounded-md p-4 mx-auto">
		<slot />
	</div>
</main>

<footer class="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
	<div class="border-t border-slate-100 py-10">
		<div class="mx-auto w-fit">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="orange">
				<path
					fill-rule="evenodd"
					d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
		<p class="mt-5 text-center text-sm leading-6 text-slate-500">
			© {new Date().getFullYear()} Febrilian. All rights reserved.
		</p>
		<div
			class="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700"
		>
			<a href="/privacy-policy">Privacy policy</a>
			<div class="h-4 w-px bg-slate-500/20" />
			<a href="/changelog">Changelog</a>
		</div>
	</div>
</footer>
