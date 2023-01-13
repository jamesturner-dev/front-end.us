<template>
  <section>
    <!-- All these Flexes look a little cumbersome, but it's how the logo, title, and switch are aligned -->
    <div class="flex">
      <div class="flex-1">
        <div class="flex">
          <a :href="logo.link" class="flex">
            <img class="h-16 mr-2" :src="logo.src" :alt="logo.alt" />
          </a>
          <div>
            <h1 class="text-xl -mb-1">
              <a :href="siteInfo.url" class="subTitle">
              {{ siteInfo.subTitle }}&nbsp;{{ siteInfo.title }}
              </a>
            </h1>
            <a class="grayLink" :href="siteInfo.repository">
              <span class="text-xs">{{ siteInfo.aText }}</span>
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
    repository: 'https://github.com/jamesturner-dev/front-end.us',
    aText: '(The Github Repository is Here)'
  }
);
</script>
