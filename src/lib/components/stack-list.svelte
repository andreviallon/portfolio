<script lang="ts">
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	import Fa from 'svelte-fa';

	export let text: string;
	export let icon: IconDefinition;
	export let stackList: string[];

	const isLast = (array: string[], index: number): boolean => array.length !== index + 1;
</script>

<div class="stack-list flex items-center">
	<div class="flex justify-center w-8">
		<Fa {icon} />
	</div>
	<span>{text}:</span>
	<ul class="ml-1">
		{#each stackList as stackItem, index}
			<span>{stackItem}{isLast(stackList, index) ? ', ' : ''} </span>
		{/each}
	</ul>
</div>
