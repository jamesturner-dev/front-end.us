<template>
  <section>
    <PageHeader :content="content" />
    <UserRegisterForm />
  </section>
</template>

<script setup>
import PageHeader from "../page/pageSections/PageHeader.vue";
import UserRegisterForm from "./userForms/UserRegisterForm.vue";
const content = {
  heading: "Forgot  Password",
  subHeading: "Enter your email to reset your password"
}
</script>
