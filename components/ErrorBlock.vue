<template lang="pug">
.error-block
  strong.error-block__title.h2 Сервис временно недоступен
  NuxtLink.error-block__link.body-1(to="/" @click.prevent="pageStore.refresh") Обновить
</template>

<script lang="ts" setup>
const pageStore = usePageStore()
</script>

<style lang="scss">
.error-block {
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 50px;
  margin-bottom: 100px;
}

.error-block__link {
  @include submit();

  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
