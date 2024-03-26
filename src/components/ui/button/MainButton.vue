<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'

type ButtonVariant = 'outlined' | 'contained'

interface MainButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  variant?: ButtonVariant
}

withDefaults(defineProps<MainButtonProps>(), {
  variant: 'contained'
})
</script>

<template>
  <button class="btn" :data-variant="variant">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  all: unset;

  cursor: pointer;
  border: 2px solid #333333;
  border-radius: 10px;
  padding: 8px 16px;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &[data-variant='contained'] {
    background-color: #333333;
    color: white;
  }
}
</style>
