<template lang="pug">
.slider-block
  .slider-block__container
    Swiper(
      v-bind="options"
      @init="onInit"
      @activeIndexChange="onChange"
    )
      SwiperSlide(
        v-for="link in props.data"
        :key="link"
      )
        .slider-block__image-container
          img(
            :src="link"
            class="slider-block__image"
            alt=""
            width="1112"
            height="550"
          )
    button.slider-block__prev(
      @click="onPrev"
      :disabled="currentSlide === 0"
    )
      PrevIcon
    button.slider-block__next(
      @click="onNext"
      :disabled="currentSlide + 1 === data.length"
    )
      NextIcon
    div.slider-block__pagination-container.body-1
      div.slider-block__pagination
        | {{ currentSlide + 1 }} / {{ props.data.length }}
</template>

<script lang="ts" setup>
import {nanoid} from 'nanoid'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import PrevIcon from '@/assets/images/prev.svg?component'
import NextIcon from '@/assets/images/next.svg?component'

const props = defineProps<{
  data: string[],
}>()

const swiper = ref<any>()
const currentSlide = ref(0)

const options = {
  slidesPerView: 1,
}

const onInit = (instance: any) => {
  swiper.value = instance
}

const onChange = () => {
  currentSlide.value = swiper.value.activeIndex
}

const onPrev = () => {
  swiper.value.slidePrev()
}

const onNext = () => {
  swiper.value.slideNext()
}
</script>

<style lang="scss">
.slider-block {
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  margin-bottom: 100px;
  width: 100%;
}

.slider-block__container {
  position: relative;
  width: 100%;
}

.slider-block__image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.slider-block__image {
  width: 1112px;
  height: 550px;
  object-fit: cover;

  @include tablet {
    width: 100%;
    height: auto;
  }

  @include mobile {
    width: 460px;
    height: auto;
  }
}

.slider-block__pagination-container {
  position: relative;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider-block__pagination {
  width: auto;
  margin: auto;
}

.slider-block__prev,
.slider-block__next {
  content: "";
  position: absolute;
  z-index: 1;
  top: 245px;
  left: 0;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: $black;
  cursor: pointer;

  &.swiper-button-disabled,
  &:disabled {
    background-color: $gray;
    pointer-events: none;
  }

  @include tablet {
    top: 160px;
  }

  @include mobile {
    top: 84px;
  }
}

.slider-block__next {
  left: auto;
  right: 0;
}
</style>
