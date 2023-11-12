import {defineStore} from 'pinia'
import {useFetchPage} from '~/composables/use-fetch-page'

export const usePageStore = defineStore(`page`, () => {
  const route = useRoute()
  const data = ref<any>({})
  const pending = ref(false)
  const error = ref()
  const doRefresh = ref()

  watchEffect(async () => {
    const page = await useFetchPage(route.path)
    data.value = page.data.value
    pending.value = page.pending.value
    error.value = page.error.value
    doRefresh.value = page.refresh

    if (typeof window !== `undefined`) {
      window.scrollTo(0, 0)
    }
  })

  const refresh = () => {
    doRefresh.value?.()
  }

  return {
    data,
    pending,
    error,
    refresh,
  }
})
