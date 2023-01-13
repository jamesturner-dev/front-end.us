<template>
  <div class="py-20 px-5 grid place-items-center">
    <main class="mx-auto max-w-max sm:flex">
      <p class="responseCode"> 404 </p>
      <div class="ml-5">
        <ContentHeader :content = "content" />
        <BigButtons  />
      </div>
    </main>
  </div>
</template>

<script setup>
import BigButtons from "../components/shared/BigButtons.vue";
import ContentHeader from "../components/shared/ContentHeader.vue";

const content =
  {
    heading: "Page not found",
    subHeading: "Please check the URL in the address bar and try again.",
  };
</script>
