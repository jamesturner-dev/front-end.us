<template>
  <section class="wrapper">
    <div>
      <PageHeader :content="content" />
      <UserLoginForm />
    </div>
  </section>
</template>

<script setup>

import UserLoginForm from './userForms/UserLoginForm.vue';
import PageHeader from "../page/pageSections/PageHeader.vue";
const content = {
  heading: "Login",
  subHeading: "Sign in to your account"
}
</script>
