import diaryIcon from "../../public/category-svgs/diary.svg";
import breakfastIcon from "../../public/category-svgs/breakfast.svg";
import canIcon from "../../public/category-svgs/can.svg";
import drinkIcon from "../../public/category-svgs/drink.svg";
import eggsIcon from "../../public/category-svgs/eggs.svg";
import groceryIcon from "../../public/category-svgs/grocery.svg";
import healthIcon from "../../public/category-svgs/health.svg";
import pickelsIcon from "../../public/category-svgs/pickels.svg";
import snackIcon from "../../public/category-svgs/snack.svg";
import sweetIcon from "../../public/category-svgs/sweet.svg";
import warmDrinkIcon from "../../public/category-svgs/warm-drink.svg";
import candleIcon from "../../public/category-svgs/candle.svg";

export const categories = [
  {
    _id: {
      $oid: "6a42a418f84a60b801e5c78c",
    },
    slug: "dairy",
    name_fa: "لبنیات",
    name_en: "Dairy",
    icon: diaryIcon,
  },
  {
    _id: {
      $oid: "6a42a418f84a60b801e5c791",
    },
    slug: "grocery-essentials",
    name_fa: "کالا های اساسی و خواربار",
    name_en: "Grocery Essentials",
    icon: groceryIcon,
  },
  {
    _id: {
      $oid: "6a42a418f84a60b801e5c789",
    },
    slug: "protein-eggs",
    name_fa: "مواد پروتئینی و تخم مرغ",
    name_en: "Protein & Eggs",
    icon: eggsIcon,
  },
  {
    _id: {
      $oid: "6a42a418f84a60b801e5c787",
    },
    slug: "breakfast",
    name_fa: "صبحانه",
    name_en: "breakfast",
    icon: breakfastIcon,
  },
  {
    _id: {
      $oid: "6a42a418f84a60b801e5c788",
    },
    slug: "beverages",
    name_fa: "نوشیدنی های سرد",
    name_en: "Beverages",
    icon: drinkIcon,
  },
  {
    _id: {
      $oid: "6a42a418f84a60b801e5c78f",
    },
    slug: "ready-made-canned-food",
    name_fa: "کنسرو و غذای آماده",
    name_en: "Ready Made Canned Food",
    icon: canIcon,
  },
  {
    _id: {
      $oid: "6a42a418f84a60b801e5c790",
    },
    slug: "dried-fruit-nuts",
    name_fa: "خشکبار و شیرینی",
    name_en: "Dried Fruit Nuts",
    icon: sweetIcon,
  },
  {
    _id: {
      $oid: "6a42a418f84a60b801e5c792",
    },
    slug: "snacks",
    name_fa: "تنقلات",
    name_en: "Snacks",
    icon: snackIcon,
  },
  {
    _id: {
      $oid: "6a42a418f84a60b801e5c78a",
    },
    slug: "baking-tools",
    name_fa: "ابزار قنادی",
    name_en: "Baking Tools",
    icon: candleIcon,
  },
  {
    _id: {
      $oid: "6a42a418f84a60b801e5c78d",
    },
    slug: "health-beauty",
    name_fa: "بهداشتی و آرایشی",
    name_en: "Health Beauty",
    icon: healthIcon,
  },
  {
    _id: {
      $oid: "6a42a418f84a60b801e5c78e",
    },
    slug: "warm-drinks",
    name_fa: "نوشیدنی های گرم",
    name_en: "Warm Drinks",
    icon: warmDrinkIcon,
  },
  {
    _id: {
      $oid: "6a42a418f84a60b801e5c78b",
    },
    slug: "salts-and-pickles",
    name_fa: "شور و ترشیجات",
    name_en: "Salts And Pickles",
    icon: pickelsIcon,
  },
];
