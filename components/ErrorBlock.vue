<template lang="pug">
.error-block
  .error-block__container
    strong.error-block__title.h2 Сервис временно недоступен
    NuxtLink.error-block__link.body-1(to="/" @click.prevent="pageStore.refresh") Обновить
</template>

<script lang="ts" setup>
const pageStore = usePageStore()
</script>

<style lang="scss">
.error-block {
  margin: auto;
}

.error-block__container {
  margin-bottom: 100px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 100%;
}

.error-block__link {
  @include submit();

  color: #ffffff;
  text-decoration: none;

  &:hover {
    color: $blue;
  }
}
</style>
