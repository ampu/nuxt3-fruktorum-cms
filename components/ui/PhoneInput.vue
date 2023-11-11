<template lang="pug">
uiPatternInput.body-1(
  type="tel"
  name="phone"
  placeholder="Телефон"
  autoComplete="tel"
  format="+7 (###) ###-##-##"
  pattern="\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}"
  :required="true"
)
</template>

<script setup>
</script>

<style lang="scss">
</style>
