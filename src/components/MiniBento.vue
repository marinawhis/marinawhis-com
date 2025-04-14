<script setup lang="ts">

defineProps<{
  imageLink: string;
  label: string;
  description: string;
}>()

</script>

<template>

  <div class="bg-muted/50 rounded-xl p-4 space-y-4 border">
    <div class="flex items-center space-x-3">
      <img :src="imageLink" class="object-contain h-8"/>
      <div class="space-y-0">
        <h3 class="text-sm text-muted-foreground">
          {{ label }}
        </h3>
        <h4 class="text-sm font-semibold">
          {{ description }}
        </h4>
      </div>
    </div>
    <slot/>
  </div>

</template>

<style scoped>

</style>