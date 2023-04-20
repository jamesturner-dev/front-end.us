<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center"></div>
    <div v-if="!login" class="text-sm">
      <a href="/user/login" class="text-sky-500 hover:text-sky-600 dark:hover:text-sky-300">
        Already a Member?
      </a>
    </div>
    <div v-else class="text-sm">
      <a href="/user/forgot"
        class="text-sky-400 hover:text-sky-600 dark:hover:text-sky-300">
        Forgot your password?
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  login: {
    type: Boolean,
    required: true,
  },
});
</script>
