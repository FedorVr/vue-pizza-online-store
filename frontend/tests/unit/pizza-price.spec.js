import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { pizzaPrice } from "@/common/helpers/pizza-price";
import { prepareData } from "../helpers/prepare-data";

describe("Test pizza price", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    prepareData();
  });

  it("Should return price of the pizza", () => {
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

    // 50 + 300 + 33 + 84 = 467

    const result = pizzaPrice(pizza);
    expect(result).toBe(467);
  });
});
