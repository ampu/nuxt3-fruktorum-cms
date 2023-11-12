<template lang="pug">
form.subscribe-form-block(
  method="POST"
  action="https://httpbin.org/post"
)
  strong.subscribe-form-block__title.h3 Подпишись на рассылку
  UiEmailInput.subscribe-form-block__input
  button.subscribe-form-block__submit.body-1(type="submit") Подписаться
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.subscribe-form-block {
  display: flex;
  align-items: center;
  flex-flow: wrap;
  gap: 30px;
  padding: 27px 30px;
  margin-bottom: 100px;
  width: 100%;

  background-color: $black;
  color: $white;
}

.subscribe-form-block__input {
  @include input();
  margin-top: auto;
  margin-left: auto;
  margin-right: 37px;

  @include tablet-mobile {
    margin-right: 0;
  }
}

.subscribe-form-block__submit {
  @include submit();

  @include tablet-mobile {
    width: 100%;
  }
}
</style>
