<template>
  <header class="bg-white shadow-md">
    <nav class="container mx-auto flex items-center justify-between p-4">
      <!-- Desktop Nav -->
      <ul class="hidden md:flex space-x-6">
        <li>
          <RouterLink
            to="/"
            class="text-gray-700 hover:text-blue-600"
            active-class="text-blue-600 font-medium"
          >
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/users"
            class="text-gray-700 hover:text-blue-600"
            active-class="text-blue-600 font-medium"
          >
            Users
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
