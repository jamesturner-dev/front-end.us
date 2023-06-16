<template>
  <form @submit.prevent="" class=" mt-8 space-y-6">
    <input type="hidden" name="remember" value="true" />
    
    <div class="-space-y-px rounded-md shadow-sm">
      <div>
        <label for="email-address" class="sr-only">Email address</label>
        <input id="email-address" v-model="email" name="email" type="email" autocomplete="email" required=""
          class="formInput focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
          placeholder="Email address" />
      </div>
      <div>
        <label for="password" class="sr-only">Password</label>
        <input id="password" v-model="password" name="password" type="password" autocomplete="current-password"
          required="" class="formInput focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
          placeholder="Password" />
      </div>
    </div>

    <div class="flex items-center justify-between">
      <RememberMe /> &nbsp; &nbsp;
      <MemberLink :login=true />
    </div>

    <button @click="login" type="submit" class="primary w-full" aria-label="Login">
      <span class="absolute inset-y-0 left-0 flex items-center pl-3">
      </span>
      Sign in
    </button>

  </form>
</template>

<script setup>
import MemberLink from '../MemberLink.vue';
import RememberMe from '../RememberMe.vue';
import { ref } from 'vue';
const email = ref("");
const password = ref("");
const login = () => {
  console.log("login");
};
</script>