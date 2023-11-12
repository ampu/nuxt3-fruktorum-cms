<template lang="pug">
.article-item-block
  h3.article-item-block__title.h3 {{ article.title }}
  img.article-item-block__image(:src="article.image" alt="" width="427" height="320")
  NuxtLink.article-item-block__link.body-1(:to="article.link") Читать
</template>

<script lang="ts" setup>
import type {Article} from '~/utils/types'

const props = defineProps<{
  article: Article,
}>()
</script>

<style lang="scss">
.article-item-block {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 426px;

  @include mobile {
    width: $width--mobile;
  }
}

.article-item-block__image {
  order: -1;
  display: flex;
  width: 426px;
  height: 320px;
  object-fit: cover;
  margin-bottom: 20px;

  @include tablet-mobile {
    width: 100%;
    height: auto;
  }
}

.article-item-block__title {
  display: flex;
  margin-bottom: 30px;
}

.article-item-block__link {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
  margin-right: auto;

  text-decoration: none;

  background-color: #000000;
  color: #ffffff;

  &:hover {
    background-color: $blue;
  }

  @include tablet-mobile {
    width: 100%;
  }
}
</style>
