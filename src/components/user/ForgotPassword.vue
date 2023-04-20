<template>
  <div class="flex min-h-full items-center justify-center px-5">
    <div class="w-full max-w-md space-y-5">

      <PageHeader :content="content" />
      <ForgotPasswordForm />
     
    </div>
  </div>
</template>

<script setup>
import PageHeader from '../page/pageSections/PageHeader.vue';
import ForgotPasswordForm from './userForms/ForgotPasswordForm.vue';
const content = {
  heading: "Forgot  Password",
  subHeading: "Enter your email to reset your password"
}
</script>