<template>
  <BaseLayout>
    <h1 class="text-2xl font-bold mb-4">Users Management</h1>
    <UserList />
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from "@/components/BaseLayout.vue";
import UserList from "@/components/UserList.vue";
</script>
