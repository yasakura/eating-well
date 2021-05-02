import {
  Action,
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
} from "redux";
import thunk, {
  ThunkAction,
  ThunkDispatch,
  ThunkMiddleware,
} from "redux-thunk";
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from "redux-devtools-extension";
import { AppState } from "./appState.interface";
import { Dependencies } from "../dependencies";
import recipesRetrieval from "./reducers/recipesRetrievalReducer.reducer";

export const configureStore = (dependencies: Partial<Dependencies>) =>
  createStore(
    combineReducers({
      recipesRetrieval,
    }),
    composeWithDevTools(
      applyMiddleware(
        dependencies
          ? (thunk.withExtraArgument(dependencies) as ThunkMiddleware<
              AppState,
              Action,
              Dependencies
            >)
          : thunk
      )
    )
  );

export type ReduxStore = Store<AppState> & {
  dispatch: ThunkDispatch<AppState, Dependencies, Action>;
};

export type ThunkResult<R> = ThunkAction<R, AppState, Dependencies, Action>;
