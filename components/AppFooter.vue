<template lang="pug">
.footer
  .footer__container
    .footer__left
      AppLogo
      p.footer__description
        | Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности

    .footer__right
      p.footer__email
        span.footer__email-title email
        a.footer__email-text(href="mailto:testblogsupport@gmail.com") testblogsupport@gmail.com
      ul.footer__socials
        li(v-for="social in SOCIALS" :key="social.link")
          a(:href="social.link" target="_blank")
            img(:src="social.icon" :alt="social.title")

  SubscribeFormBlock.footer__subscribe
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
.footer {
  display: flex;
  flex-flow: column;
  padding-top: 50px;
  margin-top: 100px;

  border-top: 1px solid $gray;
}

.footer__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 70px;
}

.footer__left {
  width: 426px;
}

.footer__right {
  width: 312px;
}

.footer__email {
  display: flex;
  flex-flow: column;
}

.footer__email-text {
  font-size: 18px;
  line-height: 22px;
  text-decoration: none;

  color: inherit;

  &:hover {
    text-decoration: underline;
  }
}

.footer__email-title {
  color: $gray;
}

.footer__description {
  color: $gray;
}

.footer__socials {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
}

.footer__subscribe {
  margin-bottom: 0;
}
</style>
