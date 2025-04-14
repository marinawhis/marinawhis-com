<script setup lang="ts">
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import {Button} from "@/components/ui/button";

defineProps<{
  text: string;
  noPadding?: boolean;
}>();
</script>

<template>

  <HoverCard>
    <HoverCardTrigger>
      <Button variant="link" v-text="text" :class="{'no-padding': noPadding}" class="inherit-typo"/>
    </HoverCardTrigger>
    <HoverCardContent class="w-sm">
      <slot />
    </HoverCardContent>
  </HoverCard>

</template>

<style scoped>
.no-padding {
  padding: 0;
}

.inherit-typo {
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
}
</style>