import { RecipesGateway } from "../../../corelogic/gateways/recipesGateway.interface";
import { Recipe } from "../../../corelogic/entities/recipe.interface";

// SECONDARY ADAPTER (FAKE!!!) - UTILISABLE EN PROD !!
export default class InMemoryRecipesGateway implements RecipesGateway {
  // FAKE DE BACKEND DATA (c'est comme un carton avec des données)
  private _recipes: Recipe[] = [];

  // private _isNextAnswerInvalid = false;
  // public lastAnswerValidation = {};

  retrieve(): Promise<Recipe[]> {
    return Promise.resolve(this._recipes);
  }

  // validAnswer(wordId:string, answer:number): Promise<boolean> {
  //     this.lastAnswerValidation = {wordId, answer}
  //     return Promise.resolve(!this._isNextAnswerInvalid)
  // }

  // METHODE SECRETE !!! ABSENTE DE L'INTERFACE !
  // feed(words: Word[]) {
  //     this._words = words;
  // }

  // considerNextAnswerAsInvalid() {
  //     this._isNextAnswerInvalid = true;
  // }

  // get recipes(): Recipe[] {
  //   return this._recipes;
  // }
}
