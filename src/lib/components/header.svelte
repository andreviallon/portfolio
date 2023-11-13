<script lang="ts">
	import resume from '../../../static/resume.pdf';
	import { createEventDispatcher } from 'svelte';
	let isMenuOpen = false;

	const dispatch = createEventDispatcher();
	const navigateTo = (el: string) => dispatch('navigateTo', el);

	const toggleMenu = (el?: string): void => {
		isMenuOpen = !isMenuOpen;
		el && navigateTo(el);
	};
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-gray-100 h-16 sm:h-24">
	<div class="flex p-6 sm:py-8 sm:px-10 justify-between items-center">
		<a class="text-xl bottom-bar-on-hover" href="/" on:click={() => toggleMenu('header')}>
			andré viallon
		</a>
		<div class="hidden sm:flex">
			<a href="/" class="bottom-bar-on-hover ml-10" on:click={() => toggleMenu('projects')}>
				projects
			</a>
			<a href="/" class="bottom-bar-on-hover ml-10" on:click={() => toggleMenu('about')}> about </a>
			<a href={resume} class="bottom-bar-on-hover ml-10" target="_blank" rel="noreferrer">
				resume
			</a>
		</div>

		<div class="flex sm:hidden cursor-pointer">
			{#if isMenuOpen}
				<button on:click={() => toggleMenu()}>close</button>
			{:else}
				<button on:click={() => toggleMenu()}>menu</button>
			{/if}
		</div>
	</div>
</header>
{#if isMenuOpen}
	<div
		class="fixed top-0 right-0 left-0 bottom-0 bg-gray-100 sm:hidden flex justify-center items-center z-30"
	>
		<div class="flex flex-col items-center mt-12">
			<a class="text-2xl mb-10" href="/" on:click={() => toggleMenu('projects')}> projects </a>
			<a class="text-2xl mb-10" href="/" on:click={() => toggleMenu('about')}> about </a>
			<a href={'resume.pdf'} target="_blank" rel="noreferrer" class="text-2xl mb-10"> resume </a>
		</div>
	</div>
{/if}

<style>
	a {
		@apply font-medium text-lg cursor-pointer;
	}

	span {
		@apply font-medium;
	}
</style>
