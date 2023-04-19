<template>
  <div class="mt-12 md:mt-0 footerWrapper">
    <h3 class="">Users:</h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in users" :key="item.name">
        <a :href="item.href" class="footerItem">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
 const users = [
    { name: "User Login", href: "/user/login" },
    { name: "Sign Up", href: "/user/register" },
    { name: "Forgot Login", href: "/user/forgot" },
    { name: "User Help", href: "/page/help" },
  ]
</script>