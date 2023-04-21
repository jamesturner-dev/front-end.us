<template>
  <div class="container pt-5">
    <ContentHeader :content="content" />
    <div class="flex flex-row flex-wrap">
      <BasicContent />
      <SideBar />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import SideBar from "../shared/SideBar.vue";
import BasicContent from "./pageSections/BasicContent.vue";
import ContentHeader from "../shared/ContentHeader.vue";
const route = useRoute();
const pageRoute = route.params.name;
const content = {
  heading:  "Basic Page", 
  subHeading: "Thought a basic page template would be nice"
}
</script>
