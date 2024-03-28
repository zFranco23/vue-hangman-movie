<script setup lang="ts">
import type { Movie } from '@/models/movie'
import { computed, onMounted, ref } from 'vue'

const inputsRefs = ref<HTMLInputElement[]>([])

// definitions
const textValues = ref<Array<string>>([])
const props = defineProps<{ movie: Movie }>()
const emit = defineEmits<{
  (e: 'input-completed', value: string): void
}>()

const movieLength = computed(() => props.movie.title.length)
const movieName = computed(() => props.movie.title)

const splittedMovieName = computed(() => movieName.value.split(' '))

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
    // target.value = ''
    const prev = target.previousElementSibling as HTMLInputElement | null
    if (prev) {
      prev.focus()
    }
    return
  }

  handleVerifyComplete()
}

const handleVerifyComplete = () => {
  const completedInputs = textValues.value.filter((el) => !!el)

  const isValid = completedInputs.length === movieName.value.replace(/\s/g, '').length

  if (isValid) {
    const values = textValues.value.reduce((acc, curr) => acc + curr, '')
    emit('input-completed', values)
  }
}

const buildSingleHint = (word: string, startIndex: number) => {
  const li = startIndex
  const ls = startIndex + word.length - 1

  // edge cases
  // - length: 3

  if (word.length == 2) {
    const random = Math.random()
    textValues.value[random > 0.5 ? li : ls] = random > 0.5 ? word[0] : word[1]
  } else if (word.length % 2 == 0 || word.length === 3) {
    textValues.value[li] = word[0]
    textValues.value[ls] = word[word.length - 1]
  } else {
    const half = Math.floor((li + ls) / 2)
    textValues.value[li] = word[0]
    textValues.value[half] = word[Math.floor((word.length - 1) / 2)]
    textValues.value[ls] = word[word.length - 1]
  }
}

const buildHints = () => {
  splittedMovieName.value.forEach((word, index) => {
    buildSingleHint(word, index * movieLength.value)
  })
}

onMounted(() => {
  buildHints()
})
</script>
<template>
  <div>
    <h2>Overview:</h2>
    <blockquote>{{ movie.overview }}</blockquote>
  </div>

  <div>
    <h2>Genres:</h2>
    <ul v-for="genre of movie.genres" :key="genre.id">
      <li>
        {{ genre.name }}
      </li>
    </ul>
  </div>
  <div class="input_group">
    <template v-for="(word, wordIndex) of splittedMovieName" :key="word">
      <input
        v-for="(letter, index) of word"
        :key="letter"
        id="input"
        @input="handleInputChange"
        @keyup="handleKeyUp"
        v-model="textValues[wordIndex * movieLength + index]"
        type="text"
        maxlength="1"
        ref="inputsRefs"
        :style="{
          marginRight: index == word.length - 1 ? '60px' : undefined
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
