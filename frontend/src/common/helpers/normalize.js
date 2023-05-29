import doughSizes from "@/common/data/doughSizes";
import ingredients from "@/common/data/ingredients";
import sauces from "@/common/data/sauces";
import sizes from "@/common/data/sizes";

/**
 * Return a new object with new key and enum doughSizes
 * @param dough
 * @returns {*&{value: *}}
 */
export const normalizeDough = (dough) => {
  return {
    ...dough,
    value: doughSizes[dough.id],
  };
};

/**
 * Return a new object with new key and enum sizes
 * @param size
 * @returns {*&{value: *}}
 */
export const normalizeSize = (size) => {
  return {
    ...size,
    value: sizes[size.id],
  };
};

/**
 * Return a new object with new key and enum ingredients
 * @param ingredient
 * @returns {*&{value: *}}
 */
export const normalizeIngredients = (ingredient) => {
  return {
    ...ingredient,
    value: ingredients[ingredient.id],
  };
};

/**
 * Return a new object with new key and enum sauces
 * @param sauce
 * @returns {*&{value: *}}
 */
export const normalizeSauces = (sauce) => {
  return {
    ...sauce,
    value: sauces[sauce.id],
  };
};
