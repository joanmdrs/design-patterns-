import { TaxVisitorProtocol } from "./tax-visitor-protocol";
import { AlcoholicDrink } from "./visitor/alcoholic-drink";
import { Cigarette } from "./visitor/cigarette";
import { Food } from "./visitor/food";

export class BrazilTaxVisitor implements TaxVisitorProtocol {
    calculateTaxesForFood(food: Food): number {
        return food.getPrice() + food.getPrice() * 0.05;
    }

    calculateTaxesForCigarette(cigarette: Cigarette): number {
        return cigarette.getPrice() + cigarette.getPrice() * 1.5;
    }

    calculateTaxesForAlcoholicDrink(alcoholic: AlcoholicDrink): number {
        return alcoholic.getPrice() + alcoholic.getPrice() * 0.5;
    }
}