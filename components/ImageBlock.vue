<template lang="pug">
.image-block
  img.image-block__image(:src="data.src" alt="")
  span.image-block__caption.body-2 {{ data.caption }}
</template>

<script lang="ts" setup>
const props = defineProps<{
  data: {
    src: string,
    caption: string,
  }
}>()
</script>

<style lang="scss">
.image-block {
  display: flex;
  flex-flow: column;
  margin-bottom: 100px;
}

.image-block__image {
  display: flex;
  width: 100%;
  height: 550px;
  margin-bottom: 10px;
  object-fit: cover;

  border-radius: 0 225px 0 0;
}

.image-block__caption {
  display: flex;
  margin-left: auto;

  color: $gray;
}
</style>
