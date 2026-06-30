export interface CategoryProps {
  _id: string;
  name: string;
  icon?: string;
}

export type GetCategoryResult =
  | { success: true; data: CategoryProps[] }
  | { success: false; error: string };
