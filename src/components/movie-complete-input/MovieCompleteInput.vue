<script setup lang="ts">
import { computed, ref } from 'vue'

const inputsRefs = ref<HTMLInputElement[]>([])

// definitions
const textValues = ref<Array<string>>([])
const props = defineProps<{ name: string }>()
const emit = defineEmits<{
  (e: 'input-completed', value: string): void
}>()

const handleInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const val = target.value

  if (val != '') {
    const next = target.nextElementSibling as HTMLInputElement | null
    if (next) {
      next.focus()
    }
  }
}

const handleKeyUp = (e: KeyboardEvent) => {
  const target = e.target as HTMLInputElement
  const key = e.key.toLowerCase()

  if (key == 'backspace' || key == 'delete') {
    target.value = ''
    const prev = target.previousElementSibling as HTMLInputElement | null
    if (prev) {
      prev.focus()
    }
    return
  }

  handleVerifyComplete()
}

const handleVerifyComplete = () => {
  if (textValues.value.length !== movieLength.value) return
  const isValid = textValues.value.every((el) => !!el)
  if (isValid) {
    const values = textValues.value.reduce((acc, curr) => acc + curr, '')
    emit('input-completed', values)
  }
}

const movieLength = computed(() => props.name.length)
</script>
<template>
  <div>word: {{ props.name }}</div>

  <div class="input_group">
    <template v-for="(letter, index) of props.name" :key="letter + index">
      <input
        id="input"
        @input="(e) => handleInputChange(e)"
        @keyup="handleKeyUp"
        v-if="letter?.trim().length > 0"
        v-model="textValues[index]"
        type="text"
        maxlength="1"
        ref="inputsRefs"
        :style="{
          marginRight: index < movieLength - 1 && props.name[index + 1] === ' ' ? '60px' : undefined
        }"
      />
    </template>
  </div>
</template>

<style scoped lang="scss">
.input_group {
  margin: 16px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  input {
    all: unset;
    width: 100px;
    border-bottom: 2px solid #333333;
    text-align: center;
    font-size: 22px;
  }
}
</style>
