<template>
  <div class="md:flex md:items-center md:justify-between">
    <div class="mt-3 flex md:absolute md:top-3 md:right-0 md:mt-0">
      <button @click="$router.push({ name: 'UserView', params: { name: 'register' } })" type="button" aria-label="Sign Up"
        class="smallButton text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 mr-3 dark:ring-gray-800">
        Sign Up
      </button>
      <button @click="$router.push({ name: 'UserView', params: { name: 'login' } })" type="button" aria-label="Login"
        class="smallButton bg-sky-500 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
        Login
      </button>
    </div>
  </div>
</template>