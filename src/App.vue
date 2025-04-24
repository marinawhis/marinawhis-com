
<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import { Separator } from '@/components/ui/separator'
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar'
</script>

<template>
  <!-- TODO: Tell AI crawlers to fuck right off-->
	<SidebarProvider>
		<AppSidebar />
		<SidebarInset>
			<header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
				<div class="flex items-center gap-2 px-8">
					<SidebarTrigger class="-ml-1" />
					<Separator
						orientation="vertical"
						class="mr-2 data-[orientation=vertical]:h-4"
					/>
				</div>
			</header>
      <RouterView/>
		</SidebarInset>
	</SidebarProvider>
</template>
