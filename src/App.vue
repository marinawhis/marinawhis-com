
<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import { Separator } from '@/components/ui/separator'
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar'
import LinkHovercard from "@/components/ui/misc/LinkHovercard.vue";
import { ExternalLink } from 'lucide-vue-next';
import MiniBento from "@/components/MiniBento.vue";
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
			<div class="flex flex-1 flex-col gap-16 p-24">
        <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Low Commitment, High Curiosity.
        </h1>
        <p class="text-xl text-muted-foreground">
          I'm Marina: a Senior Product Designer also known as
          <LinkHovercard text="whis" no-padding>

            <div class="flex justify-between space-x-4">
                <img src="../src/assets/whis-popover.jpg" class="rounded-md object-cover w-full"/>
              <div class="space-y-2">
                <h4 class="text-sm font-semibold">
                  Whis (ウイス)
                </h4>
                <p class="text-sm">
                  Whis is an angelic, ultra-powerful being who serves as the calm, mysterious mentor and attendant to Beerus, the God of Destruction. Despite his playful, elegant demeanor, he’s one of the strongest characters in the series.
                </p>
                <Button variant="link">
                  <a href="https://dragonballuniverse.fandom.com/wiki/Whis" class="text-sm font-semibold flex items-center" target="_blank">Learn more <ExternalLink :size="12" class="inline mx-1" /></a>
                </Button>
              </div>
            </div>

          </LinkHovercard> on the internet.<br>
          I tinker with 3D, break my own websites, and collect shiny new tools like a 🦝 in a tech dumpster.
        </p>

        <!-- TODO: Alt text for links for them restarted ppl-->
				<div class="grid auto-rows-min gap-4 md:grid-cols-3 items-stretch">
          <MiniBento image-link="../src/assets/Netflix_2015_N_logo.svg.png" label="Currently watching" description="Devil May Cry (2025)">
            <div class="flex flex-row">
            <a href="https://www.netflix.com/de-en/title/81506915" alt="#" target="_blank" class="w-full rounded-md border cursor-pointer overflow-hidden"><img src="../src/assets/DMC_Netflix.png" class="w-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"/></a>
            </div>
          </MiniBento>
          <MiniBento image-link="../src/assets/Spotify_Primary_Logo_RGB_Green.png" label="Currently listening" description="we are all going to die">
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6DsPxCyJ60nqSCEMkUSdDs?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </MiniBento>
          <MiniBento image-link="../src/assets/Steam_icon_logo.svg.png" label="Currently playing" description="Titles on Steam">
            <div class="flex flex-row justify-between items-stretch gap-4">
              <a href="https://store.steampowered.com/app/2456740/inZOI/" alt="#" target="_blank" class="rounded-md border cursor-pointer overflow-hidden"><img src="../src/assets/inzoi-thumbnail.jpg" class="h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"/></a>
              <a href="https://store.steampowered.com/app/2001120/Split_Fiction/" alt="#" target="_blank" class="rounded-md border cursor-pointer overflow-hidden"><img src="../src/assets/splitfiction-thumbnail.jpg" class="h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"/></a>
              <a href="https://store.steampowered.com/app/1086940/Baldurs_Gate_3/" alt="#" target="_blank" class="rounded-md border cursor-pointer overflow-hidden"><img src="../src/assets/baldurs-gate-3.jpg" class="h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"/></a>
            </div>
          </MiniBento>
				</div>

        <h2 class="scroll-m-20 pb-2 text-3xl font-extrabold tracking-tight transition-colors first:mt-0">
          Something clever and whiteboard related I guess
        </h2>
        <p class="text-md text-muted-foreground">Some description to make sure I'm not gonna get sued if someone gets leaked on here</p>
				<div class="bg-muted/50 rounded-xl p-4 h-lvh border">
          <iframe class="rounded-md object-cover border w-full h-full" referrerpolicy="no-referrer" allowfullscreen="false" src="https://wbo.ophir.dev/boards/glorioussandbox"></iframe>
        </div>
			</div>
		</SidebarInset>
	</SidebarProvider>
</template>