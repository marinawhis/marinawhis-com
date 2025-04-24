<!-- components/MediaCard.vue -->
<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next'

defineProps<{
  href: string
  imageSrc: string
  label: string
}>()
</script>

<template>
  <div
      class="hover-effect basis-1/4 transition-all duration-500 h-full rounded-md border cursor-pointer overflow-hidden hover:basis-2/4 group-hover:basis-1/4 grow"
  >
    <a
        :href
        target="_blank"
        class="block w-full h-full relative"
    >
      <img
          :src="imageSrc"
          class="h-full w-full object-cover ease-in-out"
      />
      <div class="absolute inset-0 bg-black/50 flex items-end justify-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <span class="text-xs text-white font-bold flex items-center gap-1">
            {{label}}
            <ExternalLink :size="14" class="inline flex-shrink-0" />
          </span>
      </div>
    </a>
  </div>
</template>

<style scoped>

.hover-effect:hover img {
  @apply transition-transform duration-700 scale-110
}

</style>