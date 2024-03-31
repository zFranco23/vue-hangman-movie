<script setup lang="ts">
import { getPosterImage } from '../../helpers/get-poster-image'
defineProps<{
  imdbId: string
}>()
</script>

<template>
  <div>
    <p>¡YOU WIN!</p>
  </div>
  <picture class="PosterMovie">
    <img alt="" :src="getPosterImage(imdbId)" />
  </picture>
</template>

<style lang="scss">
.PosterMovie {
  width: 30rem;
  height: 40rem;
  display: block;

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
}
</style>
