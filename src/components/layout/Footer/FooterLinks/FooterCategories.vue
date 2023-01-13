<template>
  <div class="footerWrapper">
    <h3> Navigation: </h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in categories" :key="item.name">
        <a :href="item.href" class="footerItem">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const categories = [
  { name: "Home Page", href: "/" },
  { name: "About This", href: "/page/about" },
  { name: "Help Page", href: "/page/help" },
  { name: "Contact Me", href: "https://jamesturner.dev/page/contact" },
];
</script>