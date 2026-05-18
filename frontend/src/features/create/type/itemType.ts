interface itemCategory {
  id: string,
  name: string,
  icon: string,
}

interface itemCard {
  id: string;
  name: string;
  iconId: string;
  category: string;
  count: number;
  isStorage?: boolean;
  innerItems?: unknown[];
}

export type { itemCard, itemCategory }