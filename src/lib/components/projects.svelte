<script lang="ts">
	import ProjectCard from '../components/project-card.svelte';
	import type { Project } from 'src/model/project';
	import kanvas from '../../static/kanvas.jpg';
	import passwordGeneratorImg from '../../static/password-generator.jpg';
	import invoiceImg from '../../static/invoice.jpg';
	import ipTrackerImg from '../../static/ip-tracker.jpg';
	import calculatorImg from '../../static/calculator.jpg';

	const projects: Project[] = [
		{
			image: kanvas,
			title: 'kanvas',
			description:
				'Konva canvas app to draw shapes. Create, edit and delete shapes as well as undo / redo.',
			frontendStack: ['React', 'Konva'],
			websiteLink: 'https://kanvas-sigma.vercel.app/',
			githubLink: 'https://github.com/andreviallon/kanvas'
		},
		{
			image: passwordGeneratorImg,
			title: 'password generator',
			description: 'Password Generator app with various settings and password strength.',
			frontendStack: ['Next.js'],
			websiteLink: 'https://password-generator-ten-nu.vercel.app/',
			githubLink: 'https://github.com/andreviallon/password-generator'
		},
		{
			image: invoiceImg,
			title: 'invoice app',
			description: 'Full stack CRUD application to manage and create detailed invoices.',
			frontendStack: ['Next.js', 'Formik', 'Storybook'],
			backendStack: ['Node', 'MongoDB'],
			websiteLink: 'https://invoice-app-iota.vercel.app',
			githubLink: 'https://github.com/andreviallon/invoice-app'
		},
		{
			image: ipTrackerImg,
			title: 'ip address tracker',
			description:
				'Search for an IP address and get information about it, such as its location timezone and ISP.',
			frontendStack: ['Angular', 'NGXS', 'Leaflet'],
			websiteLink: 'https://ip-address-tracker-orcin.vercel.app/',
			githubLink: 'https://github.com/andreviallon/ip-address-tracker'
		},
		{
			image: calculatorImg,
			title: 'calculator',
			description:
				'Your traditional calculator app... but with neat features, such as support for keyboard shortcuts and calculation chaining.',
			frontendStack: ['Next.js'],
			websiteLink: 'https://calculator-nine-sepia.vercel.app/',
			githubLink: 'https://github.com/andreviallon/calculator'
		}
	];
</script>

<div>
	<h2 class="font-bold text-3xl mb-6">projects</h2>
	<div class="grid grid-cols-1 lg:grid-cols-2	xl:grid-cols-3 gap-8">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</div>
