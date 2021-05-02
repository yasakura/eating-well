import { ActionsUnion, createAction } from "../../../redux/customAction";
import { Recipe } from "../../entities/recipe.interface";

export const Actions = {
  retrieveRecipes: () => createAction("RETRIEVE_RECIPES"),
  recipesRetrieved: (recipes: Recipe[]) =>
    createAction("RECIPES_RETRIEVED", { recipes }),
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Actions = ActionsUnion<typeof Actions>;
