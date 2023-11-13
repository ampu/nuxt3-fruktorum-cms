<template lang="pug">
section.article-intro-block
  .article-intro-block__left
    img.article-intro-block__image(:src="data.image" width="541" height="580")
  .article-intro-block__right
    h1.article-intro-block__title.h1 {{ data.title }}
    p.article-intro-block__reading-time
      ReadingTimeIcon
      | {{ data.reading_time }} мин время чтения
    p.article-intro-block__views-count
      ViewsCountIcon
      | {{ data.views_count }} прочитали статью
    p.article-intro-block__description.body-1 {{ data.short_description }}
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
.article-intro-block {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 100px;

  @include tablet-mobile {
    flex-flow: wrap;
  }
}

.article-intro-block__left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.article-intro-block__image {
  display: flex;
  width: 541px;
  height: 580px;
  border-radius: 0 225px 0 0;
  object-fit: cover;

  @include mobile {
    margin: auto;
    width: 100%;
    height: auto;
  }
}

.article-intro-block__right {
  padding-top: 70px;

  @include tablet-mobile {
    padding-top: 0;
  }
}

.article-intro-block__title {
  margin: 0;
  margin-bottom: 30px;
  display: flex;
}

.article-intro-block__reading-time {
  display: flex;
  align-items: center;
  gap: 8px;

  line-height: 1px;

  color: $gray;
}

.article-intro-block__views-count {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 50px;

  line-height: 1px;

  color: $gray;
}
</style>
