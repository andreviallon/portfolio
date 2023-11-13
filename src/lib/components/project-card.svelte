<script lang="ts">
	import StackList from './stack-list.svelte';
	import type { Project } from '../model/project';

	export let project: Project;
</script>

<div
	class="project-card flex flex-col justify-between p-4 pb-6 bg-white rounded-2xl w-full shadow-lg h-full"
>
	<div>
		<div class="relative overflow-hidden rounded-2xl isolate">
			<img
				src={project.image}
				class="w-full object-cover block transition ease-in-out duration-300"
				alt="Project"
			/>
		</div>
		<div class="px-2">
			<h2 class="text-2xl font-bold pt-4">{project.title}</h2>
			<p class="text-base pt-4 text-gray-500 description">
				{project.description}
			</p>

			{#if !!project.frontendStack?.length}
				<div class="flex items-center pt-2 text-gray-500 stack">
					<StackList text="Frontend" icon={faPaintBrush} stackList={project.frontendStack} />
				</div>
			{/if}

			{#if !!project.backendStack?.length}
				<div class="flex items-center pt-2 text-gray-500 stack">
					<StackList text="Backend" icon={faDatabase} stackList={project.backendStack} />
				</div>
			{/if}
		</div>
	</div>
	<div class="px-2">
		<div class="flex gap-4 mt-6">
			<a
				class="text-center py-3 px-4 rounded-md text-neutral-900 font-medium w-full border-solid border-indigo-400 border-2 transition ease-in-out duration-300"
				target="_blank"
				href={project.githubLink}
				rel="noopener noreferrer"
			>
				view code
			</a>

			<a
				class="text-center py-3 px-4 rounded-md text-white font-medium w-full bg-gradient-to-r from-indigo-400 to-indigo-600 transition ease-in-out duration-300"
				target="_blank"
				href={project.websiteLink}
				rel="noopener noreferrer"
			>
				live demo
			</a>
		</div>
	</div>
</div>

<style lang="scss">
	@media (hover: hover) {
		.project-card:hover {
			img {
				transform: scale(1.1);
			}

			a:hover {
				transform: translateY(-0.25rem);
			}
		}
	}
</style>
