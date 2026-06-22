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
      },
      {
        slug: "yogurt",
        name_fa: "ماست",
      },
      {
        slug: "cheese",
        name_fa: "پنیر",
      },
      {
        slug: "cream",
        name_fa: "خامه",
        name_en: "Cream",
      },
      {
        slug: "butter",
        name_fa: "کره",
      },
      {
        slug: "doogh",
        name_fa: "دوغ",
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
    subcategories: [
      {
        slug: "jams-butter",
        name_fa: "مربا",
      },
      {
        slug: "honey",
        name_fa: "عسل",
      },
      {
        slug: "peanut-butter",
        name_fa: "کره بادام زمینی",
      },
      {
        slug: "breakfast-chocolates",
        name_fa: "شکلات صبحانه و کرم بیسکویت",
      },
      {
        slug: "breakfast-cereal",
        name_fa: "غلات صبحانه",
      },
      {
        slug: "halva-arde-sesame",
        name_fa: "حلوا, ارده و کنجد",
      },
    ],
  },
  {
    _id: {
      $oid: "6a2d5bae0200271fa2368b96",
    },
    slug: "beverages",
    name_fa: "نوشیدنی های سرد",
    name_en: "Beverages",
    icon: drinkIcon,
    subcategories: [
      {
        slug: "water",
        name_fa: "آب معدنی و آب",
      },
      {
        slug: "soft-drink",
        name_fa: "نوشابه",
      },
      {
        slug: "energy-drink",
        name_fa: "انرژی‌زا",
      },
      {
        slug: "juice-syrup",
        name_fa: "آبمیوه و شربت",
      },
      {
        slug: "non-alcoholic-beer",
        name_fa: "ماءالشعیر",
      },
      {
        slug: "distillates-rosewater",
        name_fa: "عرقیات و گلاب",
      },
    ],
  },
  {
    _id: {
      $oid: "6a2d5be60200271fa2368b97",
    },
    slug: "ready-made-canned-food",
    name_fa: "کنسرو و غذای آماده",
    name_en: "Ready Made Canned Food",
    icon: canIcon,
    subcategories: [
      {
        slug: "tuna-fish",
        name_fa: "کنسرو ماهی",
      },
      {
        slug: "ready-made-food",
        name_fa: "غذای نیمه آماده",
      },
      {
        slug: "pre-cooked-meals",
        name_fa: "غذای آماده",
      },
      {
        slug: "canned-food",
        name_fa: "کمپوت",
      },
      {
        slug: "canned-beans-and-vegetables",
        name_fa: "کنسرو حبوبات و سبزیجات",
      },
    ],
  },
  {
    _id: {
      $oid: "6a2d5c250200271fa2368b98",
    },
    slug: "dried-fruit-nuts",
    name_fa: "خشکبار و شیرینی",
    name_en: "Dried Fruit Nuts",
    icon: sweetIcon,
    subcategories: [
      {
        slug: "khorma",
        name_fa: "خرما",
      },
      {
        slug: "dessert",
        name_fa: "دسر",
      },
      {
        slug: "sweets",
        name_fa: "شیرینی",
      },
      {
        slug: "wool",
        name_fa: "پشمک",
      },
      {
        slug: "sohan",
        name_fa: "سوهان",
      },
    ],
  },
  {
    _id: {
      $oid: "6a2d5c590200271fa2368b99",
    },
    slug: "snacks",
    name_fa: "تنقلات",
    name_en: "Snacks",
    icon: snackIcon,
    subcategories: [
      {
        slug: "cheese-puffs",
        name_fa: "پفک",
      },
      {
        slug: "chips-popcorn",
        name_fa: "چیپس و چسفیل",
      },
      {
        slug: "biscuits-wafers",
        name_fa: "بیسکویت و ویفر",
      },
      {
        slug: "nuts-trail-mix",
        name_fa: "تخمه و مغزدار طعم‌دار",
      },
      {
        slug: "chewing-gum",
        name_fa: "آدامس",
      },
      {
        slug: "lavashak",
        name_fa: "لواشک",
      },
      {
        slug: "random-food",
        name_fa: "خوراکی و تخم مرغ شانسی",
      },
      {
        slug: "cookies",
        name_fa: "کیک و کلوچه",
      },
      {
        slug: "gummi-bear",
        name_fa: "پاستیل",
      },
      {
        slug: "chocolate-and-cocoa-products",
        name_fa: "شکلات و فرآورده‌های کاکائویی",
      },
      {
        slug: "candy",
        name_fa: "آبنبات",
      },
      {
        slug: "a-variety-of-loads-and-nutritious-snacks",
        name_fa: "انواع بار و تنقلات مغذی",
      },
    ],
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
    subcategories: [
      {
        slug: "pickle",
        name_fa: "خیارشور",
      },
      {
        slug: "olives",
        name_fa: "زیتون",
      },
      {
        slug: "salties",
        name_fa: "شور",
      },
      {
        slug: "salted-marzipan",
        name_fa: "ترشی",
      },
    ],
  },
];
