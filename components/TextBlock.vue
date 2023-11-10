<template lang="pug">
.text-block.body-1(v-html="props.data")
</template>

<script lang="ts" setup>
const props = defineProps<{
  data: string,
}>()
</script>

<style lang="scss">
.text-block {
  display: flex;
  flex-flow: column;
  width: 882px;
  margin: 0 auto;
  margin-bottom: 100px;

  & h2 {
    font-size: 34px;
    line-height: 34px;
    font-weight: 900;
  }

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-left: 115px;
  }

  & li {
    display: flex;
    align-items: center;
    gap: 7px;

    &::before {
      content: "";
      width: 11px;
      height: 12px;
      display: flex;

      background: url("@/assets/images/list-style-type.svg") no-repeat;
    }
  }

  & blockquote {
    margin: 0;
    padding-left: 115px;

    background: url("@/assets/images/quote.svg") no-repeat 0 20px;

    & footer {
      color: $gray;
    }
  }
}
</style>
