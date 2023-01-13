<template>
  <section class="footerWrapper">
    <h3> Latest News: </h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in categories" :key="item.name">
        <a :href="item.href" class="footerItem">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
const categories = [
  { name: "Technology", href: "https://headlin3s.com/categories/Tech" },
  { name: "The News", href: "https://headlin3s.com/categories/News" },
  { name: "Online Video", href: "https://linkz.network/tag/video" },
  { name: "Software", href: "https://linkz.network/cat/software" },
];
</script> 