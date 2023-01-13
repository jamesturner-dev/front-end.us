<template>
  <section>
    <ContentHeader :content="[`${returnedLinks.length} results returned for`, searchTerm]" />
    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-800">
      <li v-for="(link, i) in returnedLinks" :key="i">
        <p class="theContent">
          <a :href="link.longUrl" class="text-xl primaryText textLink">
            {{ link.title }}
          </a>
        </p>
        <div class="theContent">
          <a :href="getURL(link.category)"> Filed under:
            <span class="primaryText">{{ link.category }}</span>
          </a>
          &nbsp; . &nbsp; Created on {{ link.createdAt.slice(0, 10) }}
          &nbsp; . &nbsp; Rated:
          <span class="primaryText">{{ link.rating }}</span>
        </div>
        <p class="secondaryText">{{ link.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import ContentHeader from "../components/shared/ContentHeader.vue";

const route = useRoute();
const searchTerm = route.params.searchTerm; // (it is reactive)
const returnedLinks = ref([]);

const content =
  {
    heading: searchTerm,
    subHeading: `${returnedLinks.length} results returned for ${searchTerm}`
  };

//** This how I do site search usually - pass the search term to this page via route params.  
//** I am Leaving it here so I can impliment quickly if needed - shouldn't hurt anything 
//** - if you delete - delete the route too */

// const getSearchedLinks = async () => {
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       searchTerm: searchTerm,
//     }),
//   };

//   const response = await fetch(
//     "http://localhost:5000/api/v1/search",
//     requestOptions
//   );

//   const data = await response.json();

//   if (data.count != 0) {
//     const lst = data.data;
//     _lst.forEach((item) => {
//       returnedLinks.value.push(item);
//     });
//   }

// };

// const getURL = (id) => {
//   return `/cat/${id}`;
// };


onMounted(() => {
  // try {
  //   getSearchedLinks();
  // } catch (error) {
  //   console.log(error);
  // }
});
</script>
