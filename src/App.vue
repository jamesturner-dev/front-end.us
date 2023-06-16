<template>
  <div class="min-h-full">
    <SearchForm />
    <main class="container">
      <Header />
      <router-view :key="$route.fullPath" />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/layout/TheHeader.vue";
import Footer from "./components/layout/TheFooter.vue";
import SearchForm from "./components/layout/Header/SearchForm.vue";
</script>
