<template>
  <section>
    <div class="flex">
      <div class="flex-1">
        <div class="flex">
          <a :href="logo.link" class="flex">
            <img class="h-16 mr-2" :src="logo.src" :alt="logo.alt" />
          </a>
          <div>
            <h1 class="text-xl -mb-1">
              <a :href="siteInfo.url" class="hover:text-black">
                {{ siteInfo.subTitle }}
              </a>
              <a :href="siteInfo.url" class="grayLink">&nbsp;{{ siteInfo.title }}</a>
            </h1>
            <a class="grayLink" :href="siteInfo.repository">
              <span class="text-xs">(The Github Repository is Here)</span>
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
    alt: 'James Turner Dev\'s Front-End.us Logo',
    link: '/'
  }
);
const siteInfo = ref(
  {
    subTitle: "James Turner Dev's",
    title: 'Front-End.us',
    url: '/',
    repository: 'https://github.com/jamesturner-dev/front-end.us'
  }
);
</script>
