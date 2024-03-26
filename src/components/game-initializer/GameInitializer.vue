<script setup lang="ts">
defineEmits<{
  (e: 'game-start'): void
}>()
</script>

<template>
  <div>
    <h2>¿Are you a movie wise?</h2>
    <p>Prove that!</p>
    <button @click="$emit('game-start')">Start Game</button>
  </div>
</template>

<style></style>
