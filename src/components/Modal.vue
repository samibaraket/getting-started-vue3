<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black/40 flex items-center justify-center"
  >
    <div class="bg-white p-6 rounded-xl w-96 shadow-xl">
      <slot />
      <button @click="$emit('close')" class="mt-3 text-gray-600 text-sm">
        Close
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ show: boolean }>();
</script>
