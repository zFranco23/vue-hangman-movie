<script setup lang="ts">
import Button from '../ui/button/MainButton.vue'

defineEmits<{
  (e: 'game-start'): void
}>()
</script>

<template>
  <div>
    <h1>¿Are you a movie wise?</h1>
    <h2>Prove that....</h2>

    <Button
      @click="
        () => {
          $emit('game-start')
        }
      "
      :style="{ marginTop: '1rem' }"
      >Start Game
    </Button>
  </div>
</template>
