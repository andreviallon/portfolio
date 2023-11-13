<script lang="ts">
	function handleScrollTo(el): void {
		animateScroll.scrollTo({ element: `#${el.detail}`, offset: -100 });
	}

	const year = new Date().getFullYear();
</script>

<svelte:head>
	<title>Andre Viallon | Portfolio</title>
</svelte:head>
<Notifications>
	<div class="h-full" id="header">
		<Header on:navigateTo={(el) => handleScrollTo(el)} />
		<div class="container mx-auto px-8 h-full">
			<div class="flex h-screen">
				<div class="flex w-full xl:w-1/2">
					<Hero on:navigateTo={(el) => handleScrollTo(el)} />
				</div>
				<div class="hidden xl:flex xl:w-1/2">
					<Avatar image={avatar} />
				</div>
			</div>
			<div id="projects" />
			<Projects />
			<div class="mt-16">
				<div id="about" />
				<About />
			</div>
			<p class="mt-48 mb-24 flex justify-center w-full">
				©{year} André Viallon, all rights reserved.
			</p>
		</div>
	</div>
</Notifications>
