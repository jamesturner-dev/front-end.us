<template>
  <div class="relative overflow-hidden py-5">
    <PageHeader :content="content" />
    <HelpQuestions />
  </div>
</template>

<script setup>
import HelpQuestions from './pageSections/HelpQuestions.vue';
import PageHeader from './pageSections/PageHeader.vue';
const content = {
  heading:  "Click on the question to reveal the answer", 
  subHeading: "Front-End.us Q & A"
}
</script>

