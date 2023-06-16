<template>
  <div>
    <h1 class="text-xl -mb-2 mt-1">
      <a :href="siteInfo.url">
        {{ siteInfo.title }}
      </a>
    </h1>
    <a class="grayLink" :href="siteInfo.repository">
      <span class="text-xs">{{ siteInfo.aText }}</span>
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const siteInfo = ref(
  {
    subTitle: "",
    title: 'Front-End.us',
    url: '/',
    repository: 'https://github.com/jamesturner-dev/front-end.us',
    aText: '(The Github Repository is Here)'
  }
);
</script>