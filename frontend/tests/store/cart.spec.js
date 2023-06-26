import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useCartStore } from "@/stores/cart";
import { prepareData } from "../helpers/prepare-data";

describe("Test cart store", () => {
  let cartStore;

  beforeEach(() => {
    setActivePinia(createPinia());
    prepareData();
    cartStore = useCartStore();
  });

  it("Should return cart total", () => {
    const pizza = {
      name: "Test pizza",
      sauceId: 1, // Tomato sauce for 50 rubles
      doughId: 1, // Thin dough for 300 rubles
      sizeId: 1, // 30 cm, multiplier 1
      ingredients: [
        { ingredientId: 1, quantity: 1 }, // Mushrooms for 33 rubles 1 = 33 rubles
        { ingredientId: 3, quantity: 2 }, // Salami for 42 rubles 2 = 84 rubles
      ],
    };

    // Pizza cost 50 + 300 + 33 + 84 = 467

    const misc = [
      { miscId: 1, quantity: 1 }, // Coca-Cola for 56 rubles 1 = 56 rubles
      { miscId: 2, quantity: 2 }, //Hot sauce for 30 rubles 2 = 60 rubles
    ];

    // Cost of additional goods 56 + 60 = 116

    // Total order value 467 + 116 = 583

    cartStore.pizzas = [{ quantity: 1, ...pizza }];
    cartStore.misc = misc;

    const result = cartStore.total;
    expect(result).toBe(583);
  });
});
