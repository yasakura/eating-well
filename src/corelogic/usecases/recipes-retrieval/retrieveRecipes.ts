import { ThunkResult } from "../../../redux/configureStore";
import * as actionCreators from "./actionCreators";

const retrieveRecipes: ThunkResult<void> = async (
  dispatch,
  _getState,
  { recipesGateway }
) => {
  dispatch(actionCreators.Actions.retrieveRecipes());
  const recipes = await recipesGateway.retrieve();
  dispatch(actionCreators.Actions.recipesRetrieved(recipes));
};

export default retrieveRecipes;
