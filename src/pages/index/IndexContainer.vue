<script setup lang="ts">

import MiniBento from "@/components/MiniBento.vue";
import MediaCard from "@/components/MediaCard.vue";
import {ExternalLink} from "lucide-vue-next";
import LinkHovercard from "@/components/ui/misc/LinkHovercard.vue";
</script>

<template>
  <div class="flex flex-1 flex-col gap-16 p-24">
    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Low Commitment, High Curiosity.
    </h1>
    <p class="text-xl text-muted-foreground">
      I'm Marina: a Senior Product Designer also known as
      <LinkHovercard text="whis" no-padding>

        <div class="flex justify-between space-x-4">
          <div class="basis-1/4"><img src="../src/assets/whis-popover.jpg" class="rounded-md object-cover w-full h-full"/></div>
          <div class="basis-3/4 space-y-2">
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
    <div class="grid grid-cols-1 auto-rows-min gap-4 lg:grid-cols-3 items-stretch">
      <MiniBento image-link="../src/assets/Netflix_2015_N_logo.svg.png" label="Currently watching" description="Devil May Cry (2025)">
        <div class="flex flex-row gap-2 h-full group aspect-video">
          <MediaCard class="basis-4/4"
                     href="https://www.netflix.com/de-en/title/81506915"
                     image-src="../src/assets/DMC_Netflix.png"
                     label="Watch 'Devil May Cry' on Netflix"
          />
        </div>

      </MiniBento>

      <MiniBento
          image-link="../src/assets/Spotify_Primary_Logo_RGB_Green.png"
          label="Currently listening"
          description="@marinawhis"
      >
        <div class="flex flex-row gap-2 h-full group aspect-video">

          <MediaCard class="basis-2/4"
                     href="https://open.spotify.com/playlist/6DsPxCyJ60nqSCEMkUSdDs?si=7e4217bf106644ff/"
                     image-src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72ce94840282f7963d71d0b2910"
                     label="View 'we are all going to die' Playlist"
          />

          <MediaCard
              href="https://open.spotify.com/playlist/0CgoBf49QomCeNNlYHv3oe?si=165b0fc063104e90/"
              image-src="../src/assets/come-playlist.jpg"
              label="View 'Come again?' Playlist"
          />

          <MediaCard
              href="https://open.spotify.com/playlist/0CgoBf49QomCeNNlYHv3oe?si=165b0fc063104e90/"
              image-src="https://image-cdn-fa.spotifycdn.com/image/ab67706c0000d72cf3629ac7f97293c6c0eeb9eb"
              label="View '-Shoegaze & Dream Pop' Playlist"
          />

        </div>
      </MiniBento>

      <MiniBento
          image-link="../src/assets/Steam_icon_logo.svg.png"
          label="Currently playing"
          description="Titles on Steam">

        <div class="flex flex-row gap-2 h-full group aspect-video overflow-hidden">

          <MediaCard
              href="https://store.steampowered.com/app/2456740/inZOI/"
              image-src="../src/assets/inzoi-thumbnail.jpg"
              label="View 'Inzoi' on Steam"
          />

          <MediaCard
              href="https://store.steampowered.com/app/2001120/Split_Fiction/"
              image-src="../src/assets/splitfiction-thumbnail.jpg"
              label="View 'Split Fiction' on Steam"
          />

          <MediaCard
              href="https://store.steampowered.com/app/1086940/Baldurs_Gate_3/"
              image-src="../src/assets/baldurs-gate-3.jpg"
              label="View 'Baldur's Gate 3' on Steam"
          />

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
</template>

<style scoped>

</style>