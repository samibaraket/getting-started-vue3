<template>
  <BaseLayout>
    <h1 class="text-2xl font-bold mb-4">Companies Management</h1>
    <CompanyList />
  </BaseLayout>
</template>

<script setup lang="ts">
import CompanyList from "@/components/company/CompanyList.vue";
import BaseLayout from "@/components/layout/BaseLayout.vue";
</script>
