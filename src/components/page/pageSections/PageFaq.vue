<template>
  <dl class="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-5 md:space-y-0 md:px-5">
    <div v-for="f in faq" :key="f.id" class="space-y-2">
      <dt class="text-lg font-medium leading-6 text-gray-700 mt-5">{{ f.question }}</dt>
      <dd class="text-base text-gray-500">{{ f.answer }}</dd>
      <dd v-if="f.link" class="text-base text-gray-500">
        <a :href="f.link" class="text-sky-400 hover:text-sky-600">
          Learn more
        </a>
      </dd>
    </div>
  </dl>
</template>

<script setup>
import { faq } from "../../js/faq.js";
</script>