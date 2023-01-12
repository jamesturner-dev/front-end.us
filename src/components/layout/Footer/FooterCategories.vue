<template>
  <div class="">
    <h3 class="text-sm font-medium text-gray-400">Navigation:</h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in categories" :key="item.name">
        <a :href="item.href"
          class="px-2 text-sm dark:text-gray-400 dark:hover:text-white text-gray-500 hover:text-gray-900">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const categories =  [
    { name: "Home Page", href: "/" },
    { name: "About This", href: "/page/about" },
    { name: "Help Page", href: "/page/help" },
    { name: "Contact Me", href: "https://jamesturner.dev/page/contact" },
  ];
</script>