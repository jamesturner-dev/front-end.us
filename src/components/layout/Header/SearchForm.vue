<template>
  <section class="stickySearch flex flex-1 justify-between">
    <form class="flex flex-1 w-full md:ml-0" @submit.prevent="siteSearch">
      <label for="search-field" class="sr-only">Site Search</label>
      <div class="ml-2 relative w-full text-gray-300 dark:text-gray-800">
        <div class="pointer-events-none absolute inset-y-0 left-2 flex items-center">
          <MagnifyingGlassCircleIcon class="h-5 w-5 flex-shrink-0 cursor-pointer" aria-hidden="true" />
        </div>
        <input name="headerSearch" id="searchInput"
          class="placeholder-gray-300 dark:placeholder-gray-600 focus:outline-none focus:ring-0 sm:block"
          placeholder="Search Site" v-model="searchTerm" @keyup.enter="siteSearch" type="search" />
      </div>
    </form>
    <div class="mx-5 flex items-center">
      <button type="submit" aria-label="Search Submit"
        class="searchSubmit focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-0">
        <ChevronDoubleRightIcon @click="siteSearch" class="h-3 w-3" aria-hidden="true" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { ChevronDoubleRightIcon } from "@heroicons/vue/24/outline";
import { MagnifyingGlassCircleIcon } from "@heroicons/vue/20/solid";
const searchTerm = ref("");

const siteSearch = () => {
  if (searchTerm) {
    window.location.href = `/search/${searchTerm.value}`;
  }
};
</script>
