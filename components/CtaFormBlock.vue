<template lang="pug">
.cta-form-block
  .cta-form-block__left
    img(:src="ctaFormImage" alt="" width="595" height="326")
  .cta-form-block__right
    form.cta-form-block__form(@submit.prevent)
      strong.cta-form-block__title.h2 Стань участником проекта
      input.cta-form-block__input.body-1(type="text" placeholder="Имя")
      input.cta-form-block__input.body-1(type="text" placeholder="Телефон")
      input.cta-form-block__input.body-1(type="text" placeholder="Email")
      button.cta-form-block__submit.body-1(type="submit") Присоединиться
</template>

<script lang="ts" setup>
import ctaFormImage from '@/assets/images/cta-form.jpg?url'
</script>

<style lang="scss">
.cta-form-block {
  display: flex;
  padding: 60px;
  margin-bottom: 100px;

  background-color: $black;
  color: $white;
}

.cta-form-block__form {
  margin-left: 60px;
}

.cta-form-block__title {
  display: flex;
  margin-bottom: 40px;
}

.cta-form-block__input {
  @include input();
  margin-bottom: 25px;
}

.cta-form-block__submit {
  @include submit();
  margin-top: 50px;
}
</style>
