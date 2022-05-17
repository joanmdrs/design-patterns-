import { BrazilTaxVisitor } from "../brazil-tax-visitor";
import { AlcoholicDrink } from "./alcoholic-drink";
import { Cigarette } from "./cigarette";
import { Food } from "./food";

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholicDrink = new AlcoholicDrink(5);

const brazilTaxVisitor = new BrazilTaxVisitor();


const cart = [food, cigarette, alcoholicDrink];
const total = cart.reduce((sum, item) => item.getPrice() + sum, 0);
const totalWithTaxes = cart.reduce((sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum, 0);

console.log(total);