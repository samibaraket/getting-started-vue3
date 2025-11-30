<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-1 p-6">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "./Footer.vue";
import Header from "./Header.vue";
</script>