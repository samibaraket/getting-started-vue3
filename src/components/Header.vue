<template>
  <header class="bg-white shadow p-4 flex justify-between items-center">
    <div class="text-xl font-bold">Vue CRUD App</div>
    <nav class="space-x-4">
      <RouterLink to="/" class="text-gray-700 hover:text-blue-600" active-class="text-blue-600 font-medium">
        Home
      </RouterLink>
      <RouterLink to="/users" class="text-gray-700 hover:text-blue-600" active-class="text-blue-600 font-medium">
        Users
      </RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>