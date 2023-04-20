<template>
  <div class="relative mx-auto py-5 overflow-hidden">
    <PageHeader :content="content" />
    <div class="mx-auto sm:py-10">
      <PageQuote />
      <PageFaq />
    </div>
  </div>
</template>

<script setup>
import PageHeader from './pageSections/PageHeader.vue';
import PageQuote from './pageSections/PageQuote.vue';
import PageFaq from './pageSections/PageFaq.vue';
const content = {
  heading: "About front-end.us",
  subHeading: "What's this all about then?"
}
</script>