<template>
  <form @submit.prevent="" class="mt-8 space-y-3">
    <div class="-space-y-px rounded-md shadow-sm">
      <label for="email-address" class="sr-only">Email address</label>
      <input id="email-address" v-model="email" name="email" type="email" autocomplete="email" required=""
        class="formInput focus:z-10 focus:border-sky-500" placeholder="Email address" />
    </div>
    <button @click="login" type="submit" class="primary w-full" aria-label="Sign In">
      Sign in
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
const email = ref("");
const login = () => {
  console.log('login');
}
</script>