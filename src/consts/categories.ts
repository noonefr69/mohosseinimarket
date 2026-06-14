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
      $oid: "6a2d54ef0200271fa2368b8f",
    },
    slug: "dairy",
    name_fa: "لبنیات",
    name_en: "Dairy",
    icon: diaryIcon,
    subcategories: [
      {
        slug: "milk",
        name_fa: "شیر",
        name_en: "Milk",
      },
      {
        slug: "yogurt",
        name_fa: "ماست",
        name_en: "Yogurt",
      },
    ],
  },
  {
    _id: {
      $oid: "6a2d56200200271fa2368b90",
    },
    slug: "grocery-essentials",
    name_fa: "کالا های اساسی و خواربار",
    name_en: "Grocery Essentials",
    icon: groceryIcon,
    subcategories: [],
  },
  {
    _id: {
      $oid: "6a2d5ada0200271fa2368b93",
    },
    slug: "protein-eggs",
    name_fa: "مواد پروتئینی و تخم مرغ",
    name_en: "Protein & Eggs",
    icon: eggsIcon,
    subcategories: [],
  },
  {
    _id: {
      $oid: "6a2d5b570200271fa2368b95",
    },
    slug: "breakfast",
    name_fa: "صبحانه",
    name_en: "breakfast",
    icon: breakfastIcon,
    subcategories: [],
  },
  {
    _id: {
      $oid: "6a2d5bae0200271fa2368b96",
    },
    slug: "beverages",
    name_fa: "نوشیدنی های سرد",
    name_en: "Beverages",
    icon: drinkIcon,
    subcategories: [],
  },
  {
    _id: {
      $oid: "6a2d5be60200271fa2368b97",
    },
    slug: "ready-made-canned-food",
    name_fa: "کنسرو و غذای آماده",
    name_en: "Ready Made Canned Food",
    icon: canIcon,
    subcategories: [],
  },
  {
    _id: {
      $oid: "6a2d5c250200271fa2368b98",
    },
    slug: "dried-fruit-nuts",
    name_fa: "خشکبار و شیرینی",
    name_en: "Dried Fruit Nuts",
    icon: sweetIcon,
    subcategories: [],
  },
  {
    _id: {
      $oid: "6a2d5c590200271fa2368b99",
    },
    slug: "snacks",
    name_fa: "تنقلات",
    name_en: "Snacks",
    icon: snackIcon,
    subcategories: [],
  },
  {
    _id: {
      $oid: "6a2d5c9c0200271fa2368b9b",
    },
    slug: "baking-tools",
    name_fa: "ابزار قنادی",
    name_en: "Baking Tools",
    icon: candleIcon,
    subcategories: [],
  },
  {
    _id: {
      $oid: "6a2d5d100200271fa2368b9d",
    },
    slug: "health-beauty",
    name_fa: "بهداشتی و آرایشی",
    name_en: "Health Beauty",
    icon: healthIcon,
    subcategories: [],
  },
  {
    _id: {
      $oid: "6a2d5d640200271fa2368b9e",
    },
    slug: "warm-drinks",
    name_fa: "نوشیدنی های گرم",
    name_en: "Warm Drinks",
    icon: warmDrinkIcon,
    subcategories: [],
  },
  {
    _id: {
      $oid: "6a2d5d7f0200271fa2368b9f",
    },
    slug: "salts-and-pickles",
    name_fa: "شور و ترشیجات",
    name_en: "Salts And Pickles",
    icon: pickelsIcon,
    subcategories: [],
  },
];
