<template>
	<div class="mx-auto max-w-3xl pt-10 pb-20 mt-10">
		<div class="hidden sm:mb-8 sm:flex sm:justify-center">
			<div class="fakeButton ring-1 ring-gray-300 dark:ring-gray-800 dark:hover:ring-gray-600 hover:ring-gray-500">
				<span class="text-gray-600">
					{{ c.heading }}
					<a :href="c.link" class="font-semibold primaryText">
						<span class="absolute inset-0" aria-hidden="true" />
						Read more <span aria-hidden="true">&rarr;
						</span>
					</a>
				</span>
			</div>
		</div>
		<h2 class="sm:text-center leading-8 px-5"> {{ c.title }} </h2>
		<p class="mt-6 text-lg leading-6 text-gray-600 sm:text-center">
			{{ c.description }}
		</p>
		<div class="mt-8 flex gap-x-4 sm:justify-center">
			<a :href="c.primary.link" target="_blank" class="primary">
				{{ c.primary.text }} {{ ' ' }}
				<span class="text-sky-200" aria-hidden="true">&rarr;</span>
			</a>
			<a :href="c.secondary.link"
				class="secondary shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-gray-800 dark:hover:ring-gray-600 ">
				{{ c.secondary.text }} {{ ' ' }}
				<span class="text-gray-400" aria-hidden="true">&rarr;</span>
			</a>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
const c = ref(
	{
		title: 'Views, components, layouts, and utilities for building your next frontend.',
		description: 'I found myself building the same frontend components over and over again. So I decided to build a frontend boilerplate or template that I can use to bootstrap my projects more efficinently.',
		heading: 'Why Start Your Next Frontend From Scratch?',
		link: '/page/about',
		primary: {
			text: 'Get the Code',
			link: 'https://github.com/jamesturner-dev/front-end.us',
		},
		secondary: {
			text: 'Continue Demo',
			link: '/page/about',
		}
	}
)
</script>

<style scoped>
.fakeButton {
  position: relative;
  overflow: hidden;
  border-radius: 9999px;
  padding: .375rem 1rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
}

.dark .fakeButton {
  color: var(--light-gray);
}
</style>