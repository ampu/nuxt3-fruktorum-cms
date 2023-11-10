export const useFetchPage = (path: string) => {
  const runtimeConfig = useRuntimeConfig()
  const pageUrl = runtimeConfig.public.baseURL + encodeURIComponent(path)
  return useFetch(pageUrl)
}
