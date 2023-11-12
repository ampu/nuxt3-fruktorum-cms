<template lang="pug">
.cta-form-block
  .cta-form-block__left
    img.cta-form-block__image(:src="ctaFormImage" alt="" width="595" height="326")
  .cta-form-block__right
    form.cta-form-block__form(
      method="POST"
      action="https://httpbin.org/post"
    )
      strong.cta-form-block__title.h2 Стань участником проекта
      .cta-form-block__inputs
        UiNameInput.cta-form-block__input
        UiPhoneInput.cta-form-block__input.cta-form-block__input--phone
        UiEmailInput.cta-form-block__input
      button.cta-form-block__submit.body-1(type="submit") Присоединиться
</template>

<script lang="ts" setup>
import ctaFormImage from '@/assets/images/cta-form.jpg?url'
</script>

<style lang="scss">
.cta-form-block {
  display: flex;
  flex-flow: wrap;
  padding: 60px;
  margin-bottom: 100px;

  background-color: $black;
  color: $white;

  @include tablet {
    padding: 40px;
    padding-top: 80px;
  }

  @include mobile {
    padding: 20px;
  }
}

.cta-form-block__left {
  display: flex;
  justify-content: center;
  align-items: center;

  @include tablet {
    width: 100%;
    margin-bottom: 30px;
  }
}

.cta-form-block__image {
  width: 595px;
  height: 326px;

  @include mobile {
    width: 100%;
    height: auto;
    margin-bottom: 30px;
  }
}

.cta-form-block__form {
  margin-left: 60px;

  @include tablet-mobile {
    width: 100%;
    margin-left: 0;
  }
}

.cta-form-block__title {
  display: flex;
  margin-bottom: 40px;

  @include tablet {
    justify-content: center;
    aign-items: center;
  }
}

.cta-form-block__inputs {
  width: 353px;

  @include tablet {
    width: calc($width--tablet - 80px);
  }

  @include mobile {
    width: 100%;
  }
}

.cta-form-block__input {
  @include input();
  margin-bottom: 25px;
  width: 100%;

  &--phone {
    width: calc(100% - 16px);
  }

  &:-webkit-autofill {
    caret-color: $white;
    -webkit-text-fill-color: $white;
    -webkit-box-shadow: 0 0 0 30px $black inset;
  }
}

.cta-form-block__submit {
  @include submit();
  margin-top: 50px;
}
</style>
