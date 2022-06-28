<script lang="ts">
	import { page } from '$app/stores';

	const links = [
		{
			href: '/',
			text: 'Home'
		},
		{
			href: '/about',
			text: 'About'
		},
		{
			href: '/contact',
			text: 'Contact'
		}
	];
</script>

<header>
	<div class="bg-indigo-600 pb-32">
		<nav
			class="bg-indigo-600 border-b border-indigo-300 border-opacity-25 lg:border-none fixed w-screen z-10"
		>
			<div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
				<div
					class="relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25"
				>
					<div class="px-2 flex items-center lg:px-0">
						<a class="flex-shrink-0 hover:opacity-75" href="/"
							><img
								class="block h-8 w-8"
								src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
								alt="Logo"
							/></a
						>
						<div class="block lg:ml-10">
							<div class="flex space-x-4">
								{#each links as item}
									<a
										class={'hidden lg:inline bg-indigo-700 text-white rounded-md py-2 px-3 text-sm font-medium' +
											' ' +
											''}
										aria-current="page"
										href={item.href}>{item.text}</a
									>
								{/each}
							</div>
						</div>
					</div>
					<div class="flex-1 px-2 hidden lg:ml-6 lg:flex lg:justify-end">
						<div class="w-full lg:max-w-xs">
							<label for="search" class="sr-only">Cari</label>
							<div class="relative text-gray-400 focus-within:text-gray-600">
								<div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										role="img"
										fill="currentColor"
										class="h-5 w-5"
										aria-hidden="true"
										><path
											class="fa-primary"
											d="M500.3 443.7 380.6 324a209.293 209.293 0 0 1-56.57 56.57l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0 15.6-15.57 15.6-40.97 0-56.57z"
										/><path
											d="M207.1 0C93.12 0 0 93.13 0 208s93.12 208 207.1 208 208-93.13 208-208S322.9 0 207.1 0zm0 336c-70.58 0-128-57.42-128-128s57.42-128 128-128 128 57.42 128 128c0 70.6-56.5 128-128 128z"
											style="opacity:0.4"
										/></svg
									>
								</div>
								<input
									type="search"
									id="search"
									class="block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white focus:border-white sm:text-sm"
									placeholder="Cari"
									name="search"
									value=""
								/>
							</div>
						</div>
					</div>
					<div class="flex lg:hidden">
						<button
							class="bg-indigo-600 p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
							id="headlessui-disclosure-button-1"
							type="button"
							aria-expanded="false"
							><span class="sr-only">Open main menu</span><svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								role="img"
								fill="currentColor"
								class="block h-6 w-6"
								aria-hidden="true"
								><path
									class="fa-primary"
									d="M416 128H32c-17.67 0-32-14.3-32-32 0-17.67 14.33-32 32-32h384c17.7 0 32 14.33 32 32 0 17.7-14.3 32-32 32zm0 320H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
								/><path
									d="M0 256c0-17.7 14.33-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32z"
									style="opacity:0.4"
								/></svg
							></button
						>
					</div>
				</div>
			</div>
		</nav>
		<header class="translate-y-11 py-10">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row">
				<h1 class="text-3xl font-bold text-white">Learning Svelte</h1>
				<div class="mt-4 sm:-mt-1 sm:ml-6" />
			</div>
		</header>
	</div>
</header>
