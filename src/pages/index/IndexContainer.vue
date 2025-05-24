<script setup lang="ts">

import MiniBento from "@/components/MiniBento.vue";
import MediaCard from "@/components/MediaCard.vue";
import AppButton from "@/components/AppButton.vue";
import { ArrowUpRight } from 'lucide-vue-next';
import LinkHovercard from "@/components/ui/misc/LinkHovercard.vue";
import { Button } from '@/components/ui/button';
</script>

<template>
  <div class="flex flex-1 flex-col gap-16 p-24">

    <div class="flex flex-wrap justify-between">
      <div class="basis-1/4">
        <h1 class="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
          Low Commitment, High Curiosity.
        </h1>
      </div>
      <div class="basis-2/4">
        <p class="text-xl text-muted-foreground">
        I'm Marina: a Senior Product Designer also known as
        <LinkHovercard text="whis" no-padding>

          <div class="flex justify-between space-x-4">
            <div class="basis-1/4">
              <img src="/src/assets/whis-popover.jpg" class="rounded-md object-cover w-full h-full"/>
            </div>
            <div class="basis-3/4 space-y-2">
              <h4 class="text-sm font-semibold">
                Whis (ウイス)
              </h4>
              <p class="text-sm">
                Whis is an angelic, ultra-powerful being who serves as the calm, mysterious mentor and attendant to Beerus, the God of Destruction. Despite his playful, elegant demeanor, he’s one of the strongest characters in the Dragonball series.
              </p>
              <Button variant="link">
                <a href="https://dragonballuniverse.fandom.com/wiki/Whis" class="text-sm font-semibold flex items-center" target="_blank">Learn more <ArrowUpRight :size="12" class="inline mx-1" /></a>
              </Button>
            </div>
          </div>

        </LinkHovercard> on the internet.<br>
        I tinker with 3D, break my own websites, and collect shiny new tools like a 🦝 in a tech dumpster.
      </p>
      </div>
    </div>

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
              href="https://store.steampowered.com/app/1085660/Destiny_2/"
              image-src="../src/assets/destiny2.jpg"
              label="View 'Destiny 2' on Steam"
          />

          <MediaCard
              href="https://store.steampowered.com/app/1086940/Baldurs_Gate_3/"
              image-src="../src/assets/baldurs-gate-3.jpg"
              label="View 'Baldur's Gate 3' on Steam"
          />

          <MediaCard
              href="https://store.steampowered.com/app/2001120/Split_Fiction/"
              image-src="../src/assets/splitfiction-thumbnail.jpg"
              label="View 'Split Fiction' on Steam"
          />

          <MediaCard
              href="https://store.steampowered.com/app/2456740/inZOI/"
              image-src="../src/assets/inzoi-thumbnail.jpg"
              label="View 'Inzoi' on Steam"
          />

        </div>
      </MiniBento>
    </div>

    <div class="flex flex-wrap justify-between border-t-1 pt-8 mt-16">
      <div class="basis-1/4">
        <h2 class="scroll-m-20 text-4xl font-bold tracking-tight lg:text-4xl">
          Workflows and Shenanigans
        </h2>
      </div>
      <div class="basis-2/4">
        <p class="text-xl text-muted-foreground">
          You know that moment when you screen-share and someone goes: “hold up, what app is that?” — this is for that. It’s everything from design tools to terminal toys. Not optimized. Not aesthetic. Just the stuff that helps me stay curious and occasionally productive.
        </p>
        <div class="grid grid-cols-2 gap-4 flex flex-wrap bg-muted/50 rounded-xl p-4 border mt-16">
          <AppButton
              title="Figma"
              subtitle="Design Tool"
              icon="/src/assets/figma_logo_icon.png"
              href="https://figma.com"
          />

          <AppButton
              title="Zen"
              subtitle="Browser"
              icon="/src/assets/zen-browser-icon.svg"
              href="https://zen-browser.app/"
          />

          <AppButton
              title="WebStorm"
              subtitle="JavaScript and TypeScript IDE"
              icon="/src/assets/WebStorm_Icon.png"
              href="https://www.jetbrains.com/webstorm/"
          />

          <AppButton
              title="GitHub Desktop"
              subtitle="GUI Git client"
              icon="/src/assets/github_desktop.png"
              href="https://github.com/apps/desktop"
          />

          <AppButton
              title="Spline"
              subtitle="3D Design Tool"
              icon="/src/assets/spline-app-icon-v2.png"
              href="https://spline.design/"
          />

          <AppButton
              title="Blender"
              subtitle="3D Tool"
              icon="/src/assets/blender_icon_256x256.png"
              href="https://www.blender.org/"
          />

          <AppButton
              title="ChatGPT"
              subtitle="AI to organize my head"
              icon="/src/assets/OpenAI-black-monoblossom.png"
              href="https://chatgpt.com/"
          />

          <hr class="col-span-full m-4">

          <AppButton
              title='Macbook Pro 14"'
              subtitle="M4 Pro Chip"
              icon="/src/assets/Apple_logo_black.svg"
              href="https://www.apple.com/shop/buy-mac/macbook-pro/14-inch-m4-pro"
          />

          <AppButton
              title='Renderzilla'
              subtitle='ATX Tower'
              icon="/src/assets/win-logo.png"
              href="#"
          />

          <!-- TODO: Fix Logo sizing, maybe make your own in a square like an app icon -->

        </div>


      </div>
    </div>

    <div class="flex flex-wrap justify-between border-t-1 pt-8 mt-16">
      <div class="basis-1/4">
        <h2 class="scroll-m-20 text-4xl font-bold tracking-tight lg:text-4xl">
          This Is Why We Can’t Have Nice Things
        </h2>
      </div>
      <div class="basis-2/4">
        <p class="text-xl text-muted-foreground">
          What happens when you hand the mic to everyone and leave the room? This. A shared sketch zone where anyone can draw, edit, overwrite, or add to the mess. It’s part playground, part group chat, part visual experiment. I have no idea what it’ll look like tomorrow, and that’s the point.
        </p>
      </div>
      <div class="bg-muted/50 rounded-xl p-4 border mt-16 w-full h-240">
        <iframe class="rounded-md object-cover border w-full h-full" referrerpolicy="no-referrer" allowfullscreen="false" src="https://wbo.ophir.dev/boards/glorioussandbox"></iframe>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>