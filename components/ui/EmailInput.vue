<template lang="pug">
input.body-1(
  type="email"
  placeholder="Email"
  autocomplete="email"
  ref="input"
)
</template>

<script lang="ts" setup>
const input = ref<HTMLInputElement>()

onMounted(() => {
  (input.value as HTMLInputElement).required = true
})
</script>

<style lang="scss">
</style>
