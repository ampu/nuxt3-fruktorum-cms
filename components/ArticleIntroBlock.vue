<template lang="pug">
section.intro
  .intro__left
    img.intro__image(:src="data.image" width="541" height="580")
  .intro__right
    h1.intro__title.h1 {{ data.title }}
    p.intro__reading-time
      ReadingTimeIcon
      | {{ data.reading_time }} мин время чтения
    p.intro__views-count
      ViewsCountIcon
      | {{ data.views_count }} прочитали статью
    p.intro__description.body-1 {{ data.short_description }}
</template>

<script lang="ts" setup>
import ReadingTimeIcon from '@/assets/images/reading-time.svg?component'
import ViewsCountIcon from '@/assets/images/views-count.svg?component'

const props = defineProps<{
  data: {
    title: string,
    image: string,
    reading_time: number,
    views_count: number,
    short_description: string,
  },
}>()
</script>

<style lang="scss">
.intro {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 100px;
}

.intro__image {
  display: flex;
  width: 541px;
  height: 580px;
  border-radius: 0 225px 0 0;
}

.intro__right {
  padding-top: 45px;
}

.intro__title {
  display: flex;
  margin-bottom: 30px;
}

.intro__reading-time {
  display: flex;
  align-items: center;
  gap: 8px;

  line-height: 1px;

  color: $gray;
}

.intro__views-count {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 50px;

  line-height: 1px;

  color: $gray;
}
</style>
