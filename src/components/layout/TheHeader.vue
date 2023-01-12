<template>
  <section>
    <div class="flex">
      <div class="flex-1">
        <div class="flex">
          <a :href="logo.link" class="flex">
            <img class="h-16 mr-2"
              :src="logo.src"
              :alt="logo.alt" />
          </a>
          <div>
            <h1 class="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-300 -mb-1">
              <a :href="siteInfo.url" class="hover:text-gray-700 dark:hover:text-gray-200">
                {{ siteInfo.subTitle }}
              </a>
              <a :href="siteInfo.url" class="hover:text-gray-700 dark:hover:text-gray-200">
                &nbsp;{{ siteInfo.title }}
              </a>
            </h1>
            <a class="text-gray-400 dark:text-gray-700 hover:text-black dark:hover:text-white"
              href="https://github.com/jamesturner-dev/cb">
              (<span class="text-xs">The Github Repository is Here</span>)
            </a>
          </div>
        </div>
      </div>
      <TheSwitch />
    </div>
    <PublicMenu />
  </section>
</template>

<script setup>
import { ref } from 'vue';
import PublicMenu from "./Header/PublicMenu.vue";
import TheSwitch from './Header/TheSwitch.vue';
const logo = ref(
  { 
    src: 'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/ddf395ae-9b7e-46ef-01a2-ad7bec32d300/public',
    alt: 'James Turner Dev\'s FrontEnd.us Logo',
    link: '/'
   }
);
const siteInfo = ref(
  {
    subTitle: "James Turner Dev's",
    title: 'FrontEnd.us',
    url: '/',
    image: 'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/ddf395ae-9b7e-46ef-01a2-ad7bec32d300/public'
  }
);
</script>
