<template>
  <section class="mt-5">
    <div v-if="pageRoute == 'help'">
      <HelpPage />
    </div>
    <div v-if="pageRoute == 'about'">
      <AboutPage />
    </div>
    <div v-if="pageRoute == 'basic'">
      <BasicPage />
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import AboutPage from "../components/page/AboutPage.vue";
import HelpPage from "../components/page/HelpPage.vue";
import BasicPage from "../components/page/BasicPage.vue";
const route = useRoute();
const pageRoute = route.params.name; 
</script>
