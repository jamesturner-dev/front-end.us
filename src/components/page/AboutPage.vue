<template>
  <div class="relative overflow-hidden">
    <div class="mx-auto py-5">

      <PageHeader :content="content" />

      <div class="mx-auto sm:py-10">

        <blockquote class="mb-20">
          <div class="mx-auto max-w-3xl text-center text-2xl font-medium leading-7 text-gray-700">
            <p>&ldquo;What can I do to get new web projects started as quickly as possible? Make a template...&rdquo;
            </p>
          </div>
          <footer class="mt-8">
            <div class="md:flex md:items-center md:justify-center">
              <div class="md:flex-shrink-0">
                <img class="mx-auto h-10 w-10 rounded-full"
                  src="https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/fc4278f6-502a-422e-c16a-00b47d53d900/public"
                  alt="" />
              </div>
              <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                <div class="text-base font-medium text-gray-600">James Turner</div>

                <svg class="mx-1 hidden h-3 w-3 text-sky-400 md:block" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 0h3L9 20H6l5-20z" />
                </svg>

                <div class="text-base font-medium text-gray-500">James Turner Dev</div>
              </div>
            </div>
          </footer>
        </blockquote>


        <dl class="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-5 md:space-y-0 md:px-5">
          <div v-for="faq in faqs" :key="faq.id" class="space-y-2">
            <dt class="text-lg font-medium leading-6 text-gray-700 mt-5">{{ faq.question }}</dt>
            <dd class="text-base text-gray-500">{{ faq.answer }}</dd>
            <dd v-if="faq.link" class="text-base text-gray-500">
              <a :href="faq.link" class="text-sky-400 hover:text-sky-600">Learn more</a>
            </dd>
          </div>
        </dl>

      </div>

    </div>
  </div>
</template>

<script setup>
import PageHeader from './PageHeader.vue';
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

const content = {
  heading: "About front-end.us",
  subHeading: "What's this all about then?"
}

</script>