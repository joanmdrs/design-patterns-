import { AlcoholicDrink } from "./visitor/alcoholic-drink";
import { Cigarette } from "./visitor/cigarette";
import { Food } from "./visitor/food";


export interface TaxVisitorProtocol {
    calculateTaxesForFood(food: Food): number;
    calculateTaxesForCigarette(cigarette: Cigarette): number;
    calculateTaxesForAlcoholicDrink(alcoholic: AlcoholicDrink): number;
}