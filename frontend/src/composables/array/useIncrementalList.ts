import { ref ,computed, type Ref} from "vue"
export const useIncrementalList = <T>(items: Ref<T[]>, step: number) => {
  const count = ref(step)

  const visibleItems = computed(() => {
    return items.value.slice(0, count.value)
  })

  const more = () => {
    count.value += step
  }

  return {
    visibleItems,
    more
  }
}