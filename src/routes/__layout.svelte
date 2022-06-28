<script lang="ts">
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Navbar.svelte';
	import '../app.css';
</script>

<Header />

<main class="-mt-24 px-2">
	<div class="bg-white min-h-[500px] max-w-6xl rounded-md p-4 mx-auto">
		<slot />
	</div>
</main>

<Footer />
