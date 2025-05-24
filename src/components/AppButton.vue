<script setup lang="ts">
import {Button} from "@/components/ui/button";
import {ArrowUpRight} from "lucide-vue-next";

defineProps<{
  title: string
  subtitle?: string
  icon: string
  href: string
}>()
</script>

<template>
  <a
      :href="href"
      target="_blank"
      rel="noopener noreferrer"
  >
    <Button variant="ghost" class="p-8 w-full">
      <div class="flex items-center w-full gap-4">
        <img :src="icon" alt="App icon" class="rounded-md size-6"/>
        <div class="flex flex-col items-start w-full">
          <span class="text-base font-semibold">{{ title }}</span>
          <span v-if="subtitle" class="text-sm text-muted-foreground">{{ subtitle }}</span>
        </div>
      </div>
      <ArrowUpRight :size="12" class="inline mx-1" />
    </Button>
  </a>
</template>

<style scoped>

</style>