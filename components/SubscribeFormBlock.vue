<template lang="pug">
form.subscribe-form-block(@submit.prevent)
  strong.subscribe-form-block__title.h3 Подпишись на рассылку
  input.subscribe-form-block__input.body-1(placeholder="Email")
  button.subscribe-form-block__submit.body-1(type="submit") Подписаться
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.subscribe-form-block {
  display: flex;
  align-items: center;
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
}

.subscribe-form-block__submit {
  @include submit();
}
</style>
