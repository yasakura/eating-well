import { Recipe } from "../entities/recipe.interface";

export interface RecipesGateway {
  // SECONDARY PORT !!!  Frontière entre les adapters et le coeur
  // Les implems ne se trouvent SURTOUT PAS dans corelogic mais dans "adapters"!
  retrieve(): Promise<Recipe[]>;

  // validAnswer(wordId: string, answer: number): Promise<boolean>;
}
