<template>
	<div class="mx-auto max-w-3xl pt-10 pb-20">
		<div class="hidden sm:mb-8 sm:flex sm:justify-center">
			<div class="fakeButton ring-1 ring-gray-900/10 hover:ring-gray-900/20">
				<span class="text-gray-600">
					Why Start Your Next Frontend From Scratch?
					<a href="#" class="font-semibold text-sky-600">
						<span class="absolute inset-0" aria-hidden="true" />
						Read more <span aria-hidden="true">&rarr;
						</span>
					</a>
				</span>
			</div>
		</div>
		<h1 class="text-4xl sm:text-center"> {{ content.title }} </h1>
		<p class="mt-6 text-lg leading-6 text-gray-600 sm:text-center">
			{{ content.description }}
		</p>
		<div class="mt-8 flex gap-x-4 sm:justify-center">
			<a href="#" class="primary shadow-sm ring-1 ring-sky-500 hover:ring-emerald-500">
				Get the Code{{ ' ' }}
				<span class="text-sky-200" aria-hidden="true">&rarr;</span>
			</a>
			<a href="#" class="secondary ring-1 ring-gray-900/10 hover:ring-gray-900/20">
				Continue Demo{{ ' ' }}
				<span class="text-gray-400" aria-hidden="true">&rarr;</span>
			</a>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
const content = { 
	title: 'Views, components, layouts, and utilities for building your next frontend.',
	description: 'I found myself building the same frontend components over and over again. So I decided to build a frontend library or template that I can use to bootstrap my projects more efficinently.',
	button: {
		primary: {
			text: 'Get the Code',
			link: '#',
			icon: 'arrow-right',
			color: 'sky',
			ring: 'sky',
			hover: 'emerald'
		},
		secondary: {
			text: 'Continue Demo',
			link: '#',
			icon: 'arrow-right',
			color: 'gray',
			ring: 'gray',
			hover: 'gray'
		}
	}
 }
</script>