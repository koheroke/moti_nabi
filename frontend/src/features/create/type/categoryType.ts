type CategoryId =
  | 'all'
  | 'clothes'
  | 'gadget'
  | 'toiletry'
  | 'medicine'
  | 'document'
  | 'food'
  | 'storage'
  | 'bookmark'
  | 'create';

type Category = {
  id: CategoryId
  name: string,
  icon: string,
}
export type { CategoryId, Category }