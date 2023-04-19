<template>
  <section>
    <Switch v-model="isDark" :class="isDark ? 'bg-slate-800' : 'bg-neutral-200'"
      class="relative inline-flex h-6 w-11 items-center rounded-full">
      <span class="sr-only">Toggle Dark Mode</span>
      <span :class="isDark ? 'translate-x-6' : 'translate-x-1'"
        class="toggleSwitch transform transition" />
    </Switch>
  </section>
</template>

<script setup>
import { useDark } from "@vueuse/core";
import { ref } from "vue";
import { Switch } from "@headlessui/vue";
const isDark = ref(useDark());
</script>