<template>
  <div class="relative border-b border-gray-200 dark:border-gray-900 pb-5">
    <LoginButtons />
   

      <div class="sm:hidden mt-5">
        <label for="current-tab" class="sr-only">Select a tab</label>
        <select id="current-tab" name="current-tab"
          class="block w-full rounded-md border-gray-300 dark:border-gray-700 py-2 pl-3 pr-10 text-base focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm">
          <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
            {{ tab.name }}
          </option>
        </select>
      </div>
      <div class="hidden sm:block mt-5">
        <nav class="-mb-px flex space-x-8 ml-5">
          <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[
            tab.current
              ? 'border-emerald-500 text-sky-500'
              : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-400 hover:border-gray-300 dark:hover:border-gray-800',
            'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm',
          ]" :aria-current="tab.current ? 'page' : undefined">{{ tab.name }}</a>
        </nav>
      </div>

  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import LoginButtons from "./LoginButtons.vue";
const route = useRoute(); // <--- this is the magic line
const path = computed(() => route.path);
const isCurrent = (c) => {
  return c === path.value;
};

const tabs = [
  { name: "Home", href: "/", current: isCurrent("/") },
  { name: "Admin", href: "/admin", current: isCurrent("/admin") },
  { name: "About", href: "/page/about", current: isCurrent("/page/about") },
  { name: "Help", href: "/page/help" },
  { name: "SignUp", href: "/user/register" },
  { name: "Login", href: "/user/login" },

];
</script>
