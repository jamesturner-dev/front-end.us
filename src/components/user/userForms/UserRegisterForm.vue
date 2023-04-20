<template>
    <form @submit.prevent="" class="mt-5 space-y-6">
      <input type="hidden" name="remember" value="true" />
      <div class="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="name" class="sr-only">Name</label>
          <input id="name" v-model="name" name="name" type="text" autocomplete="name" required=""
            class="formInput focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
            placeholder="Name" />
        </div>
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
        <div>
          <label for="confirm-password" class="sr-only">Password</label>
          <input id="confirm-password" v-model="confirmPassword" name="confirm-password" type="password"
            autocomplete="confirm-password" required=""
            class="formInput focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
            placeholder="Confirm Password" />
        </div>
      </div>

      <MemberLink :login=false />

      <button @click="register" type="submit" class="primary w-full" aria-label="Register">
        Register
      </button>

    </form>
</template>

<script setup>
import MemberLink from "../MemberLink.vue";

import { ref } from 'vue';
const register = () => {
  console.log('register');
}
const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

</script>