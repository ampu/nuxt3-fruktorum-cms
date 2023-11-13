<template lang="pug">
.article-list-block
  h2.article-list-block__title {{ data.title }}
  .article-list-block__list
    ArticleItemBlock(
      v-for="article in data.articles"
      :key="article.link"
      :article="article"
    )
</template>

<script lang="ts" setup>
import type {Article} from '~/utils/types'

const props = defineProps<{
  data: {
    title: string,
    articles: Article[],
  },
}>()
</script>

<style lang="scss">
.article-list-block {
  display: flex;
  flex-flow: column;
  margin-bottom: 100px;
}

.article-list-block__title {
  font-size: 34px;
  line-height: 46px;

  @include tablet {
    text-align: center;
  }
}

.article-list-block__list {
  display: flex;
  flex-flow: wrap;
  gap: 60px 30px;
  justify-content: center;
  align-items: center;
}
</style>
