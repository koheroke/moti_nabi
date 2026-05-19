import { filteredItems } from "@/features/create/driver/itemListDriver"
import type { itemCard } from "../type/itemType"
const this_items: itemCard[] = filteredItems
import { type addItemType } from "../type/itemType"
const useItemListWork = () => {
  const get = () => {
    return this_items
  }
  const searchName = (search: string) => {
    const newItems = this_items.filter((item: itemCard) => item.name.includes(search))
    return newItems
  }
  const searchId = (search: string) => {
    const newItems = this_items.filter((item: itemCard) => item.id == search)
    console.log(newItems)
    return newItems
  }
  const filtered = (categorie: string) => {
    const newItems = this_items.filter((item: itemCard) => item.category === categorie)
    return newItems
  }
  const addItem = (addItem: addItemType) => {

  }

  return { searchName, filtered, get, searchId, addItem }
}
export { useItemListWork }
//フロント用