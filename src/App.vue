<template>
  <div class="min-h-full">
    <SearchForm />
    <main class="flex-1 relative mx-auto max-w-4xl mt-5">
      <div class="theContainer">
        <Header />
        <router-view :key="$route.fullPath" />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>

import Header from "./components/layout/TheHeader.vue";
import Footer from "./components/layout/TheFooter.vue";
import SearchForm from "./components/layout/Header/SearchForm.vue";
// import { ref, onMounted } from "vue";
// import { useRoute } from "vue-router";
// const route = useRoute(); // <--- this is the magic line
// const v = ref(false);

// onMounted(() => {
//   if (route.fullPath.includes("/value/")) {
//     v.value = true;
//   }
// });

</script>
