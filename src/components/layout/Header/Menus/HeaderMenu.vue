<template>
  <div id="headerMenu">
    <LoginButtons />
    <MobileMenu :tabs="tabs" />
    <MainMenu :tabs="tabs" />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import LoginButtons from "../LoginButtons.vue";
import MobileMenu from "./mobileMenu.vue";
import MainMenu from "./mainMenu.vue";
const route = useRoute(); // <--- this is the magic line
const path = computed(() => route.path);
const isCurrent = (c) => {
  return c === path.value;
};

const tabs = [
  { name: "Home", href: "/", current: isCurrent("/") },
  { name: "About", href: "/page/about", current: isCurrent("Page") },
  { name: "Help", href: "/page/help", current: isCurrent("/page/help") },
  { name: "Register", href: "/user/register", current: isCurrent("/page/help") },
  { name: "Login", href: "/user/login", current: isCurrent("/page/help") },
];
</script>
