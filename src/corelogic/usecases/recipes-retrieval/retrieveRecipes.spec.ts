import { configureStore, ReduxStore } from "../../../redux/configureStore";
import retrieveRecipes from "./retrieveRecipes";
import { AppState } from "../../../redux/appState.interface";
import InMemoryRecipesGateway from "../../../adapters/secondary/gateways/inMemoryRecipesGateway";

describe("Recipes retrieval", () => {
  let recipesGateway: InMemoryRecipesGateway;
  let store: ReduxStore;
  let initialState: AppState;

  beforeEach(() => {
    recipesGateway = new InMemoryRecipesGateway();
    store = configureStore({ recipesGateway });
    initialState = store.getState();
  });

  // eslint-disable-next-line jest/no-done-callback
  it("should track the process of recipes retrieval", (done) => {
    const unsubscribe = store.subscribe(() => {
      expect(store.getState()).toEqual({
        ...initialState,
        recipesRetrieval: {
          data: [],
          fetching: true,
        },
      });
      unsubscribe();
      done();
    });
    store.dispatch(retrieveRecipes);
  });
});
