<template lang="pug">
.RelatedArticles
  h2.RelatedArticles__title {{ data.title }}
  .RelatedArticles__list
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
.RelatedArticles {
  display: flex;
  flex-flow: column;
  margin-bottom: 100px;
}

.RelatedArticles__title {
  font-size: 34px;
  line-height: 46px;
}

.RelatedArticles__list {
  display: flex;
  flex-flow: wrap;
  gap: 60px 30px;
}
</style>
