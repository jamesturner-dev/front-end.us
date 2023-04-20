<template>
  <dl class="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-5 md:space-y-0 md:px-5">
    <div v-for="faq in faqs" :key="faq.id" class="space-y-2">
      <dt class="text-lg font-medium leading-6 text-gray-700 mt-5">{{ faq.question }}</dt>
      <dd class="text-base text-gray-500">{{ faq.answer }}</dd>
      <dd v-if="faq.link" class="text-base text-gray-500">
        <a :href="faq.link" class="text-sky-400 hover:text-sky-600">Learn more</a>
      </dd>
    </div>
  </dl>
</template>

<script setup>
const faqs = [
  {
    id: 1,
    question: "Why do you use Vue.js",
    answer: "Vue has a small learning curve and is easier to pick up for newcomers to front-end development. That said, it is also powerful enough to be used for large-scale front-end's while remaining performant.",
    link: 'https://jamesturner.dev/blog/why-vue',
  },
  {
    id: 2,
    question: 'Why did you make this?',
    answer: 'Everytime I start a new project I find myself looking for the same components. I wanted to create a bare bones template that I could use to bootstrap every new project I start..',
  },
  {
    id: 3,
    question: 'Can anyone use it?',
    answer: "Yes, it's open source and free to use. If you want to make a contribution, please do! Just fork the repo and submit a pull request.",
    link: 'https://github.com/jamesturner-dev/front-end.us',
  },
  {
    id: 4,
    question: 'Wait, wait I have more questions!',
    answer: 'Click on over to the Help page and I will do my best to answer your questions.',
    link: '/page/help',
  },

]
</script>