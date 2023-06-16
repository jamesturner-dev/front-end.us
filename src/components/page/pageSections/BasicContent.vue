<template>
  <main role="main" class="w-full sm:w-2/3 md:w-3/4 pr-10">
    <div class="container">
      <p v-for="content in theContent" :key="content" class="mb-5 pr-5">
        {{ content }}
      </p>
    </div>
  </main>
</template>

<script setup>

const theContent = [
  "Welcome to Vue Ventures, the premier provider of VueJS components and solutions for modern web development! This is all just filler content written by chatGPT.",
  "Founded by a team of passionate developers with years of experience in the tech industry, our mission is to make web development faster, easier, and more enjoyable for everyone. ",
  "We pride ourselves on our innovative products, exceptional customer service, and commitment to the VueJS community. ",
  "Whether you're a seasoned developer or just starting out, we've got the tools you need to succeed!  This is all just filler content written by chatGPT",
  "At Vue Ventures, we believe that web development should be fun and accessible for everyone. ",
  "That's why we've designed our products to be intuitive, user-friendly, and customizable, so you can focus on what you love - building great websites and apps! Our team of experts is always on hand to provide support and guidance, whether you're working on a personal project or a complex enterprise application.",
  "Plus, with our commitment to open source and the VueJS community, you can be sure that you're working with the best tools and resources available"
];
</script>