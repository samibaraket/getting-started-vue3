<template>
  <BaseLayout>
    <div class="text-center">
      <h1 class="text-3xl font-bold mb-4">🏠 Home</h1>
      <p class="text-gray-600 mb-6">
        Welcome to the Vue 3 + TypeScript + Tailwind CRUD App.
      </p>

      <RouterLink
        to="/users"
        class="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Go to Users
      </RouterLink>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from "@/components/BaseLayout.vue";
import { RouterLink } from "vue-router";
</script>
