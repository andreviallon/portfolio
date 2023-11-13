<script lang="ts">
	export let image: string;
</script>

<div class="flex items-center justify-center w-full">
	<div class="avatar block relative">
		<div class="w-72 h-72 object-cover">
			<img
				src={image}
				class="w-72 h-72 object-cover z-20 absolute top-4 left-4 transition-all ease-in-out duration-300"
				alt="Avatar"
			/>
		</div>
		<div
			class="absolute top-12 left-12 w-72 h-72 bg-gradient-to-r from-indigo-500 to-indigo-600 z-10 avatar-background transition-all ease-in-out duration-300 shadow-lg shadow-indigo-300"
		/>
	</div>
</div>

<style lang="scss">
	img,
	.avatar-background {
		border-radius: 3rem;
	}

	@media (hover: hover) {
		.avatar:hover {
			img {
				top: 0;
				left: 0;
			}
			.avatar-background {
				top: 4rem;
				left: 4rem;
			}
		}
	}
</style>
