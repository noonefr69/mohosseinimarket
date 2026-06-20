export interface CategoryProps {
  _id: string;
  slug: string;
  name_fa: string;
  name_en?: string;
  subcategory_slug?: subcategory_slug_props[];
}

export type subcategory_slug_props = {
  _id: string;
  slug: string;
  name_fa: string;
  name_en: string;
};

export type GetCategoryResult =
  | { success: true; data: CategoryProps[] }
  | { success: false; error: string };
