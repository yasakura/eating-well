import { combineReducers } from "redux";
import { Recipe } from "../../corelogic/entities/recipe.interface";
import * as actionCreators from "../../corelogic/usecases/recipes-retrieval/actionCreators";

const data = (state: Recipe[] = [], action: actionCreators.Actions) => {
  switch (action.type) {
    case "RECIPES_RETRIEVED":
      return action.payload.recipes;
    default:
      return state;
  }
};

const fetching = (state: boolean = false, action: actionCreators.Actions) => {
  switch (action.type) {
    case "RETRIEVE_RECIPES":
      return true;
    case "RECIPES_RETRIEVED":
      return false;
    default:
      return state;
  }
};

// transforme le state avec les nouvelles données
const recipesRetrievalReducer = combineReducers({
  data,
  fetching,
});

export default recipesRetrievalReducer;
