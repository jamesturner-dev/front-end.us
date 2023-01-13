<template>
  <section>
    <div class="flex">
      <div class="flex-1">
        <div class="flex">
          <TheLogo />
          <MastHead />
        </div>
      </div>
      <TheSwitch />
    </div>
    <HeaderMenu />
  </section>
</template>

<script setup>
import HeaderMenu from "./Header/Menus/HeaderMenu.vue";
import TheSwitch from './Header/TheSwitch.vue';
import MastHead from './Header/MastHead.vue';
import TheLogo from './Header/TheLogo.vue';
</script>
