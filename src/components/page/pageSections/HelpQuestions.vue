<template>
  <div class="w-full">
    <div class="mx-auto max-w-xl rounded-2xl my-10 p-2">
      <Disclosure v-slot="{ open }" v-for="h in help" :key="h.id">
        <DisclosureButton
          class="disclosureButton">
          <span> {{ h.question }} </span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-sky-700" />
        </DisclosureButton>
        <DisclosurePanel class="p-5 pb-2 text-sm text-gray-500">
          <p v-html="h.answer" class="mb-5"> </p>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script setup>
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'
import { help } from "../../js/help.js";
</script>

<style scoped>
.disclosureButton {
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-radius: 0.5rem;
  background-color: rgb(56 189 248);
  color: #fff;
  font-weight: 500;
  text-align: left;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
}

.dark .disclosureButton {
  background-color: rgb(17 24 39);
  color: rgb(7 89 133);
}

.disclosureButton:hover {
  background-color: rgb(52 211 153);
}

.dark .disclosureButton:hover {
  background-color: rgb(12 74 110);
  color: var(--lightSlate);
}
</style>