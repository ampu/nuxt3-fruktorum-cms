<template lang="pug">
.app-footer
  .app-footer__container
    .app-footer__left
      AppLogo.app-footer__logo
      p.app-footer__description
        | Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности

    .app-footer__right
      p.app-footer__email
        span.app-footer__email-title email
        a.app-footer__email-text(href="mailto:testblogsupport@gmail.com") testblogsupport@gmail.com
      ul.app-footer__socials
        li(v-for="social in SOCIALS" :key="social.link")
          a(:href="social.link" target="_blank")
            img(:src="social.icon" :alt="social.title")

  SubscribeFormBlock.app-footer__subscribe
</template>

<script lang="ts" setup>
import FacebookIcon from '@/assets/images/facebook.svg?url'
import VkIcon from '@/assets/images/vk.svg?url'
import InstagramIcon from '@/assets/images/instagram.svg?url'
import TwitterIcon from '@/assets/images/twitter.svg?url'

const SOCIALS = [
  {title: `Facebook`, link: `https://facebook.com/`, icon: FacebookIcon},
  {title: `VK`, link: `https://vk.com/`, icon: VkIcon},
  {title: `Instagram`, link: `https://instagram.com/`, icon: InstagramIcon},
  {title: `Twitter`, link: `https://twitter.com/`, icon: TwitterIcon},
]
</script>

<style lang="scss">
.app-footer {
  display: flex;
  flex-flow: column;
  margin-top: auto;
}

.app-footer__container {
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 70px;
  padding-top: 50px;

  border-top: 1px solid $gray;
}

.app-footer__left {
  display: flex;
  flex-flow: column;
  width: 426px;

  @include mobile {
    width: auto;
  }
}

.app-footer__right {
  display: flex;
  flex-flow: column;
  width: 312px;
}

.footer__socials {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
}

.app-footer__email {
  display: flex;
  flex-flow: column;
}

.app-footer__email-text {
  font-size: 18px;
  line-height: 22px;
  text-decoration: none;

  color: inherit;

  &:hover {
    text-decoration: underline;
  }
}

.app-footer__email-title {
  color: $gray;
}

.app-footer__description {
  color: $gray;
}

.app-footer__socials {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
}

.app-footer__subscribe {
  margin-bottom: 0;
}
</style>
