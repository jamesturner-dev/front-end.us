<template>
  <section>
    <SearchHeader :content="content" />
    <fakeSearchResults />
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import SearchHeader from "../components/shared/SearchHeader.vue";
import fakeSearchResults from "../components/shared/fakeSearchResults.vue";
const route = useRoute();
const searchTerm = route.params.searchTerm; 
const content = {
  heading: "You searched for:",
  subHeading: searchTerm,
};
</script>
