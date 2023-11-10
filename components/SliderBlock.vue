<template lang="pug">
.slider-block
  .slider-block__container
    Swiper(v-bind="options")
      SwiperSlide(v-for="link in props.data" :key="link")
        img(
          :src="link"
          class="slider-block__image"
          alt=""
          width="1112"
          height="550"
        )
    div(:class="`slider-block__prev slider-block__prev-${id}`")
      PrevIcon
    div(:class="`slider-block__next slider-block__next-${id}`")
      NextIcon
    div.slider-block__pagination-container.body-1
      div(:class="`slider-block__pagination slider-block__pagination-${id}`")
</template>

<script lang="ts" setup>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import {Pagination, Navigation} from 'swiper'
import {nanoid} from 'nanoid'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import PrevIcon from '@/assets/images/prev.svg?component'
import NextIcon from '@/assets/images/next.svg?component'

const props = defineProps<{
  data: string[],
}>()

const id = nanoid()

const options = {
  slidesPerView: 1,
  slidesPerGroup: 1,
  modules: [
    Pagination,
    Navigation,
  ],
  pagination: {
    el: `.slider-block__pagination-${id}`,
    type: `fraction`,
  },
  navigation: {
    nextEl: `.slider-block__next-${id}`,
    prevEl: `.slider-block__prev-${id}`,
  },
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

  & .swiper-pagination {
    position: relative !important;
  }
}

.slider-block__image {
  display: flex;
  margin: 0 auto;
  width: 1112px;
  height: 550px;
  object-fit: cover;
}

.slider-block__pagination-container {
  margin-top: 25px;
  display: flex;
  justify-content: center;
}

.slider-block__pagination {
  width: auto;
}

.slider-block__prev,
.slider-block__next {
  position: absolute;
  z-index: 1;
  top: 245px;
  left: 0;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: $black;
  cursor: pointer;

  &.swiper-button-disabled {
    background-color: $gray;
    pointer-events: none;
  }
}

.slider-block__next {
  left: auto;
  right: 0;
}
</style>
