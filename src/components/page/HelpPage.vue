<template>
  <div class="relative overflow-hidden py-5">
    <PageHeader :content="content" />
    <HelpQuestions />
  </div>
</template>

<script setup>
import HelpQuestions from './HelpQuestions.vue';
import PageHeader from './PageHeader.vue';

const content = {
  heading:  "Click on the question to reveal the answer", 
  subHeading: "Front-End.us Q & A"
}
</script>

