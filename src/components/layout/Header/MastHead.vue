<template>
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
</template>

<script setup>
import { ref } from 'vue';
const siteInfo = ref(
  {
    subTitle: "JamesTurnerDev's",
    title: 'Front-End.us',
    url: '/',
    repository: 'https://github.com/jamesturner-dev/front-end.us',
    aText: '(The Github Repository is Here)'
  }
);
</script>